import React from "react";
import ReactDOM from "react-dom";
import {
  TrustBoxWidget,
  TrustPilotProvider,
} from "../dist/react-trustpilot.es";

ReactDOM.render(
  <TrustPilotProvider businessUnitId={""} widgetUrl={""}>
    <TrustBoxWidget.ProductMini>Loqding</TrustBoxWidget.ProductMini>
  </TrustPilotProvider>,
  document.getElementById("root")
);
