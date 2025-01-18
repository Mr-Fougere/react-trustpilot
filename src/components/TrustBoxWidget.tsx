import { PropsWithChildren } from "react";
import { TrustBoxWidgetBase } from "./TrustBoxWidgetBase";
import {
  TrustBoxWidgetHorizontalAttributesProps,
  TrustBoxWidgetProductMiniAttributesProps,
} from "../interface/trust-box.interface";

export const TrustBoxWidget = {
  Horizontal: (
    props: PropsWithChildren & TrustBoxWidgetHorizontalAttributesProps
  ) => {
    return <TrustBoxWidgetBase {...props} />;
  },
  ProductMini: (
    props: PropsWithChildren & TrustBoxWidgetProductMiniAttributesProps
  ) => {
    return <TrustBoxWidgetBase {...props} />;
  },
  ProductMiniMultiSource: (
    props: PropsWithChildren & TrustBoxWidgetProductMiniAttributesProps
  ) => {
    return <TrustBoxWidgetBase {...props} />;
  },
};

<TrustBoxWidget.Horizontal templateId="&" />;
