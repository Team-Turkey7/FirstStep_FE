import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { LearningView } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/learning" element={<LearningView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
