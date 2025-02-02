import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import { TrustpilotProvider } from "../context/TrustpilotProvider";
import React from "react";
import { TrustBoxWidgetAttributesPropsT } from "../interface/trust-box.types";

export default {
  title: "Trustpilot/ReviewCollector",
  decorators: [
    (Story) => (
      <TrustpilotProvider>
        <Story />
      </TrustpilotProvider>
    ),
  ],
} as Meta;

export const ReviewCollector: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.ReviewCollector {...args} />;
};
ReviewCollector.args = {};
