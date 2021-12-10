import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetalhesPage from "./pages/DetalhesPage";
import PageNotFound from "./pages/PageNotFound";

function Router(games) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage {...games} />}></Route>
        <Route exact path="/detalhes/:slug" element={<DetalhesPage />}></Route>

        <Route exact path="/*" element={<PageNotFound {...games} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
