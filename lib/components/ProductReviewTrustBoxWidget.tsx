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
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/54d39695764ea907c0f34825/screenshot.png)
   */
  ProductMini: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.ProductMini }),
  /**
   * Get the same widget as Product Mini, plus the option to import product reviews from other sources.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/577258fb31f02306e4e3aaf9/screenshot.png)
   */
  ProductMiniMultiSource: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductMiniMultiSource,
    }),
  /**
   * Displays 10 selected product reviews, with the option to show customer photos, videos, or attribute ratings.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/544a426205dc0a09088833c6/screenshot.png)
   */
  ProductReviews: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviews,
    }),
  /**
   * Displays 15 selected product reviews on a loop.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/60f537b5b0f1639de1fe048c/screenshot.png)
   */
  ProductReviewsCarousel: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsCarousel,
    }),
  /**
   * Displays a collection of customer photos and videos of your products.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/546f0626f97a75059086a588/screenshot.png)
   */
  ProductReviewsGallery: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsGallery,
    }),
  /**
   * Shows product reviews that are imported from other sources alongside your Trustpilot reviews.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/57177697fdb1180308e3815f/screenshot.png)
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
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5763bccae0a06d08e809ecbb/screenshot.png)
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
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5717796816f630043868e2e8/screenshot.png)
   */
  ProductReviewSEO: (props: TrustBoxWidgeProductReviewsSEOAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsSEO,
    }),
};
