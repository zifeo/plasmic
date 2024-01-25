// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: 0hwZcM2HAXr

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";
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
import projectcss from "./plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicStyleSwitch.module.css"; // plasmic-import: 0hwZcM2HAXr/css

createPlasmicElementProxy;

export type PlasmicStyleSwitch__VariantMembers = {
  noLabel: "noLabel";
  isDisabled: "isDisabled";
  isChecked: "isChecked";
  valueSetState: "isSet" | "isUnset" | "isInherited";
};
export type PlasmicStyleSwitch__VariantsArgs = {
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
  valueSetState?: SingleChoiceArg<"isSet" | "isUnset" | "isInherited">;
};
type VariantPropType = keyof PlasmicStyleSwitch__VariantsArgs;
export const PlasmicStyleSwitch__VariantProps = new Array<VariantPropType>(
  "noLabel",
  "isDisabled",
  "isChecked",
  "valueSetState"
);

export type PlasmicStyleSwitch__ArgsType = {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
};
type ArgPropType = keyof PlasmicStyleSwitch__ArgsType;
export const PlasmicStyleSwitch__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "value",
  "aria-label",
  "aria-labelledby",
  "onChange"
);

export type PlasmicStyleSwitch__OverridesType = {
  root?: p.Flex<"div">;
  toggle?: p.Flex<"div">;
  track?: p.Flex<"div">;
  thumb?: p.Flex<"div">;
  labelContainer?: p.Flex<"div">;
};

export interface DefaultStyleSwitchProps extends pp.SwitchProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
  valueSetState?: SingleChoiceArg<"isSet" | "isUnset" | "isInherited">;
}

const $$ = {};

function PlasmicStyleSwitch__RenderFunc(props: {
  variants: PlasmicStyleSwitch__VariantsArgs;
  args: PlasmicStyleSwitch__ArgsType;
  overrides: PlasmicStyleSwitch__OverridesType;
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
        path: "noLabel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLabel,
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled,
      },
      {
        path: "isChecked",
        type: "writable",
        variableType: "boolean",

        valueProp: "isChecked",
        onChangeProp: "onChange",
      },
      {
        path: "valueSetState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.valueSetState,
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

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false,
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
  };

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
        sty.root,
        "baseline-friendly-centered-block-container",
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel"),
          [sty.rootvalueSetState_isUnset]: hasVariant(
            $state,
            "valueSetState",
            "isUnset"
          ),
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"toggle"}
        data-plasmic-override={overrides.toggle}
        className={classNames(projectcss.all, sty.toggle, {
          [sty.toggle___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.toggleisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.toggleisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
        })}
      >
        <div
          data-plasmic-name={"track"}
          data-plasmic-override={overrides.track}
          className={classNames(projectcss.all, sty.track, {
            [sty.track___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.trackisChecked]: hasVariant($state, "isChecked", "isChecked"),
            [sty.tracknoLabel]: hasVariant($state, "noLabel", "noLabel"),
            [sty.trackvalueSetState_isInherited]: hasVariant(
              $state,
              "valueSetState",
              "isInherited"
            ),
            [sty.trackvalueSetState_isSet]: hasVariant(
              $state,
              "valueSetState",
              "isSet"
            ),
            [sty.trackvalueSetState_isUnset]: hasVariant(
              $state,
              "valueSetState",
              "isUnset"
            ),
          })}
        />

        <div
          data-plasmic-name={"thumb"}
          data-plasmic-override={overrides.thumb}
          className={classNames(projectcss.all, sty.thumb, {
            [sty.thumb___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.thumbisChecked]: hasVariant($state, "isChecked", "isChecked"),
          })}
        />
      </div>
      {(hasVariant($state, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.labelContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotTargetChildrennoLabel]: hasVariant(
                $state,
                "noLabel",
                "noLabel"
              ),
              [sty.slotTargetChildrenvalueSetState_isInherited]: hasVariant(
                $state,
                "valueSetState",
                "isInherited"
              ),
              [sty.slotTargetChildrenvalueSetState_isSet]: hasVariant(
                $state,
                "valueSetState",
                "isSet"
              ),
              [sty.slotTargetChildrenvalueSetState_isUnset]: hasVariant(
                $state,
                "valueSetState",
                "isUnset"
              ),
            }),
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.SwitchProps>(props: P, ref: pp.SwitchRef) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Enter some text",
    };
  }

  return pp.useSwitch<P, typeof PlasmicStyleSwitch>(
    PlasmicStyleSwitch,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root",
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "toggle", "track", "thumb", "labelContainer"],
  toggle: ["toggle", "track", "thumb"],
  track: ["track"],
  thumb: ["thumb"],
  labelContainer: ["labelContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggle: "div";
  track: "div";
  thumb: "div";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStyleSwitch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStyleSwitch__VariantsArgs;
    args?: PlasmicStyleSwitch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStyleSwitch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStyleSwitch__ArgsType,
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
          internalArgPropNames: PlasmicStyleSwitch__ArgProps,
          internalVariantPropNames: PlasmicStyleSwitch__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicStyleSwitch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStyleSwitch";
  } else {
    func.displayName = `PlasmicStyleSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicStyleSwitch = Object.assign(
  // Top-level PlasmicStyleSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggle: makeNodeComponent("toggle"),
    track: makeNodeComponent("track"),
    thumb: makeNodeComponent("thumb"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicStyleSwitch
    internalVariantProps: PlasmicStyleSwitch__VariantProps,
    internalArgProps: PlasmicStyleSwitch__ArgProps,

    useBehavior,
  }
);

export default PlasmicStyleSwitch;
/* prettier-ignore-end */
