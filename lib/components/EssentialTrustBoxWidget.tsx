import {
  TrustBoxWidgetBasicAttributesProps,
  TrustBoxWidgetMicroButtonAttributesProps,
  TrustBoxWidgetMicroReviewCountAttributesProps,
} from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import { useTrustBoxWidgetBase } from "../hooks/useTrustBoxWidgetBase";

export const EssentialTrustBoxWidgets = {
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5406e65db0d04a09e042d5fc/screenshot.png)
   */
  Horizontal: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Horizontal }),

  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b757fa0340045cd0c938/screenshot.png)
   */
  MicroButton: (props: TrustBoxWidgetMicroButtonAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroButton }),

  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b6ffb0d04a076446a9af/screenshot.png)
   */
  MicroCombo: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroCombo }),

  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b6a8b0d04a076446a9ad/screenshot.png)
   */
  MicroReviewCount: (props: TrustBoxWidgetMicroReviewCountAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.MicroReviewCount,
    }),

  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b732fbfb950b10de65e5/screenshot.png)
   */
  MicroStar: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroStar }),

  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b637fa0340045cd0c936/screenshot.png)
   */
  MicroTrustScore: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.MicroTrustScore,
    }),

  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/53aa8807dec7e10d38f59f32/screenshot.png)
   */
  Mini: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Mini }),

  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5613c9cde69ddc09340c6beb/screenshot.png)
   */
  Starter: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Starter }),
};
