import { TrustBoxWidgetReviewCollectorAttributesProps } from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import { useTrustBoxWidgetBase } from "../hooks/useTrustBoxWidgetBase";

export const CollectReviewTrustBoxWidgets = {
  /**
   * ---
   * TrustBox Widget ReviewCollector - Collect Review
   * ---
   *
   * Deliver a seal of trust and collect organic reviews.
   *
   * Helps you collect reviews directly from your own site. Has a clean and simple design.
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param fontFamily Defines the font family.
   * @param borderColor Custom the widget border color.
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox ReviewCollector widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/56278e9abfbbba0bdcd568bc/screenshot.png)
   */
  ReviewCollector: (props: TrustBoxWidgetReviewCollectorAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ReviewCollector,
    }),
};
