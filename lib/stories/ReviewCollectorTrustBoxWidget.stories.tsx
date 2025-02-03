import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import React from "react";
import { TrustBoxWidgetAttributesPropsT } from "../interface/trust-box.types";
import { TrustpilotWidgetProvider } from "../context/TrustpilotWidgetProvider";

export default {
  title: "Trustpilot/ReviewCollector",
  decorators: [
    (Story) => (
      <TrustpilotWidgetProvider>
        <Story />
      </TrustpilotWidgetProvider>
    ),
  ],
} as Meta;

export const ReviewCollector: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.ReviewCollector {...args} />;
};
ReviewCollector.args = {};
