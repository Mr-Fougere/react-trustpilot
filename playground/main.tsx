import React from "react";
import ReactDOM from "react-dom";
import { TrustBox, TrustPilotProvider } from "../dist/react-trustpilot.es";

ReactDOM.render(
  <TrustPilotProvider businessUnitId={""} widgetUrl={""}>
    <TrustBox businessUnitId={""}>Loqding</TrustBox>
  </TrustPilotProvider>,
  document.getElementById("root")
);
