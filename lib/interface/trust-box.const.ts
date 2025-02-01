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
  [TrustBoxWidgetType.Horizontal]: {
    min: { height: "50px", width: "140px" },
    max: { height: "24px", width: "100%" },
  },
  [TrustBoxWidgetType.MicroButton]: {
    min: { height: "24px", width: "64px" },
    max: { height: "48px", width: "100%" },
  },
  [TrustBoxWidgetType.MicroCombo]: {
    min: { height: "100px", width: "120px" },
    max: { height: "24px", width: "100%" },
  },
  [TrustBoxWidgetType.MicroReviewCount]: {
    min: { height: "50px", width: "140px" },
    max: { height: "24px", width: "100%" },
  },
  [TrustBoxWidgetType.MicroStar]: {
    min: { height: "64px", width: "100px" },
    max: { height: "24px", width: "100%" },
  },
  [TrustBoxWidgetType.MicroTrustScore]: {
    min: { height: "52px", width: "120px" },
    max: { height: "24px", width: "100%" },
  },
  [TrustBoxWidgetType.Mini]: {
    min: { height: "90px", width: "120px" },
    max: { height: "130px", width: "100%" },
  },
  [TrustBoxWidgetType.Starter]: {},
  [TrustBoxWidgetType.ReviewCollector]: {},
  [TrustBoxWidgetType.Carousel]: {
    min: { height: "140px", width: "300px" },
    max: { height: "140px", width: "100%" },
  },
  [TrustBoxWidgetType.DropDown]: {
    min: { height: "30px", width: "255px" },
    max: { height: "30px", width: "760px" },
  },
  [TrustBoxWidgetType.Grid]: {
    min: { height: "400px", width: "220px" },
    max: { height: "500px", width: "100%" },
  },
  [TrustBoxWidgetType.List]: {
    min: { height: "400px", width: "148px" },
    max: { height: "400px", width: "750px" },
  },
  [TrustBoxWidgetType.ListFiltered]: {
    min: { height: "400px", width: "230px" },
    max: { height: "400px", width: "750px" },
  },
  [TrustBoxWidgetType.MiniCarousel]: {
    min: { height: "350px", width: "180px" },
    max: { height: "320px", width: "750px" },
  },
  [TrustBoxWidgetType.PopUp]: {
    min: { height: "50px", width: "148px" },
    max: { height: "25px", width: "100%" },
  },
  [TrustBoxWidgetType.Quote]: {
    min: { height: "300px", width: "200px" },
    max: { height: "300px", width: "520px" },
  },
  [TrustBoxWidgetType.Slider]: {
    min: { height: "240px", width: "290px" },
    max: { height: "240px", width: "1200px" },
  },
  [TrustBoxWidgetType.ProductMini]: {
    min: { height: "24px", width: "190px" },
    max: { height: "24px", width: "100%" },
  },
  [TrustBoxWidgetType.ProductMiniMultiSource]: {
    min: { height: "24px", width: "190px" },
    max: { height: "24px", width: "100%" },
  },
  [TrustBoxWidgetType.ProductQA]: {},
  [TrustBoxWidgetType.ProductReviews]: {
    min: { height: "400px", width: "220px" },
    max: { height: "400px", width: "860px" },
  },
  [TrustBoxWidgetType.ProductReviewsCarousel]: {
    min: { height: "140px", width: "520px" },
    max: { height: "140px", width: "860px" },
  },
  [TrustBoxWidgetType.ProductReviewsGallery]: {
    min: { height: "350px", width: "520px" },
    max: { height: "700px", width: "100%" },
  },
  [TrustBoxWidgetType.ProductReviewsMultiSource]: {
    min: { height: "400px", width: "160px" },
    max: { height: "950px", width: "750px" },
  },
  [TrustBoxWidgetType.ProductReviewsMultiSourceSEO]: {
    min: { height: "400px", width: "160px" },
    max: { height: "950px", width: "750px" },
  },
  [TrustBoxWidgetType.ProductReviewsSEO]: {
    min: { height: "400px", width: "220px" },
    max: { height: "400px", width: "860px" },
  },
};
