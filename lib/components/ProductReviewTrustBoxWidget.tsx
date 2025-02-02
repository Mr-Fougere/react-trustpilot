import {
  TrustBoxWidgeProductReviewsMultiSourceAttributesProps,
  TrustBoxWidgeProductReviewsSEOAttributesProps,
  TrustBoxWidgetBasicProductAttributesProps,
} from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import { useTrustBoxWidgetBase } from "../hooks/useTrustBoxWidgetBase";

export const ProductReviewTrustBoxWidgets = {
  /**
   * ---
   * TrustBox Widget ProductMini - Product Review
   * ---
   *
   * Highlight your customers’ favorite products!
   *
   * Gives an overview of star ratings. Makes product comparisons easy
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param sku  Product SKU(s) associated with the reviews. Can be a single string or an array of SKUs.
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox ProductMini widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/54d39695764ea907c0f34825/screenshot.png)
   */
  ProductMini: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.ProductMini }),

  /**
   * ---
   * TrustBox Widget ProductMiniMultiSource - Product Review
   * ---
   *
   * Import all your product reviews and highlight your customers’ favourite products!
   *
   * Get all the benefits of the Product Mini plus the option to import reviews from other sources
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param sku  Product SKU(s) associated with the reviews. Can be a single string or an array of SKUs.
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox ProductMiniMultiSource widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/577258fb31f02306e4e3aaf9/screenshot.png)
   */
  ProductMiniMultiSource: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductMiniMultiSource,
    }),

  /**
   * ---
   * TrustBox Widget ProductReviews - Product Review
   * ---
   *
   * A convenient overview of your products’ reviews.
   *
   * Shows reviews directly on the website. Focuses on one specific product
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param sku  Product SKU(s) associated with the reviews. Can be a single string or an array of SKUs.
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox ProductReviews widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/544a426205dc0a09088833c6/screenshot.png)
   */
  ProductReviews: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviews,
    }),

  /**
   * ---
   * TrustBox Widget ProductReviewsCarousel - Product Review
   * ---
   *
   * A simple way to display customer feedback for your products.
   *
   * Fits seamlessly on your website’s product pages. Shows 15 of your latest product reviews
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param sku  Product SKU(s) associated with the reviews. Can be a single string or an array of SKUs.
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox ProductReviewsCarousel widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/60f537b5b0f1639de1fe048c/screenshot.png)
   */
  ProductReviewsCarousel: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsCarousel,
    }),

  /**
   * ---
   * TrustBox Widget ProductReviewsGallery - Product Review
   * ---
   *
   * Lead with photos and videos to visually complement your product reviews.
   *
   * Fits seamlessly on your website’s product pages
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param sku  Product SKU(s) associated with the reviews. Can be a single string or an array of SKUs.
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox ProductReviewsGallery widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/546f0626f97a75059086a588/screenshot.png)
   */
  ProductReviewsGallery: (props: TrustBoxWidgetBasicProductAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsGallery,
    }),

  /**
   * ---
   * TrustBox Widget ProductReviewsMultiSource - Product Review
   * ---
   *
   * A TrustBox to display product reviews from multiple sources.
   *
   * Easily combine your Trustpilot product reviews with reviews imported from other sources
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param sku  Product SKU(s) associated with the reviews. Can be a single string or an array of SKUs.
   * @param starColor Define the color of the stars
   * @param linkColor Define the color of the link to the review
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox ProductReviewsMultiSource widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/57177697fdb1180308e3815f/screenshot.png)
   */
  ProductReviewsMultiSource: (
    props: TrustBoxWidgeProductReviewsMultiSourceAttributesProps
  ) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsMultiSource,
    }),

  /**
   * ---
   * TrustBox Widget ProductReviewsMultiSourceSEO - Product Review
   * ---
   *
   * Import all your product reviews and boost your website SEO.
   *
   * All the benefits of the MultiSource TrustBox, now with SEO power to boost your website’s ranking
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param sku  Product SKU(s) associated with the reviews. Can be a single string or an array of SKUs.
   * @param starColor Define the color of the stars
   * @param name
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox ProductReviewsMultiSourceSEO widget.
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
   * ---
   * TrustBox Widget ProductReviewSEO - Product Review
   * ---
   *
   * Get the power of SEO with your product reviews.
   *
   * Shows reviews directly on your website. Boosts the organic ranking of your site
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param sku  Product SKU(s) associated with the reviews. Can be a single string or an array of SKUs.
   * @param starColor Define the color of the stars
   * @param name
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox ProductReviewSEO widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5717796816f630043868e2e8/screenshot.png)
   */
  ProductReviewSEO: (props: TrustBoxWidgeProductReviewsSEOAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ProductReviewsSEO,
    }),
};
