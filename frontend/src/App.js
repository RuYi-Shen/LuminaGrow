import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Initial from "./pages/Initial";
import DevicesPage from "./components/DevicesPage/DevicesPage";
import OverviewPage from "./components/OverviewPage/OverviewPage";
import TelemetryPage from "./components/TelemetryPage/TelemetryPage";
//import "./css/reset.css";
import "./css/style.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/login' />} />
                <Route path="/login" element={<Initial />} />
                <Route path="/overview" element={<OverviewPage />} />
                <Route path="/telemetry" element={<TelemetryPage />} />
                <Route path="/devices" element={<DevicesPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
