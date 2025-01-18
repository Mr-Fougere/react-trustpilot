import { CSSProperties } from "react";

export interface TrustBoxWidgetExtrasAttributesProps {
  styleHeight: CSSProperties["height"];
  styleWidth: CSSProperties["width"];
  scrollToList: boolean;
  stars: number[];
  noReview: "hide" | "show";
  fontFamily: CSSProperties["fontFamily"];
  locale: string;
  theme: "dark" | "ligth";
  sku: string;
}

export interface TrustBoxWidgetMandatoryAttributesProps {
  templateId: string;
}

export type TrustBoxWidgetProductMiniAttributesProps = Partial<
  Pick<
    TrustBoxWidgetExtrasAttributesProps,
    | "noReview"
    | "scrollToList"
    | "styleHeight"
    | "styleWidth"
    | "fontFamily"
    | "locale"
    | "theme"
  >
> &
  Pick<TrustBoxWidgetExtrasAttributesProps, "sku">;

export type TrustBoxWidgetHorizontalAttributesProps = Partial<
  Pick<
    TrustBoxWidgetExtrasAttributesProps,
    "styleHeight" | "styleWidth" | "fontFamily" | "locale" | "theme"
  >
>;

export type TrustBoxWidgetAttributesProps =
  Partial<TrustBoxWidgetExtrasAttributesProps> &
    TrustBoxWidgetMandatoryAttributesProps;

export type TrustBoxWidgetAttributes = Record<
  TrustBoxWidgetAttributeKey,
  string
>;

export type TrustBoxWidgetAttributeKey =
  | TrustBoxWidgettMandatoryAttributeKey
  | TrustBoxWidgetExtraAttributeKey;

export type KebabKeys<S extends string> = S extends `${infer T}${infer U}`
  ? T extends Capitalize<T>
    ? `-${Lowercase<T>}${KebabKeys<U>}`
    : `${Lowercase<T>}${KebabKeys<U>}`
  : S;

export type TrustBoxWidgettMandatoryAttributeKey = `data-${KebabKeys<
  keyof TrustBoxWidgetMandatoryAttributesProps
>}`;

export type TrustBoxWidgetExtraAttributeKey = `data-${KebabKeys<
  keyof TrustBoxWidgetExtrasAttributesProps
>}`;

export enum TrustBoxWidgetType {
  Horizontal = "Horizontal",
  ProductMini = "ProductMini",
  ProductMiniMultiSource = "ProductMiniMultiSource",
}
