import "./style.css";
import Navigator from "../Navigator/index.js";

export default function DevicesPage() {
    return (
        <div className="devices-container">
            <Navigator />
            <div className="devices-page">
                <div className="device">
                    <div className="device-name">
                        <div>
                            ESP32-S / <span style={{ color: "green" }} >online</span >
                        </div>
                        <ion-icon name="chevron-up-outline"></ion-icon>
                    </div>
                    <p>
                        Last Telemetry: 22h19
                    </p>
                    <p>
                        Humidity: 42.5%
                    </p>
                    <p>
                        Luminosity: 130 lux
                    </p>
                    <p>
                        Temperature: 18.8°C
                    </p>
                    <div className="controls">
                        <button>Decrease Intensity</button>
                        <p>0%</p>
                        <button>Increase Intensity</button>
                    </div>
                </div>
                <div className="device">
                    <div className="device-name">
                        <div>
                            ESP32 / <span style={{ color: "red", display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>offline <ion-icon name="alert-circle-outline"></ion-icon></span >
                        </div>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}