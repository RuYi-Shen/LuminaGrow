import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Navigator from "../Navigator/index.js";
import "./style.css";

const data = [
    {
        "timestamp": "22:00",
        "Humidity (%)": 32,
        "Temperature (°C)": 19,
        "Luminosity (lux)": 0
    },
    {
        "timestamp": "00:00",
        "Humidity (%)": 30,
        "Temperature (°C)": 18.5,
        "Luminosity (lux)": 0
    },
    {
        "timestamp": "02:00",
        "Humidity (%)": 29,
        "Temperature (°C)": 17.5,
        "Luminosity (lux)": 0
    },
    {
        "timestamp": "04:00",
        "Humidity (%)": 25,
        "Temperature (°C)": 16,
        "Luminosity (lux)": 0
    },
    {
        "timestamp": "06:00",
        "Humidity (%)": 24,
        "Temperature (°C)": 16,
        "Luminosity (lux)": 30
    },
    {
        "timestamp": "08:00",
        "Humidity (%)": 23,
        "Temperature (°C)": 17.9,
        "Luminosity (lux)": 314
    },
    {
        "timestamp": "10:00",
        "Humidity (%)": 85,
        "Temperature (°C)": 19.4,
        "Luminosity (lux)": 870
    },
    {
        "timestamp": "12:00",
        "Humidity (%)": 73,
        "Temperature (°C)": 23,
        "Luminosity (lux)": 987
    },
    {
        "timestamp": "14:00",
        "Humidity (%)": 61,
        "Temperature (°C)": 25.8,
        "Luminosity (lux)": 854
    },
    {
        "timestamp": "16:00",
        "Humidity (%)": 55,
        "Temperature (°C)": 24.5,
        "Luminosity (lux)": 440
    },
    {
        "timestamp": "18:00",
        "Humidity (%)": 51,
        "Temperature (°C)": 22,
        "Luminosity (lux)": 120
    },
    {
        "timestamp": "20:00",
        "Humidity (%)": 49,
        "Temperature (°C)": 19,
        "Luminosity (lux)": 50
    },
    {
        "timestamp": "22:00",
        "Humidity (%)": 44,
        "Temperature (°C)": 18,
        "Luminosity (lux)": 0
    },
]

export default function TelemetryPage() {
    return (
        <div className="telemetry-container">
            <Navigator />
            <div className="telemetry-page">
                <div className="telemetry-card div1">
                    <AreaChart width={730} height={350} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="rgb(0, 110, 255)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="rgb(0, 110, 255)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Legend verticalAlign="top" height={36} />
                        <CartesianGrid horizontal vertical={false} strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="Humidity (%)" stroke="rgb(0, 110, 255)" fillOpacity={1} fill="url(#colorHumidity)" />
                    </AreaChart>
                </div>
                <div className="telemetry-card div2">
                    <AreaChart width={730} height={400} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorTemperature" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="rgb(250, 120, 20)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="rgb(250, 120, 20)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="timestamp" />
                        <Legend verticalAlign="top" height={36} />
                        <YAxis />
                        <CartesianGrid horizontal vertical={false} strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="Temperature (°C)" stroke="rgb(250, 120, 20)" fillOpacity={1} fill="url(#colorTemperature)" />
                    </AreaChart>
                </div>

                <div className="telemetry-card div3">
                    <AreaChart width={600} height={850} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorLuminosity" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="rgb(255, 205, 0)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="rgb(255, 205, 0)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="timestamp" />
                        <Legend verticalAlign="top" height={36} />
                        <YAxis />
                        <CartesianGrid horizontal={false} vertical strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="Luminosity (lux)" stroke="rgb(255, 205, 0)" fillOpacity={1} fill="url(#colorLuminosity)" />
                    </AreaChart>

                </div>
            </div>
        </div>
    )

}