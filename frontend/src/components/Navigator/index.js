import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Navigator() {
    const navigate = useNavigate();

    return (
        <div className="navigator-container">
            <div className="logo"> Teste Smart garden</div>
            <button onClick={() => navigate("/overview")}><ion-icon name="leaf-outline"></ion-icon> Overview</button>
            <button onClick={() => navigate("/telemetry")}>Telemetry</button>
            <button onClick={() => navigate("/devices")}>Devices</button>
        </div>
    )
}