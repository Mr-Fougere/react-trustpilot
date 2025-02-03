import { TrustpilotWidgetContext } from "./TrustpilotWidgetContext";
import { TRUSTPILOT_WIDGET_SCRIPT_URL } from "../interface/trust-box.const";
import { ScriptInjectionStatus } from "../interface/trust-box.enums";
import { usePreferredLanguage, useScript } from "@uidotdev/usehooks";
import { LocaleProps } from "../interface/trust-box.types";
import { FC, PropsWithChildren, RefObject, useEffect, useMemo } from "react";
import { TrustpilotContextError } from "../errors/TrustpilotContextError";

interface TrustpilotWidgetProviderProps extends PropsWithChildren {
  businessUnitId?: string;
  websiteUrl?: string;
  locale?: LocaleProps;
}

/**
 * ---
 * Trustpilot Widget Provider
 * ---
 *
 * This context provider manages the integration of the Trustpilot widget.
 * It loads the Trustpilot script, determines the appropriate locale, and provides a function
 * to load the widget dynamically.
 *
 * @component
 * @param businessUnitId- The Trustpilot Business Unit ID (BUID). If not provided, the widget will be in preview mode.
 * @param websiteUrl - The URL of the website being reviewed. Used to construct the Trustpilot widget URL.
 * @param locale - Overrides the browser’s preferred language for the widget.
 * @param children - Components that will have access to the Trustpilot context.
 *
 * @example
 * ```tsx
 * <TrustpilotProvider businessUnitId="123456" websiteUrl="example.com">
 *   <MyComponent />
 * </TrustpilotProvider>
 * ```
 */
export const TrustpilotWidgetProvider: FC<TrustpilotWidgetProviderProps> = ({
  businessUnitId = "PREVIEW_BUID",
  children,
  locale,
  websiteUrl = "",
}) => {
  const status = useScript(
    TRUSTPILOT_WIDGET_SCRIPT_URL
  ) as ScriptInjectionStatus;

  const preferredLanguage = usePreferredLanguage() as LocaleProps;

  const { widgetUrl, languageInUse } = useMemo(() => {
    const languageInUse = locale ?? preferredLanguage;
    const localeDomain = languageInUse.split("-")[0];
    const widgetUrl = `https://${localeDomain}.trustpilot.com/review/${websiteUrl}`;

    return { widgetUrl, languageInUse };
  }, [preferredLanguage, locale, websiteUrl]);

  const loadTrustpilotWidget = (ref: RefObject<HTMLElement>) => {
    switch (status) {
      case ScriptInjectionStatus.Loading:
        throw new TrustpilotContextError(
          "TrustpilotWidget not loaded cause Trustpilot script not yet load"
        );
      case ScriptInjectionStatus.Error:
        throw new TrustpilotContextError(
          "TrustpilotWidget not loaded cause Trustpilot script failed to load"
        );
      default:
        if (window.Trustpilot && ref.current) {
          window.Trustpilot.loadFromElement(ref.current, true);
        }
        break;
    }
  };

  useEffect(() => {
    if (businessUnitId !== "PREVIEW_BUID" && websiteUrl) return;

    console.warn(
      "TrustpilotWidgetProvider: You are actually in preview mode of trustpilot widget, please provide the BUID and website URL to the trustpilot provider to fetch your own reviews.",
      "Take a look at the documentation README for more information about how to get credentials for the provider."
    );
  }, []);

  return (
    <TrustpilotWidgetContext.Provider
      value={{
        businessUnitId,
        widgetUrl,
        status,
        loadTrustpilotWidget,
        locale: languageInUse,
      }}>
      {children}
    </TrustpilotWidgetContext.Provider>
  );
};
