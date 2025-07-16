import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import {
  KoreanLearningView,
  EnglishLearningView,
  MathLearningView,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/korean" element={<KoreanLearningView />} />
        <Route path="/english" element={<EnglishLearningView />} />
        <Route path="/math" element={<MathLearningView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
