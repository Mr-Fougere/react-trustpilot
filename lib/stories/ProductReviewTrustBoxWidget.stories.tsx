import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import { TrustPilotProvider } from "../context/TrustpilotProvider";
import {
  TrustBoxWidgetAttributesPropsT,
  TrustBoxWidgetBasicProductAttributesProps,
} from "../interface/trust-box.types";
import React from "react";

export default {
  title: "TrustPilot/ProductReview",
  decorators: [
    (Story) => (
      <TrustPilotProvider websiteUrl={process.env.WEBSITE_URL!}>
        <Story />
      </TrustPilotProvider>
    ),
  ],
} as Meta;

export const ProductMini: StoryFn<TrustBoxWidgetBasicProductAttributesProps> = (
  args: TrustBoxWidgetBasicProductAttributesProps
) => {
  return <TrustBoxWidget.ProductMini {...args} />;
};
ProductMini.args = {
  sku: "PREVIEW",
};

export const ProductMiniMultiSource: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgetBasicProductAttributesProps) => {
  return <TrustBoxWidget.ProductMiniMultiSource {...args} />;
};
ProductMiniMultiSource.args = {
  sku: "PREVIEW",
};

export const ProductReviews: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgetBasicProductAttributesProps) => {
  return <TrustBoxWidget.ProductReviews {...args} />;
};
ProductReviews.args = {
  sku: "PREVIEW",
};
