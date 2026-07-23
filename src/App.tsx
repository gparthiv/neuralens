import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CNNConcepts from "./pages/CNNConcepts"
import CNNExplorer from "./pages/CNNExplorer"
import DiffusionExplorer from "./pages/DiffusionExplorer"
import NotFound from "./pages/NotFound"
import MainLayout from "./layouts/MainLayout"

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/concepts" element={<CNNConcepts />} />
        <Route path="/cnn" element={<CNNExplorer />} />
        <Route path="/diffusion" element={<DiffusionExplorer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
