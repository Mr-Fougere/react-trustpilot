import {
  TrustBoxWidgetBasicAttributesProps,
  TrustBoxWidgetMicroButtonAttributesProps,
  TrustBoxWidgetMicroReviewCountAttributesProps,
} from "../interface/trust-box.types";
import { TrustBoxWidgetType } from "../interface/trust-box.enums";
import { useTrustBoxWidgetBase } from "../hooks/useTrustBoxWidgetBase";

export const EssentialTrustBoxWidgets = {
  /**
   * ---
   * TrustBox Widget Horizontal - Essential
   * ---
   *
   * Stay top of mind throughout the consumer’s journey.
   *
   * Minimalistic design. Highly versatile.
   *
   * ----
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox Horizontal widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5406e65db0d04a09e042d5fc/screenshot.png)
   */
  Horizontal: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Horizontal }),

  /**
   * ---
   * TrustBox Widget MicroButton - Essential
   * ---
   *
   * Something extra to accompany your social media icons.
   *
   * Show off your total number of reviews.
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param fontFamily Defines the font family.
   * @param children Custom loading element (default: none).
   *
   * @returns The TrustBox MicroButton widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b757fa0340045cd0c938/screenshot.png)
   */
  MicroButton: (props: TrustBoxWidgetMicroButtonAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroButton }),

  /**
   * ---
   * TrustBox Widget MicroCombo - Essential
   * ---
   *
   * A great little starter or something extra to accompany larger TrustBoxes.
   *
   * Show off your current review count and star rating. So small it fits anywhere!
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
   * @returns The TrustBox MicroCombo widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b6ffb0d04a076446a9af/screenshot.png)
   */
  MicroCombo: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroCombo }),

  /**
   * ---
   * TrustBox Widget MicroReviewCount - Essential
   * ---
   *
   * Show your customers that you value real feedback with this free widget.
   *
   * Display your current review count, or hide it until you’ve reached your preferred amount of reviews. Fits seamlessly anywhere on your website
   *
   * ---
   *
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param children Custom loading element (default: none).
   * @param styleAlignment Defines the alignment of the widget's content.
   * - `left`: Aligns content to the left.
   * - `center`: Centers the content.
   * - `right`: Aligns content to the right.
   * @param minReviewCount Minimum number of reviews required to display the widget.
   *
   * @returns The TrustBox MicroReviewCount widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b6a8b0d04a076446a9ad/screenshot.png)
   */
  MicroReviewCount: (props: TrustBoxWidgetMicroReviewCountAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.MicroReviewCount,
    }),

  /**
   * ---
   * TrustBox Widget MicroStar - Essential
   * ---
   *
   * A great little starter or something extra to accompany larger TrustBoxes.
   *
   * Show off your current review count and star rating. So small it fits anywhere!
   *
   * ---
   * 
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param children Custom loading element (default: none).

   * @returns The TrustBox MicroStar widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b732fbfb950b10de65e5/screenshot.png)
   */
  MicroStar: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.MicroStar }),

  /**
   * ---
   * TrustBox Widget MicroTrustScore - Essential
   * ---
   *
   * A great little starter or something extra to accompany larger TrustBoxes.
   * 
   * Show off your TrustScore. So small it fits anywhere!
   *
   * ---
   * 
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param children Custom loading element (default: none).

   * @returns The TrustBox MicroTrustScore widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5419b637fa0340045cd0c936/screenshot.png)
   */
  MicroTrustScore: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({
      ...props,
      type: TrustBoxWidgetType.MicroTrustScore,
    }),

  /**
   * ---
   * TrustBox Widget Mini - Essential
   * ---
   *
   * Get down to basics with the Mini.
   *
   * Gets to the point. Delivers a seal of trust.
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
   * @returns The TrustBox Mini widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/53aa8807dec7e10d38f59f32/screenshot.png)
   */
  Mini: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Mini }),

  /**
   * ---
   * TrustBox Widget Starter - Essential
   * ---
   *
   * Get down to basics and watch the reviews roll in.
   * 
   * Showcases your stars and review count. Links to your profile page on Trustpilot
   * 
   * ---
   * 
   * @param height Defines the widget height in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param width Defines the widget width in `px` or `%`. Supports `min` and `max` for responsive sizing.
   * @param locale Overrides the language set in the provider.
   * @param theme Defines the widget theme (`light` or `dark`).
   * @param fontFamily Defines the font family.
   * @param children Custom loading element (default: none).

   * @returns The TrustBox Starter widget.
   *
   * ![Description de l'image](https://widget.trustpilot.com/trustboxes/5613c9cde69ddc09340c6beb/screenshot.png)
   */
  Starter: (props: TrustBoxWidgetBasicAttributesProps) =>
    useTrustBoxWidgetBase({ ...props, type: TrustBoxWidgetType.Starter }),
};
