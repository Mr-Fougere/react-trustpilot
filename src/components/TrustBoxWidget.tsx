import { PropsWithChildren } from "react";
import { TrustBoxWidgetBase } from "./TrustBoxWidgetBase";
import {
  TrustBoxWidgeReviewListFileredAttributesProps,
  TrustBoxWidgetAttributesPropsT,
  TrustBoxWidgetBasicAttributesProps,
  TrustBoxWidgetBasicProductAttributesProps,
  TrustBoxWidgetBasicReviewAttributesProps,
  TrustBoxWidgetMicroButtonAttributesProps,
  TrustBoxWidgetMicroReviewCountAttributesProps,
  TrustBoxWidgetReviewCollectorAttributesProps,
  TrustBoxWidgetType,
} from "../interface/trust-box.interface";
import { TRUSTPILOT_WIDGET_TEMPLATE_IDS } from "../interface/trust-box.const";

const callTrustBoxWidgetBase = (props: PropsWithChildren & TrustBoxWidgetAttributesPropsT, type: TrustBoxWidgetType) => (
  <TrustBoxWidgetBase
    {...props}
    templateId={
      TRUSTPILOT_WIDGET_TEMPLATE_IDS[type]
    }
  />)

const essentialTrustBoxWidgets = {
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/Horizontal.png)
  */
  Horizontal: (props: TrustBoxWidgetBasicAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.Horizontal),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/MicroButton.png)
  */
  MicroButon: (props: TrustBoxWidgetMicroButtonAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.MicroButton),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/MicroCombo.png)
  */
  MicroCombo: (props: TrustBoxWidgetBasicAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.MicroCombo),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/MicroReviewCount.png)
  */
  MicroReviewCount: (props: TrustBoxWidgetMicroReviewCountAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.MicroReviewCount),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/MicroStar.png)
  */
  MicroStar: (props: TrustBoxWidgetBasicAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.MicroStar),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/MicroTrustScore.png)
  */
  MicroTrustScore: (props: TrustBoxWidgetBasicAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.MicroTrustScore),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/Mini.png)
  */
  Mini: (props: TrustBoxWidgetBasicAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.Mini),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/Starter.png)
  */
  Starter: (props: TrustBoxWidgetBasicAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.Starter),
}

const testimonialTrustBoxWidgets = {
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/Carousel.png)
  */
  Carousel: (props: TrustBoxWidgetBasicReviewAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.Carousel),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/Dropdown.png)
  */
  DropDown: (props: TrustBoxWidgetBasicReviewAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.DropDown),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/Grid.png)
  */
  Grid: (props: TrustBoxWidgetBasicReviewAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.DropDown),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/List.png)
  */
  List: (props: TrustBoxWidgeReviewListFileredAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.List),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/ListFiltered.png)
  */
  ListFiltered: (props: TrustBoxWidgeReviewListFileredAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ListFiltered),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/MiniCarousel.png)
  */
  MiniCarousel: (props: TrustBoxWidgetBasicReviewAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.MiniCarousel),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/PopUp.png)
  */
  PopUp: (props: TrustBoxWidgetBasicReviewAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.PopUp),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/Quote.png)
  */
  Quote: (props: TrustBoxWidgetBasicReviewAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.Quote),
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/Slider.png)
  */
  Slider: (props: TrustBoxWidgetBasicReviewAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.Slider)
}


const collectReviewTrustBoxWidgets = {
  /**
  * Displays a minimalistic overview of all your Trustpilot stats.
  * 
  * ![Description de l'image](../assets/previews/ReviewCollector.png)
  */
  ReviewColletor: (props: TrustBoxWidgetReviewCollectorAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ReviewCollector),
}

export const productReviewTrustBoxWidgets = {
  /**
  * Highlight your customers’ favorite products with a quick overview of star ratings.
  * 
  * ![Description de l'image](../assets/previews/ProductMini.png)
  */
  ProductMini: (props: TrustBoxWidgetBasicProductAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ProductMini),
  /**
  * Get the same widget as Product Mini, plus the option to import product reviews from other sources.
  * 
  * ![Description de l'image](../assets/previews/ProductMini.png)
  */
  ProductMiniMultiSource: (props: TrustBoxWidgetBasicProductAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ProductMiniMultiSource),
  /**
  * Displays 10 selected product reviews, with the option to show customer photos, videos, or attribute ratings.
  * 
  * ![Description de l'image](../assets/previews/ProductReviews.png)
  */
  ProductReviews: (props: TrustBoxWidgetBasicProductAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ProductReviews),
  /**
  * Displays 15 selected product reviews on a loop.
  * 
  * ![Description de l'image](../assets/previews/ProductReviewsCarousel.png)
  */
  ProductReviewsCarousel: (props: TrustBoxWidgetBasicProductAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ProductReviewsCarousel),
  /**
  * Displays a collection of customer photos and videos of your products.
  * 
  * ![Description de l'image](../assets/previews/ProductReviewsGallery.png)
  */
  ProductReviewsGallery: (props: TrustBoxWidgetBasicProductAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ProductReviewsGallery),
  /**
  * Shows product reviews that are imported from other sources alongside your Trustpilot reviews.
  * 
  * ![Description de l'image](../assets/previews/ProductReviewsMultiSource.png)
  */
  ProductReviewsMultiSource: (props: TrustBoxWidgetBasicProductAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ProductReviewsMultiSource),
  /**
  * An SEO-friendly way to show product reviews that are imported from other sources alongside your Trustpilot reviews.
  * 
  * ![Description de l'image](../assets/previews/ProductReviewsMultiSource.png)
  */
  ProductReviewsMultiSourceSEO: (props: TrustBoxWidgetBasicProductAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ProductReviewsMultiSourceSEO),
  /**
  * An SEO-friendly way to show product reviews and boost your organic site ranking.
  * 
  * ![Description de l'image](../assets/previews/ProductReviewsMultiSource.png)
  */
  ProductReviewSEO: (props: TrustBoxWidgetBasicProductAttributesProps) => callTrustBoxWidgetBase(props, TrustBoxWidgetType.ProductReviewsSEO),
}

export const TrustBoxWidget = {
  ...essentialTrustBoxWidgets,
  ...collectReviewTrustBoxWidgets,
  ...testimonialTrustBoxWidgets,
  ...productReviewTrustBoxWidgets
};

