import {
  TrustBoxWidgeProductReviewsSEOAttributesProps,
  TrustBoxWidgetBasicProductAttributesProps,
} from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import { useTrustBoxWidgetBase } from "../hooks/useTrustBoxWidgetBase";

export const ProductReviewTrustBoxWidgets = {
  /**
   * Highlight your customers’ favorite products with a quick overview of star ratings.
   *
   * ![Description de l'image](../assets/ProductMini.png)
   */
  ProductMini: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.ProductMini }),
  /**
   * Get the same widget as Product Mini, plus the option to import product reviews from other sources.
   *
   * ![Description de l'image](../assets/ProductMini.png)
   */
  ProductMiniMultiSource: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductMiniMultiSource,
    }),
  /**
   * Displays 10 selected product reviews, with the option to show customer photos, videos, or attribute ratings.
   *
   * ![Description de l'image](../assets/ProductReviews.png)
   */
  ProductReviews: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviews,
    }),
  /**
   * Displays 15 selected product reviews on a loop.
   *
   * ![Description de l'image](../assets/ProductReviewsCarousel.png)
   */
  ProductReviewsCarousel: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsCarousel,
    }),
  /**
   * Displays a collection of customer photos and videos of your products.
   *
   * ![Description de l'image](../assets/ProductReviewsGallery.png)
   */
  ProductReviewsGallery: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
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
    useTrustBoxWidgetBase({
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
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsMultiSourceSEO,
    }),
  /**
   * An SEO-friendly way to show product reviews and boost your organic site ranking.
   *
   * ![Description de l'image](../assets/ProductReviewsMultiSource.png)
   */
  ProductReviewSEO: (props: TrustBoxWidgeProductReviewsSEOAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsSEO,
    }),
};
