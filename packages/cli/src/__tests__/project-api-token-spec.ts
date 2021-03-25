jest.mock("../api");
import { sync } from "../actions/sync";
import {
  defaultPlasmicJson,
  expectProject1Components,
  expectProject1PlasmicJson,
  expectProjectAndDepPlasmicJson,
  mockApi,
  opts,
  project1Config,
  standardTestSetup,
  standardTestTeardown,
  tmpRepo,
} from "../test-common/fixtures";

// Reset the test project directory
beforeEach(() => {
  standardTestSetup(false);
});

afterEach(() => {
  standardTestTeardown();
});

function removeAuth() {
  opts.auth = undefined;
  // Don't need to remove this file, we just do for good measure.
  tmpRepo.deletePlasmicAuth();
}

describe("Project API tokens", () => {
  test("is filled in by auth'd user so that a second run does not need auth", async () => {
    opts.projects = ["projectId1"];
    await expect(sync(opts)).resolves.toBeUndefined();

    expectProject1Components();

    expectProject1PlasmicJson();

    // Re-run, this time with no auth.
    removeAuth();
    await expect(sync(opts)).resolves.toBeUndefined();
  });

  test("is corrected by auth'd user if token was initially incorrect", async () => {
    opts.projects = ["projectId1"];
    tmpRepo.writePlasmicJson({
      ...defaultPlasmicJson,
      projects: [{ ...project1Config, projectApiToken: "blah" }],
    });
    await expect(sync(opts)).resolves.toBeUndefined();

    expectProject1Components();

    expectProject1PlasmicJson();

    // Re-run, this time with no auth.
    removeAuth();
    await expect(sync(opts)).resolves.toBeUndefined();
  });

  test("is filled in by auth'd user if project exists but token was initially missing", async () => {
    opts.projects = ["projectId1"];
    tmpRepo.writePlasmicJson({
      ...defaultPlasmicJson,
      projects: [project1Config],
    });
    await expect(sync(opts)).resolves.toBeUndefined();

    expectProject1Components();

    expectProject1PlasmicJson();

    // Re-run, this time with no auth.
    removeAuth();
    await expect(sync(opts)).resolves.toBeUndefined();
  });

  test("when not available, should prompt for auth", async () => {
    opts.projects = ["projectId1"];
    removeAuth();
    await expect(sync(opts)).rejects.toThrow(
      "Could not find the authentication credentials"
    );
  });

  // TODO: Would be nice to eventually make this not fail outright but to prompt for auth.
  test("when incorrect, should fail", async () => {
    opts.projects = ["projectId1"];
    removeAuth();
    tmpRepo.writePlasmicJson({
      ...defaultPlasmicJson,
      projects: [{ ...project1Config, projectApiToken: "blah" }],
    });
    await expect(sync(opts)).rejects.toThrow(
      "No user+token, and project API tokens don't match"
    );
  });

  test("works even if you have tokens for base but not deps", async () => {
    // Make project1 have a dependency.
    standardTestSetup();

    opts.projects = ["projectId1"];
    removeAuth();
    tmpRepo.writePlasmicJson({
      ...defaultPlasmicJson,
      projects: [{ ...project1Config, projectApiToken: "abc" }],
    });
    await expect(sync(opts)).resolves.toBeUndefined();

    expectProject1Components();

    expectProjectAndDepPlasmicJson();
  });

  test("works even if dependency was determined to not need an update", async () => {
    // Make project1 have a dependency.
    standardTestSetup();

    opts.projects = ["projectId1"];
    await expect(sync(opts)).resolves.toBeUndefined();

    // We sync project1 which got updated, but the dependency is still same version.
    opts.force = false;
    removeAuth();
    mockApi.getMockProject("projectId1", "1.2.3").version = "1.2.4";
    await expect(sync(opts)).resolves.toBeUndefined();
  });

  test("should prompt for auth if you have only irrelevant tokens", async () => {
    opts.projects = ["dependencyId1"];
    removeAuth();
    tmpRepo.writePlasmicJson({
      ...defaultPlasmicJson,
      projects: [{ ...project1Config, projectApiToken: "abc" }],
    });
    await expect(sync(opts)).rejects.toThrow(
      "Could not find the authentication credentials"
    );
  });
});
