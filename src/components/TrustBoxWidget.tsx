import { PropsWithChildren } from "react";
import { TrustBoxWidgetBase } from "./TrustBoxWidgetBase";
import {
  TrustBoxWidgetHorizontalAttributesProps,
  TrustBoxWidgetProductMiniAttributesProps,
  TrustBoxWidgetType,
} from "../interface/trust-box.interface";
import { TRUSTPILOT_WIDGET_TEMPLATE_IDS } from "../interface/trust-box.const";

export const TrustBoxWidget = {
  Horizontal: (
    props: PropsWithChildren & TrustBoxWidgetHorizontalAttributesProps
  ) => {
    return (
      <TrustBoxWidgetBase
        {...props}
        templateId={
          TRUSTPILOT_WIDGET_TEMPLATE_IDS[TrustBoxWidgetType.Horizontal]
        }
      />
    );
  },
  ProductMini: (
    props: PropsWithChildren & TrustBoxWidgetProductMiniAttributesProps
  ) => {
    return (
      <TrustBoxWidgetBase
        {...props}
        templateId={
          TRUSTPILOT_WIDGET_TEMPLATE_IDS[TrustBoxWidgetType.ProductMini]
        }
      />
    );
  },
  ProductMiniMultiSource: (
    props: PropsWithChildren & TrustBoxWidgetProductMiniAttributesProps
  ) => {
    return (
      <TrustBoxWidgetBase
        {...props}
        templateId={
          TRUSTPILOT_WIDGET_TEMPLATE_IDS[
            TrustBoxWidgetType.ProductMiniMultiSource
          ]
        }
      />
    );
  },
};
