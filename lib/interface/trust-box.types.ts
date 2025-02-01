import { CSSProperties, PropsWithChildren } from "react";

type StarsProps = (1 | 2 | 3 | 4 | 5)[];

type FontFamilyProps =
  | "Roboto"
  | "Open Sans"
  | "Noto Sans JP"
  | "Lato"
  | "Montserrat"
  | "Roboto Condensed"
  | "Source Sans Pro"
  | "Raleway"
  | "Poppins"
  | "Noto Sans"
  | "Roboto Slab"
  | "Merriweather"
  | "PT Sans"
  | "Playfair Display"
  | "Ubuntu"
  | "Mukta"
  | "Muli"
  | "PT Serif"
  | "Lora"
  | "Nunito"
  | "Work Sans"
  | "Rubik"
  | "Fira Sans"
  | "Titillium Web"
  | "Noto Sans TC"
  | "Noto Serif"
  | "Noto Sans KR"
  | "Nanum Gothic"
  | "Quicksand"
  | "Hind Siliguri"
  | "Nunito Sans"
  | "Heebo"
  | "Arimo"
  | "Oxygen"
  | "Dosis"
  | "Barlow"
  | "Karla"
  | "Slabo 27px"
  | "Libre Baskerville"
  | "Inconsolata"
  | "Libre Franklin"
  | "Crimson Text"
  | "Josefin Sans";

type ReviewLanguageProps =
  | "da"
  | "de"
  | "en"
  | "es"
  | "fi"
  | "fr"
  | "it"
  | "ja"
  | "nb"
  | "nl"
  | "pl"
  | "pt"
  | "ru"
  | "sv"
  | "zh";

export type LocaleProps =
  | "da-DK"
  | "de-AT"
  | "de-CH"
  | "de-DE"
  | "en-AU"
  | "en-CA"
  | "en-GB"
  | "en-IE"
  | "en-NZ"
  | "en-US"
  | "es-ES"
  | "fi-FI"
  | "fr-BE"
  | "fr-FR"
  | "it-IT"
  | "ja-JP"
  | "nb-NO"
  | "nl-BE"
  | "nl-NL"
  | "pl-PL"
  | "pt-BR"
  | "pt-PT"
  | "ru-RU"
  | "sv-SE"
  | "zh-CN";

interface TrustBoxWidgetAttributesProps {
  styleHeight: DimensionT;
  styleWidth: DimensionT;
  scrollToList: boolean;
  stars: StarsProps;
  noReview: "hide" | "show";
  fontFamily: FontFamilyProps;
  locale: LocaleProps | NonNullable<string>;
  theme: "dark" | "ligth";
  sku: string | string[];
  minReviewCount: number;
  styleAlignment: "left" | "center" | "right";
  fullwidth: boolean;
  reviewLanguage: ReviewLanguageProps;
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

type DimensionT = `${number}%` | `${number}px`;

type limitSizeProps = DimensionT | "min" | "max";

export type TrustBoxWidgetResolutionT = {
  height: DimensionT;
  width: DimensionT;
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

export type TrustBoxWidgetBasicAttributesProps = Pick<
  TrustBoxWidgetAttributesPropsT,
  "fontFamily" | "locale" | "theme"
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

export type TrustBoxWidgetMicroReviewCountAttributesProps =
  TrustBoxWidgetBasicAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "minReviewCount" | "styleAlignment">;

export type TrustBoxWidgetReviewCollectorAttributesProps =
  TrustBoxWidgetBasicAttributesProps &
    Partial<Pick<TrustBoxWidgetAttributesPropsT, "borderColor">>;

export type TrustBoxWidgetBasicReviewAttributesProps =
  TrustBoxWidgetBasicAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "stars" | "reviewLanguage" | "tags">;

export type TrustBoxWidgeReviewListFileredAttributesProps = Omit<
  TrustBoxWidgetBasicReviewAttributesProps,
  "stars" | "tags"
>;

export type TrustBoxWidgeProductReviewsWithStarAttributesProps =
  TrustBoxWidgetBasicProductAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "starColor">;

export type TrustBoxWidgeProductReviewsMultiSourceAttributesProps =
  TrustBoxWidgeProductReviewsWithStarAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "linkColor">;

export type TrustBoxWidgeProductReviewsSEOAttributesProps =
  TrustBoxWidgeProductReviewsWithStarAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "name">;
