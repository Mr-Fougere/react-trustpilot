import { TRUSTPILOT_WIDGET_TEMPLATE_RESOLUTION_LIMITS } from "../interface/trust-box.const";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import {
  TrustBoxWidgetAttributesPropsT,
  TrustBoxWidgetResolutionProps,
} from "../interface/trust-box.types";

type WidgetResolutionMatcherProps = TrustBoxWidgetResolutionProps & {
  type: TrustBoxWidgetType;
};

export const widgetResolutionMatcher = ({
  type,
  height,
  width,
}: WidgetResolutionMatcherProps) => {
  const templateResolutionLimits =
    TRUSTPILOT_WIDGET_TEMPLATE_RESOLUTION_LIMITS[type];

  const matchingResolution: Pick<
    TrustBoxWidgetAttributesPropsT,
    "styleHeight" | "styleWidth"
  > = {};

  switch (height) {
    case "auto":
      matchingResolution.styleHeight = "100%";
      break;
    case "max":
      matchingResolution.styleHeight = templateResolutionLimits.max?.height;
      break;
    case "min":
      matchingResolution.styleHeight = templateResolutionLimits.min?.height;
      break;
    default:
      matchingResolution.styleHeight = height;
      break;
  }

  switch (width) {
    case "auto":
      matchingResolution.styleWidth = "100%";
      break;
    case "max":
      matchingResolution.styleWidth = templateResolutionLimits.max?.width;
      break;
    case "min":
      matchingResolution.styleWidth = templateResolutionLimits.min?.width;
      break;
    default:
      matchingResolution.styleWidth = width;
      break;
  }

  return matchingResolution;
};
