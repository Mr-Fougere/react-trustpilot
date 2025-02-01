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
      <TrustPilotProvider webSiteUrl={process.env.WEBSITE_URL!}>
        <Story />
      </TrustPilotProvider>
    ),
  ],
} as Meta;

export const ProductMini: StoryFn<TrustBoxWidgetBasicProductAttributesProps> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.ProductMini {...args} />;
};
ProductMini.args = {};

export const ProductMiniMultiSource: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgetAttributesPropsT) => {
  return <TrustBoxWidget.ProductMiniMultiSource {...args} />;
};
ProductMiniMultiSource.args = {};

export const ProductReviews: StoryFn<
  TrustBoxWidgetBasicProductAttributesProps
> = (args: TrustBoxWidgetAttributesPropsT) => {
  return <TrustBoxWidget.ProductReviews {...args} />;
};
ProductReviews.args = {};
