import {
  TrustBoxWidgeReviewListFileredAttributesProps,
  TrustBoxWidgetBasicReviewAttributesProps,
} from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import { useTrustBoxWidgetBase } from "../hooks/useTrustBoxWidgetBase";

export const TestimonialTrustBoxWidget = {
  /**
   * An eye-catching non-clickable TrustBox suitable for your checkout page.
   *
   * Focuses on overall TrustScore. Shows 15 latest reviews
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/53aa8912dec7e10d38f59f36/screenshot.png)
   */
  Carousel: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Carousel }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5418052cfbfb950d88702476/screenshot.png)
   */
  DropDown: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.DropDown }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/539adbd6dec7e10e686debee/screenshot.png)
   */
  Grid: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Grid }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/539ad60defb9600b94d7df2c/screenshot.png)
   */
  List: (props: TrustBoxWidgeReviewListFileredAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.List }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/539ad998dec7e10e686debe0/screenshot.png)
   */
  ListFiltered: (props: TrustBoxWidgeReviewListFileredAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.ListFiltered }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/539ad0ffdec7e10e686debd7/screenshot.png)
   */
  MiniCarousel: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MiniCarousel }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5418015fb0d04a0c9cf721f2/screenshot.png)
   */
  PopUp: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.PopUp }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/54d0e1d8764ea9078c79e6ee/screenshot.png)
   */
  Quote: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Quote }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/screenshot.png)
   */
  Slider: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Slider }),
};
