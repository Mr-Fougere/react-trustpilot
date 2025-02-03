import { CSSProperties, PropsWithChildren } from "react";

/**
 * Represents the available star ratings.
 */
type StarsProps = (1 | 2 | 3 | 4 | 5)[];

/**
 * Defines the available font families for the widget.
 */
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

/**
 * Defines the available languages for reviews.
 */
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

/**
 * Defines the available locales for the widget.
 */
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

/**
 * Defines the available dimensions in pixels or percentages.
 */
type DimensionT = `${number}%` | `${number}px`;

/**
 * Defines size constraints, allowing specific values such as `min` and `max`.
 */
type limitSizeProps = DimensionT | "min" | "max";

/**
 * Defines the resolution for the TrustBox widget.
 */
export type TrustBoxWidgetResolutionT = {
  height: DimensionT;
  width: DimensionT;
};

/**
 * Defines the optional resolution properties for the widget.
 */
export type TrustBoxWidgetResolutionProps = Partial<{
  height: limitSizeProps;
  width: limitSizeProps;
}>;

/**
 * Defines the resolution limits (minimum and maximum sizes) for the widget.
 */
export type TrustBoxWidgetResolutionLimits = {
  max?: TrustBoxWidgetResolutionT;
  min?: TrustBoxWidgetResolutionT;
};

/**
 * Defines the attributes for configuring a TrustBox widget.
 */
export interface TrustBoxWidgetAttributesProps {
  /**
   * Defines the height of the widget. Can be specified in `px` or `%` for responsive sizing.
   */
  styleHeight: DimensionT;

  /**
   * Defines the width of the widget. Can be specified in `px` or `%` for responsive sizing.
   */
  styleWidth: DimensionT;

  /**
   * Determines whether the widget should scroll to the review list when clicked.
   */
  scrollToList: boolean;

  /**
   * Defines the number of stars to be displayed.
   */
  stars: StarsProps;

  /**
   * Controls the visibility of the "No Review" message.
   * - `"hide"`: Do not display when no reviews are available.
   * - `"show"`: Display even if no reviews are available.
   */
  noReviews: "hide" | "show";

  /**
   * Defines the font family used in the widget.
   */
  fontFamily: FontFamilyProps;

  /**
   * Overrides the language set in the provider.
   */
  locale: LocaleProps;

  /**
   * Defines the theme of the widget.
   * - `"dark"`: Dark mode.
   * - `"light"`: Light mode.
   */
  theme: "dark" | "light";

  /**
   * Product SKU(s) associated with the reviews.
   * Can be a single string or an array of SKUs.
   */
  sku: string | string[];

  /**
   * Minimum number of reviews required to display the widget.
   */
  minReviewCount: number;

  /**
   * Defines the alignment of the widget's content.
   * - `"left"`: Aligns content to the left.
   * - `"center"`: Centers the content.
   * - `"right"`: Aligns content to the right.
   */
  styleAlignment: "left" | "center" | "right";

  /**
   * Determines whether the widget should take up the full width of its container.
   */
  fullwidth: boolean;

  /**
   * Defines the languages in which reviews should be displayed.
   */
  reviewLanguages: ReviewLanguageProps[];

  /**
   * Defines the border color of the widget.
   */
  borderColor: CSSProperties["borderColor"];

  /**
   * Filters reviews by selected tags.
   * - `"SelectedReview"`: Displays only selected reviews.
   */
  tags: "SelectedReview";

  /**
   * Defines the button color used in the widget.
   */
  buttonColor: CSSProperties["color"];

  /**
   * Defines the text color of the button.
   */
  buttonTextColor: CSSProperties["color"];

  /**
   * Defines the color of the stars in the widget.
   */
  starColor: CSSProperties["color"];

  /**
   * Defines the schema type for structured data (SEO).
   * - `"Product"`: Indicates that the widget represents a product review.
   */
  schemaType: "Product";

  /**
   * Defines the color of links within the widget.
   */
  linkColor: CSSProperties["color"];

  /**
   * The name of the TrustBox widget.
   */
  name: string;

  /**
   * The template ID used to render the TrustBox widget.
   */
  templateId: string;

  /**
   * The business unit ID associated with Trustpilot.
   */
  businessunitId: string;

  /**
   * Determines whether third-party reviews should be included.
   */
  thirdPartyReviews: boolean;

  /**
   * Defines the color of the text in the widget. ( Not working )
   */
  textColor: CSSProperties["color"];
}

/**
 * Defines a partial set of TrustBox widget attributes.
 */
export type TrustBoxWidgetAttributesPropsT =
  Partial<TrustBoxWidgetAttributesProps>;

