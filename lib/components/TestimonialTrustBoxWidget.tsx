import {
  TrustBoxWidgeReviewListFileredAttributesProps,
  TrustBoxWidgetBasicReviewAttributesProps,
} from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import { useTrustBoxWidgetBase } from "../hooks/useTrustBoxWidgetBase";

export const TestimonialTrustBoxWidget = {
  /**
   * ---
   * TrustBox Widget Carousel - Testimonial
   * ---
   *
   * An eye-catching non-clickable TrustBox suitable for your checkout page.
   *
   * Focuses on overall TrustScore. Shows 15 latest reviews
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param tags Filters reviews by selected tags.
   * - `SelectedReview`: Displays only selected reviews.
   * @param children Custom loading element (default: none).
   *
   * ⚠️ **Warning:** If you use one of the two next parameters, be sure to inform the customer
   * that reviews are being filtered.
   *
   * @param stars Filter reviews to display by stars count,
   * @param reviewLanguages Filter review to display by language of the review
   *
   * @returns The TrustBox Carousel widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/53aa8912dec7e10d38f59f36/screenshot.png)
   */
  Carousel: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Carousel }),

  /**
   * ---
   * TrustBox Widget DropDown - Testimonial
   * ---
   *
   * Be discreet, then expand!
   *
   * Shows stars discreetly. Clicks to a drop-down with reviews.
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param tags Filters reviews by selected tags.
   * - `SelectedReview`: Displays only selected reviews.
   * @param children Custom loading element (default: none).
   *
   * ⚠️ **Warning:** If you use one of the two next parameters, be sure to inform the customer
   * that reviews are being filtered.
   *
   * @param stars Filter reviews to display by stars count,
   * @param reviewLanguages Filter review to display by language of the review
   *
   * @returns The TrustBox DropDown widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5418052cfbfb950d88702476/screenshot.png)
   */
  DropDown: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.DropDown }),

  /**
   * ---
   * TrustBox Widget Grid - Testimonial
   * ---
   *
   * Give consumers a broad overview.
   *
   * Responsive and adaptable. Showcases customer testimonials
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param tags Filters reviews by selected tags.
   * - `SelectedReview`: Displays only selected reviews.
   * @param children Custom loading element (default: none).
   *
   * ⚠️ **Warning:** If you use one of the two next parameters, be sure to inform the customer
   * that reviews are being filtered.
   *
   * @param stars Filter reviews to display by stars count,
   * @param reviewLanguages Filter review to display by language of the review
   *
   * @returns The TrustBox Grid widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/539adbd6dec7e10e686debee/screenshot.png)
   */
  Grid: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Grid }),

  /**
   * ---
   * TrustBox Widget List - Testimonial
   * ---
   *
   * Draw attention to your stellar customer service.
   *
   * Shows 20 latest reviews and replies. Lets consumers read - without having to leave!
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param children Custom loading element (default: none).
   *
   * ⚠️ **Warning:** If you use the next parameter, be sure to inform the customer
   * that reviews are being filtered.
   *
   * @param reviewLanguages Filter review to display by language of the review
   *
   * @returns The TrustBox List widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/539ad60defb9600b94d7df2c/screenshot.png)
   */
  List: (props: TrustBoxWidgeReviewListFileredAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.List }),

  /**
   * ---
   * TrustBox Widget ListFiltered - Testimonial
   * ---
   *
   * Boost customer confidence with an honest TrustBox.
   *
   * Shows positive and negative reviews. Shows your replies too!
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param children Custom loading element (default: none).
   *
   * ⚠️ **Warning:** If you use the next parameter, be sure to inform the customer
   * that reviews are being filtered.
   *
   * @param reviewLanguages Filter review to display by language of the review
   *
   * @returns The TrustBox ListFiltered widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/539ad998dec7e10e686debe0/screenshot.png)
   */
  ListFiltered: (props: TrustBoxWidgeReviewListFileredAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.ListFiltered }),

  /**
   * ---
   * TrustBox Widget MiniCarousel - Testimonial
   * ---
   *
   * Let consumers know why you get great ratings.
   *
   * Subtle and compact. Shows 6 latest reviews.
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param tags Filters reviews by selected tags.
   * - `SelectedReview`: Displays only selected reviews.
   * @param children Custom loading element (default: none).
   *
   * ⚠️ **Warning:** If you use one of the two next parameters, be sure to inform the customer
   * that reviews are being filtered.
   *
   * @param stars Filter reviews to display by stars count,
   * @param reviewLanguages Filter review to display by language of the review
   *
   * @returns The TrustBox MiniCarousel widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/539ad0ffdec7e10e686debd7/screenshot.png)
   */
  MiniCarousel: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MiniCarousel }),

  /**
   * ---
   * TrustBox Widget PopUp - Testimonial
   * ---
   *
   * Start small, go big!
   *
   * Shows your stars discreetly. Clicks to a pop-up with reviews.
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param tags Filters reviews by selected tags.
   * - `SelectedReview`: Displays only selected reviews.
   * @param children Custom loading element (default: none).
   *
   * ⚠️ **Warning:** If you use one of the two next parameters, be sure to inform the customer
   * that reviews are being filtered.
   *
   * @param stars Filter reviews to display by stars count,
   * @param reviewLanguages Filter review to display by language of the review
   *
   * @returns The TrustBox PopUp widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5418015fb0d04a0c9cf721f2/screenshot.png)
   */
  PopUp: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.PopUp }),

  /**
   * ---
   * TrustBox Widget Quote - Testimonial
   * ---
   *
   * Quote your customers!
   *
   * Shows excerpts from reviews. Inspires your shoppers
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param tags Filters reviews by selected tags.
   * - `SelectedReview`: Displays only selected reviews.
   * @param children Custom loading element (default: none).
   *
   * ⚠️ **Warning:** If you use one of the two next parameters, be sure to inform the customer
   * that reviews are being filtered.
   *
   * @param stars Filter reviews to display by stars count,
   * @param reviewLanguages Filter review to display by language of the review
   *
   * @returns The TrustBox Quote widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/54d0e1d8764ea9078c79e6ee/screenshot.png)
   */
  Quote: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Quote }),

  /**
   * ---
   * TrustBox Widget Slider - Testimonial
   * ---
   *
   * A clickable testimonial TrustBox that lets consumers explore more.
   *
   * Focuses on reviews. Shows 15 latest reviews
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param tags Filters reviews by selected tags.
   * - `SelectedReview`: Displays only selected reviews.
   * @param children Custom loading element (default: none).
   *
   * ⚠️ **Warning:** If you use one of the two next parameters, be sure to inform the customer
   * that reviews are being filtered.
   *
   * @param stars Filter reviews to display by stars count,
   * @param reviewLanguages Filter review to display by language of the review
   *
   * @returns The TrustBox Slider widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/screenshot.png)
   */
  Slider: (props: TrustBoxWidgetBasicReviewAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Slider }),
};
