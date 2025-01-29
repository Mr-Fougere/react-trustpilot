import { PropsWithChildren } from "react";
import { TrustBoxWidgetBase } from "../components/TrustBoxWidgetBase";
import { widgetResolutionMatcher } from "../helper/widgetResolutionMatcher";
import { TRUSTPILOT_WIDGET_TEMPLATE_IDS } from "../interface/trust-box.const";
import {
  TrustBoxWidgetAttributesPropsT,
  TrustBoxWidgetResolutionProps,
} from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";

type CallTrustBoxWidgetBaseProps = PropsWithChildren &
  TrustBoxWidgetAttributesPropsT &
  TrustBoxWidgetResolutionProps & { type: TrustBoxWidgetType };

export const useTrustBoxWidgetBase = ({
  height = "auto",
  width = "auto",
  type,
  ...props
}: CallTrustBoxWidgetBaseProps) => {
  return (
    <TrustBoxWidgetBase
      {...props}
      {...widgetResolutionMatcher({ height, width, type })}
      templateId={TRUSTPILOT_WIDGET_TEMPLATE_IDS[type]}
    />
  );
};
