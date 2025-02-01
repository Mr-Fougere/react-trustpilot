import { TrustBoxWidgetReviewCollectorAttributesProps } from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import { useTrustBoxWidgetBase } from "../hooks/useTrustBoxWidgetBase";

export const CollectReviewTrustBoxWidgets = {
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/56278e9abfbbba0bdcd568bc/screenshot.png)
   */
  ReviewColletor: (props: TrustBoxWidgetReviewCollectorAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.ReviewCollector,
    }),
};
