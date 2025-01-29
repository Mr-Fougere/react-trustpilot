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
   * ![Description de l'image](../assets/Horizontal.png)
   */
  Horizontal: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Horizontal }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroButton.png)
   */
  MicroButon: (props: TrustBoxWidgetMicroButtonAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroButton }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroCombo.png)
   */
  MicroCombo: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroCombo }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroReviewCount.png)
   */
  MicroReviewCount: (props: TrustBoxWidgetMicroReviewCountAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.MicroReviewCount,
    }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroStar.png)
   */
  MicroStar: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroStar }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MicroTrustScore.png)
   */
  MicroTrustScore: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.MicroTrustScore,
    }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Mini.png)
   */
  Mini: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Mini }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Starter.png)
   */
  Starter: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Starter }),
};
