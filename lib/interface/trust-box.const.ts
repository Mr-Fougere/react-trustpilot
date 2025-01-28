import { TrustBoxWidgetType } from "./trust-box.enums";
import { TrustBoxWidgetResolutionLimits } from "./trust-box.types";

export const TRUSTPILOT_WIDGET_SCRIPT_URL =
  "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";

// TODO: implement this widget
export const TRUSTPILOT_WIDGET_PRODUCT_QUESTION_SCRIPT_URL =
  "https://widget.trustpilot.com/product-questions/loader.js";

export const TRUSTPILOT_WIDGET_TEMPLATE_IDS = {
  [TrustBoxWidgetType.Horizontal]: "5406e65db0d04a09e042d5fc",
  [TrustBoxWidgetType.MicroButton]: "5419b757fa0340045cd0c938",
  [TrustBoxWidgetType.MicroCombo]: "5419b6ffb0d04a076446a9af",
  [TrustBoxWidgetType.MicroReviewCount]: "5419b6a8b0d04a076446a9ad",
  [TrustBoxWidgetType.MicroStar]: "5419b732fbfb950b10de65e5",
  [TrustBoxWidgetType.MicroTrustScore]: "5419b637fa0340045cd0c936",
  [TrustBoxWidgetType.Mini]: "53aa8807dec7e10d38f59f32",
  [TrustBoxWidgetType.Starter]: "5613c9cde69ddc09340c6beb",
  [TrustBoxWidgetType.ReviewCollector]: "56278e9abfbbba0bdcd568bc",
  [TrustBoxWidgetType.Carousel]: "53aa8912dec7e10d38f59f36",
  [TrustBoxWidgetType.DropDown]: "5418052cfbfb950d88702476",
  [TrustBoxWidgetType.Grid]: "539adbd6dec7e10e686debee",
  [TrustBoxWidgetType.List]: "539ad60defb9600b94d7df2c",
  [TrustBoxWidgetType.ListFiltered]: "539ad998dec7e10e686debe0",
  [TrustBoxWidgetType.MiniCarousel]: "539ad0ffdec7e10e686debd7",
  [TrustBoxWidgetType.PopUp]: "5418015fb0d04a0c9cf721f2",
  [TrustBoxWidgetType.Quote]: "54d0e1d8764ea9078c79e6ee",
  [TrustBoxWidgetType.Slider]: "54ad5defc6454f065c28af8b",
  [TrustBoxWidgetType.ProductMini]: "54d39695764ea907c0f34825",
  [TrustBoxWidgetType.ProductMiniMultiSource]: "577258fb31f02306e4e3aaf9",
  [TrustBoxWidgetType.ProductQA]: "5e8f516485a0810001753930",
  [TrustBoxWidgetType.ProductReviews]: "544a426205dc0a09088833c6",
  [TrustBoxWidgetType.ProductReviewsCarousel]: "60f537b5b0f1639de1fe048c",
  [TrustBoxWidgetType.ProductReviewsGallery]: "546f0626f97a75059086a588",
  [TrustBoxWidgetType.ProductReviewsMultiSource]: "57177697fdb1180308e3815f",
  [TrustBoxWidgetType.ProductReviewsMultiSourceSEO]: "5763bccae0a06d08e809ecbb",
  [TrustBoxWidgetType.ProductReviewsSEO]: "5717796816f630043868e2e8",
};

export const TRUSTPILOT_WIDGET_TEMPLATE_RESOLUTION_LIMITS: Record<
  TrustBoxWidgetType,
  TrustBoxWidgetResolutionLimits
> = {
  [TrustBoxWidgetType.Horizontal]: { min: { height: "50px", width: "100px" } },
  [TrustBoxWidgetType.MicroButton]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.MicroCombo]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.MicroReviewCount]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.MicroStar]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.MicroTrustScore]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.Mini]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.Starter]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.ReviewCollector]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.Carousel]: { min: { height: "20px", width: "100px" } },
  [TrustBoxWidgetType.DropDown]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.Grid]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.List]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.ListFiltered]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.MiniCarousel]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.PopUp]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.Quote]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.Slider]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.ProductMini]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.ProductMiniMultiSource]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.ProductQA]: { min: { height: "100px", width: "100px" } },
  [TrustBoxWidgetType.ProductReviews]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.ProductReviewsCarousel]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.ProductReviewsGallery]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.ProductReviewsMultiSource]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.ProductReviewsMultiSourceSEO]: {
    min: { height: "100px", width: "100px" },
  },
  [TrustBoxWidgetType.ProductReviewsSEO]: {
    min: { height: "100px", width: "100px" },
  },
};
