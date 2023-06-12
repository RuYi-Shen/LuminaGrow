import OverviewPage from "../components/OverviewPage/OverviewPage";
import TelemetryPage from "../components/TelemetryPage/TelemetryPage";
import DevicesPage from "../components/DevicesPage/DevicesPage";

import { useState } from "react";

import "./style.css";

const pageMap = Object.freeze({
  overview: <OverviewPage />,
  telemetry: <TelemetryPage />,
  devices: <DevicesPage />,
});

export default function Initial() {
  const [page, setPage] = useState('overview');

  return (
    <>
      <header>
        <button onClick={() => setPage('overview')}>Overview</button>
        <button onClick={() => setPage('telemetry')}>Telemetry</button>
        <button onClick={() => setPage('devices')}>Devices</button>
      </header>
      <main>
        {pageMap[page]}
      </main>
      <footer>
        Designed by Shen
      </footer>
    </>
  );
}