/**
 * Defines the mapping of TrustBox widget attributes to string values.
 */
export type TrustBoxWidgetAttributes = Record<
  TrustBoxWidgetAttributeKey,
  string
>;

/**
 * Converts camelCase strings to kebab-case.
 */
export type KebabKeys<S extends string> = S extends `${infer T}${infer U}`
  ? T extends Capitalize<T>
    ? `-${Lowercase<T>}${KebabKeys<U>}`
    : `${Lowercase<T>}${KebabKeys<U>}`
  : S;

/**
 * Defines the data attributes for TrustBox widget configuration.
 */
export type TrustBoxWidgetAttributeKey = `data-${KebabKeys<
  keyof TrustBoxWidgetAttributesProps
>}`;

/**
 * Defines the basic TrustBox widget attributes.
 */
export type TrustBoxWidgetBasicAttributesProps = Pick<
  TrustBoxWidgetAttributesPropsT,
  "fontFamily" | "locale" | "theme"
> &
  TrustBoxWidgetResolutionProps &
  PropsWithChildren;

/**
 * Defines the attributes for a TrustBox product widget.
 */
export type TrustBoxWidgetBasicProductAttributesProps =
  TrustBoxWidgetBasicAttributesProps &
    Pick<TrustBoxWidgetAttributesProps, "sku">;

/**
 * Defines the attributes for a micro button widget.
 */
export type TrustBoxWidgetMicroButtonAttributesProps = Omit<
  TrustBoxWidgetBasicAttributesProps,
  "theme"
>;

/**
 * Defines the attributes for a micro review count widget.
 */
export type TrustBoxWidgetMicroReviewCountAttributesProps =
  TrustBoxWidgetBasicAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "minReviewCount" | "styleAlignment">;

/**
 * Defines the attributes for a review collector widget.
 */
export type TrustBoxWidgetReviewCollectorAttributesProps = Omit<
  TrustBoxWidgetBasicAttributesProps,
  "theme"
> &
  Partial<Pick<TrustBoxWidgetAttributesPropsT, "borderColor">>;

/**
 * Defines the attributes for a basic review widget.
 */
export type TrustBoxWidgetBasicReviewAttributesProps =
  TrustBoxWidgetBasicAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "stars" | "reviewLanguages" | "tags">;

/**
 * Defines the attributes for a filtered review list widget.
 */
export type TrustBoxWidgeReviewListFileredAttributesProps = Omit<
  TrustBoxWidgetBasicReviewAttributesProps,
  "stars" | "tags"
>;

/**
 * Defines the attributes for a product review widget with star customization.
 */
export type TrustBoxWidgeProductReviewsWithStarAttributesProps =
  TrustBoxWidgetBasicProductAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "starColor">;

/**
 * Defines the attributes for a mini product review widget.
 */
export type TrustBoxWidgeMiniProductReviewsAttributesProps =
  TrustBoxWidgeProductReviewsWithStarAttributesProps &
    Pick<
      TrustBoxWidgetAttributesPropsT,
      "scrollToList" | "styleAlignment" | "noReviews"
    >;

/**
 * Defines the attributes for a product review widget with languages filter.
 */
export type TrustBoxWidgeProductReviewsAttributesProps =
  TrustBoxWidgeProductReviewsWithStarAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "reviewLanguages" | "noReviews">;

/**
 * Defines the attributes for a product reviews carousel widget with star customization.
 */
export type TrustBoxWidgeProductReviewsCarouselAttributesProps =
  TrustBoxWidgeProductReviewsAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "thirdPartyReviews">;

/**
 * Defines the attributes for a product reviews gallery widget with star customization.
 */
export type TrustBoxWidgeProductReviewsGalleryAttributesProps =
  TrustBoxWidgeProductReviewsWithStarAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "noReviews">;

/**
 * Defines the attributes for a multi-source product review widget.
 */
export type TrustBoxWidgeProductReviewsMultiSourceAttributesProps =
  TrustBoxWidgeProductReviewsAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "linkColor">;

/**
 * Defines the attributes for an SEO-optimized product review widget.
 */
export type TrustBoxWidgeProductReviewsSEOAttributesProps =
  TrustBoxWidgeProductReviewsAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "name">;

/**
 * Defines the attributes for an SEO-optimized product review multi sources widget.
 */
export type TrustBoxWidgeProductReviewsMultiSourceSEOAttributesProps =
  TrustBoxWidgeProductReviewsMultiSourceAttributesProps &
    Pick<TrustBoxWidgetAttributesPropsT, "name">;
