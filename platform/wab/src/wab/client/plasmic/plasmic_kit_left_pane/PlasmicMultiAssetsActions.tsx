// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: d693eBfNDs7j

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicMultiAssetsActions.module.css"; // plasmic-import: d693eBfNDs7j/css

import TrashIcon from "../plasmic_kit/PlasmicIcon__Trash"; // plasmic-import: 7bxap5bzcUODa/icon
import CloseIcon from "../plasmic_kit/PlasmicIcon__Close"; // plasmic-import: hy7vKrgdAZwW4/icon

createPlasmicElementProxy;

export type PlasmicMultiAssetsActions__VariantMembers = {
  withoutControlBar: "withoutControlBar";
};
export type PlasmicMultiAssetsActions__VariantsArgs = {
  withoutControlBar?: SingleBooleanChoiceArg<"withoutControlBar">;
};
type VariantPropType = keyof PlasmicMultiAssetsActions__VariantsArgs;
export const PlasmicMultiAssetsActions__VariantProps =
  new Array<VariantPropType>("withoutControlBar");

export type PlasmicMultiAssetsActions__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMultiAssetsActions__ArgsType;
export const PlasmicMultiAssetsActions__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicMultiAssetsActions__OverridesType = {
  root?: p.Flex<"div">;
  controlBar?: p.Flex<"div">;
  numSelected?: p.Flex<"div">;
  deleteSelected?: p.Flex<"div">;
  cancel?: p.Flex<"div">;
};

export interface DefaultMultiAssetsActionsProps {
  children?: React.ReactNode;
  withoutControlBar?: SingleBooleanChoiceArg<"withoutControlBar">;
  className?: string;
}

const $$ = {};

function PlasmicMultiAssetsActions__RenderFunc(props: {
  variants: PlasmicMultiAssetsActions__VariantsArgs;
  args: PlasmicMultiAssetsActions__ArgsType;
  overrides: PlasmicMultiAssetsActions__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "withoutControlBar",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.withoutControlBar,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"controlBar"}
        data-plasmic-override={overrides.controlBar}
        hasGap={true}
        className={classNames(projectcss.all, sty.controlBar, {
          [sty.controlBarwithoutControlBar]: hasVariant(
            $state,
            "withoutControlBar",
            "withoutControlBar"
          ),
        })}
      >
        <div
          data-plasmic-name={"numSelected"}
          data-plasmic-override={overrides.numSelected}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.numSelected
          )}
        >
          {"8 elements selected"}
        </div>
        <div
          data-plasmic-name={"deleteSelected"}
          data-plasmic-override={overrides.deleteSelected}
          className={classNames(projectcss.all, sty.deleteSelected)}
        >
          <TrashIcon
            className={classNames(projectcss.all, sty.svg__lY64)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__h9Tgv
            )}
          >
            {"Delete"}
          </div>
        </div>
        <div
          data-plasmic-name={"cancel"}
          data-plasmic-override={overrides.cancel}
          className={classNames(projectcss.all, sty.cancel)}
        >
          <CloseIcon
            className={classNames(projectcss.all, sty.svg__dFu8E)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__brp3D
            )}
          >
            {"Cancel"}
          </div>
        </div>
      </p.Stack>
      {p.renderPlasmicSlot({
        defaultContents: null,
        value: args.children,
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "controlBar", "numSelected", "deleteSelected", "cancel"],
  controlBar: ["controlBar", "numSelected", "deleteSelected", "cancel"],
  numSelected: ["numSelected"],
  deleteSelected: ["deleteSelected"],
  cancel: ["cancel"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  controlBar: "div";
  numSelected: "div";
  deleteSelected: "div";
  cancel: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMultiAssetsActions__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMultiAssetsActions__VariantsArgs;
    args?: PlasmicMultiAssetsActions__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMultiAssetsActions__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMultiAssetsActions__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMultiAssetsActions__ArgProps,
          internalVariantPropNames: PlasmicMultiAssetsActions__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicMultiAssetsActions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMultiAssetsActions";
  } else {
    func.displayName = `PlasmicMultiAssetsActions.${nodeName}`;
  }
  return func;
}

export const PlasmicMultiAssetsActions = Object.assign(
  // Top-level PlasmicMultiAssetsActions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    controlBar: makeNodeComponent("controlBar"),
    numSelected: makeNodeComponent("numSelected"),
    deleteSelected: makeNodeComponent("deleteSelected"),
    cancel: makeNodeComponent("cancel"),

    // Metadata about props expected for PlasmicMultiAssetsActions
    internalVariantProps: PlasmicMultiAssetsActions__VariantProps,
    internalArgProps: PlasmicMultiAssetsActions__ArgProps,
  }
);

export default PlasmicMultiAssetsActions;
/* prettier-ignore-end */
