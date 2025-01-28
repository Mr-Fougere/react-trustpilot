import { CSSProperties, PropsWithChildren } from "react";

interface TrustBoxWidgetAttributesProps {
  styleHeight: dimensionT;
  styleWidth: dimensionT;
  scrollToList: boolean;
  stars: number[];
  noReview: "hide" | "show";
  fontFamily: CSSProperties["fontFamily"];
  locale: string;
  theme: "dark" | "ligth";
  sku: string | string[];
  minReviewCount: number;
  styleAlignment: "left" | "center" | "right";
  fullwidth: boolean;
  reviewLanguage: string;
  borderColor: CSSProperties["borderColor"];
  tags: "SelectedReview";
  buttonColor: CSSProperties["color"];
  buttonTextColor: CSSProperties["color"];
  starColor: CSSProperties["color"];
  schemaType: "Product";
  linkColor: CSSProperties["color"];
  name: string;
  templateId: string;
  businessunitId: string;
  thirdPartyReviews: boolean;
}

type dimensionT = `${number}%` | `${number}px`;

type limitSizeProps = dimensionT | "min" | "max" | "auto";

export type TrustBoxWidgetResolutionT = {
  height: dimensionT;
  width: dimensionT;
};

export type TrustBoxWidgetResolutionProps = Partial<{
  height: limitSizeProps;
  width: limitSizeProps;
}>;

export type TrustBoxWidgetResolutionLimits = {
  max?: TrustBoxWidgetResolutionT;
  min?: TrustBoxWidgetResolutionT;
};

export type TrustBoxWidgetAttributesPropsT =
  Partial<TrustBoxWidgetAttributesProps>;

export type TrustBoxWidgetAttributes = Record<
  TrustBoxWidgetAttributeKey,
  string
>;

export type KebabKeys<S extends string> = S extends `${infer T}${infer U}`
  ? T extends Capitalize<T>
    ? `-${Lowercase<T>}${KebabKeys<U>}`
    : `${Lowercase<T>}${KebabKeys<U>}`
  : S;

export type TrustBoxWidgetAttributeKey = `data-${KebabKeys<
  keyof TrustBoxWidgetAttributesProps
>}`;

export type TrustBoxWidgetBasicAttributesProps = Partial<
  Pick<TrustBoxWidgetAttributesPropsT, "fontFamily" | "locale" | "theme">
> &
  TrustBoxWidgetResolutionProps &
  PropsWithChildren;

export type TrustBoxWidgetBasicProductAttributesProps =
  TrustBoxWidgetBasicAttributesProps &
    Pick<TrustBoxWidgetAttributesProps, "sku">;

export type TrustBoxWidgetMicroButtonAttributesProps = Omit<
  TrustBoxWidgetBasicAttributesProps,
  "theme"
>;

export type TrustBoxWidgetMicroReviewCountAttributesProps = Partial<
  TrustBoxWidgetBasicAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "minReviewCount" | "styleAlignment">
>;

export type TrustBoxWidgetReviewCollectorAttributesProps =
  TrustBoxWidgetBasicAttributesProps &
    Partial<Pick<TrustBoxWidgetAttributesPropsT, "borderColor">>;

export type TrustBoxWidgetBasicReviewAttributesProps =
  TrustBoxWidgetBasicAttributesProps &
    Partial<
      Pick<TrustBoxWidgetAttributesPropsT, "stars" | "reviewLanguage" | "tags">
    >;

export type TrustBoxWidgeReviewListFileredAttributesProps = Omit<
  TrustBoxWidgetBasicReviewAttributesProps,
  "stars" | "tags"
>;

export type TrustBoxWidgeProductReviewsWithStarAttributesProps =
  TrustBoxWidgetBasicProductAttributesProps &
    Partial<Pick<TrustBoxWidgetAttributesPropsT, "starColor">>;

export type TrustBoxWidgeProductReviewsMultiSourceAttributesProps =
  TrustBoxWidgeProductReviewsWithStarAttributesProps &
    Partial<Pick<TrustBoxWidgetAttributesPropsT, "linkColor">>;

export type TrustBoxWidgeProductReviewsSEOAttributesProps =
  TrustBoxWidgeProductReviewsWithStarAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "name">;
