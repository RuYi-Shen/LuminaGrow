import OverviewPage from "../components/OverviewPage/OverviewPage";
import TelemetryPage from "../components/TelemetryPage/TelemetryPage";
import DevicesPage from "../components/DevicesPage/DevicesPage";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import "./style.css";

const pageMap = Object.freeze({
    overview: <OverviewPage />,
    telemetry: <TelemetryPage />,
    devices: <DevicesPage />,
});

export default function Initial() {
    const [page, setPage] = useState('overview');
    const navigate = useNavigate();
    return (
        <>
            <header>
                <button onClick={() => { setPage('overview'); navigate("/overview") }}>Overview</button>
                <button onClick={() => { setPage('telemetry'); navigate("/telemetry") }}>Telemetry</button>
                <button onClick={() => { setPage('devices'); navigate("/devices") }}>Devices</button>
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