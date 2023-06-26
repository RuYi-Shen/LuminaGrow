import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Navigator() {
    const navigate = useNavigate();

    return (
        <div className="navigator-container">
            <div className="logo-container">
                <div className="logo">
                    <ion-icon name="sunny"></ion-icon>
                </div>
                E.Garden
            </div>
            <button onClick={() => navigate("/overview")}><ion-icon name="leaf-outline"></ion-icon> Overview</button>
            <button onClick={() => navigate("/telemetry")}><ion-icon name="bar-chart-outline"></ion-icon>Telemetry</button>
            <button onClick={() => navigate("/devices")}><ion-icon name="logo-apple-ar"></ion-icon>Devices</button>
        </div>
    )
}