import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Initial from "./pages/Initial";

//import "./css/reset.css";
import "./css/style.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
