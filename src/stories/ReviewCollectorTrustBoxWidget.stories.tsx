import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidgetAttributesPropsT } from "../interface/trust-box.interface";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import { TrustPilotProvider } from "../context/TrustpilotProvider";

export default {
  title: "TrustPilot/ReviewCollector",
  decorators: [
    (Story) => (
      <TrustPilotProvider
        businessUnitId={process.env.BUSINESS_UNIT_ID}
        widgetUrl={process.env.WIDGET_URL}>
        <Story />
      </TrustPilotProvider>
    ),
  ],
} as Meta;

export const ReviewCollector: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.ReviewColletor {...args} />;
};
ReviewCollector.args = {};
