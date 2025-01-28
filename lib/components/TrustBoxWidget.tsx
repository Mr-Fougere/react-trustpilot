import { PropsWithChildren } from "react";
import { TrustBoxWidgetBase } from "./TrustBoxWidgetBase";
import {
  TrustBoxWidgeProductReviewsSEOAttributesProps,
  TrustBoxWidgeReviewListFileredAttributesProps,
  TrustBoxWidgetAttributesPropsT,
  TrustBoxWidgetBasicAttributesProps,
  TrustBoxWidgetBasicProductAttributesProps,
  TrustBoxWidgetBasicReviewAttributesProps,
  TrustBoxWidgetMicroButtonAttributesProps,
  TrustBoxWidgetMicroReviewCountAttributesProps,
  TrustBoxWidgetResolutionProps,
  TrustBoxWidgetReviewCollectorAttributesProps,
} from "../interface/trust-box.types";
import {
  TRUSTPILOT_WIDGET_TEMPLATE_IDS,
  TRUSTPILOT_WIDGET_TEMPLATE_RESOLUTION_LIMITS,
} from "../interface/trust-box.const";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";

type CallTrustBoxWidgetBaseProps = PropsWithChildren &
  TrustBoxWidgetAttributesPropsT &
  TrustBoxWidgetResolutionProps & { type: TrustBoxWidgetType };

const callTrustBoxWidgetBase = ({
  height = "auto",
  width = "auto",
  type,
  ...props
}: CallTrustBoxWidgetBaseProps) => {
  const templateResolutionLimits =
    TRUSTPILOT_WIDGET_TEMPLATE_RESOLUTION_LIMITS[type];

  switch (height) {
    case "max":
      props.styleHeight = templateResolutionLimits.max?.height;
      break;
    case "min":
    case "auto":
      props.styleHeight = templateResolutionLimits.min?.height;
      break;
    default:
      props.styleHeight = height;
      break;
  }

  switch (width) {
    case "auto":
      props.styleWidth = "100%";
      break;
    case "max":
      props.styleWidth = templateResolutionLimits.max?.width;
      break;
    case "min":
      props.styleWidth = templateResolutionLimits.min?.width;
      break;
    default:
      props.styleWidth = width;
      break;
  }

  return (
    <TrustBoxWidgetBase
      {...props}
      templateId={TRUSTPILOT_WIDGET_TEMPLATE_IDS[type]}
    />
  );
};

const essentialTrustBoxWidgets = {
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Horizontal.png)
   */
  Horizontal: (props: TrustBoxWidgetBasicAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Horizontal }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroButton.png)
   */
  MicroButon: (props: TrustBoxWidgetMicroButtonAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroButton }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroCombo.png)
   */
  MicroCombo: (props: TrustBoxWidgetBasicAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroCombo }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroReviewCount.png)
   */
  MicroReviewCount: (props: TrustBoxWidgetMicroReviewCountAttributesProps) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.MicroReviewCount,
    }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroStar.png)
   */
  MicroStar: (props: TrustBoxWidgetBasicAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroStar }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroTrustScore.png)
   */
  MicroTrustScore: (props: TrustBoxWidgetBasicAttributesProps) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.MicroTrustScore,
    }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Mini.png)
   */
  Mini: (props: TrustBoxWidgetBasicAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Mini }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Starter.png)
   */
  Starter: (props: TrustBoxWidgetBasicAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Starter }),
};

const testimonialTrustBoxWidgets = {
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Carousel.png)
   */
  Carousel: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Carousel }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Dropdown.png)
   */
  DropDown: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.DropDown }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Grid.png)
   */
  Grid: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Grid }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/List.png)
   */
  List: (props: TrustBoxWidgeReviewListFileredAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.List }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/ListFiltered.png)
   */
  ListFiltered: (props: TrustBoxWidgeReviewListFileredAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.ListFiltered }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MiniCarousel.png)
   */
  MiniCarousel: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MiniCarousel }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/PopUp.png)
   */
  PopUp: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.PopUp }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Quote.png)
   */
  Quote: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Quote }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Slider.png)
   */
  Slider: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Slider }),
};

const collectReviewTrustBoxWidgets = {
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/ReviewCollector.png)
   */
  ReviewColletor: (props: TrustBoxWidgetReviewCollectorAttributesProps) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ReviewCollector,
    }),
};

export const productReviewTrustBoxWidgets = {
  /**
   * Highlight your customers’ favorite products with a quick overview of star ratings.
   *
   * ![Description de l'image](../assets/ProductMini.png)
   */
  ProductMini: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    callTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.ProductMini }),
  /**
   * Get the same widget as Product Mini, plus the option to import product reviews from other sources.
   *
   * ![Description de l'image](../assets/ProductMini.png)
   */
  ProductMiniMultiSource: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductMiniMultiSource,
    }),
  /**
   * Displays 10 selected product reviews, with the option to show customer photos, videos, or attribute ratings.
   *
   * ![Description de l'image](../assets/ProductReviews.png)
   */
  ProductReviews: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviews,
    }),
  /**
   * Displays 15 selected product reviews on a loop.
   *
   * ![Description de l'image](../assets/ProductReviewsCarousel.png)
   */
  ProductReviewsCarousel: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsCarousel,
    }),
  /**
   * Displays a collection of customer photos and videos of your products.
   *
   * ![Description de l'image](../assets/ProductReviewsGallery.png)
   */
  ProductReviewsGallery: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsGallery,
    }),
  /**
   * Shows product reviews that are imported from other sources alongside your Trustpilot reviews.
   *
   * ![Description de l'image](../assets/ProductReviewsMultiSource.png)
   */
  ProductReviewsMultiSource: (
    props: TrustBoxWidgetBasicProductAttributesProps
  ) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsMultiSource,
    }),
  /**
   * An SEO-friendly way to show product reviews that are imported from other sources alongside your Trustpilot reviews.
   *
   * ![Description de l'image](../assets/ProductReviewsMultiSource.png)
   */
  ProductReviewsMultiSourceSEO: (
    props: TrustBoxWidgeProductReviewsSEOAttributesProps
  ) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsMultiSourceSEO,
    }),
  /**
   * An SEO-friendly way to show product reviews and boost your organic site ranking.
   *
   * ![Description de l'image](../assets/ProductReviewsMultiSource.png)
   */
  ProductReviewSEO: (props: TrustBoxWidgeProductReviewsSEOAttributesProps) =>
    callTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsSEO,
    }),
};

/**
 * @params {JSXElement} children - Be used until the widget is loaded ( by default nothing )
 */
export const TrustBoxWidget = {
  ...essentialTrustBoxWidgets,
  ...collectReviewTrustBoxWidgets,
  ...testimonialTrustBoxWidgets,
  ...productReviewTrustBoxWidgets,
};
