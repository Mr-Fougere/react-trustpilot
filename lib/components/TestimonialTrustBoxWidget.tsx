import {
  TrustBoxWidgeReviewListFileredAttributesProps,
  TrustBoxWidgetBasicReviewAttributesProps,
} from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import { useTrustBoxWidgetBase } from "../hooks/useTrustBoxWidgetBase";

export const TestimonialTrustBoxWidget = {
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Carousel.png)
   */
  Carousel: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Carousel }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Dropdown.png)
   */
  DropDown: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.DropDown }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Grid.png)
   */
  Grid: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Grid }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/List.png)
   */
  List: (props: TrustBoxWidgeReviewListFileredAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.List }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/ListFiltered.png)
   */
  ListFiltered: (props: TrustBoxWidgeReviewListFileredAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.ListFiltered }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/MiniCarousel.png)
   */
  MiniCarousel: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MiniCarousel }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/PopUp.png)
   */
  PopUp: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.PopUp }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Quote.png)
   */
  Quote: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Quote }),
  /**
   * Displays a minimalistic overview of all your Trustpilot stats.
   *
   * ![Description de l'image](../assets/Slider.png)
   */
  Slider: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Slider }),
};
