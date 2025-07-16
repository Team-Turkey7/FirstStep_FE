import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Onboarding } from "./pages/Onboarding";
import { Main } from "./pages/Main";
import { Study } from "./pages/Study";
import {
  KoreanLearningView,
  EnglishLearningView,
  MathLearningView,
} from "./pages";
import CheckResult from "./pages/CheckResult";
import CompleteSplash from "./pages/CompleteSplash";
import WrongAnswer from "./pages/WrongAnswer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/main" element={<Main />} />
        <Route path="/study" element={<Study />} />
        <Route path="/korean" element={<KoreanLearningView />} />
        <Route path="/english" element={<EnglishLearningView />} />
        <Route path="/math" element={<MathLearningView />} />
        <Route path="check-result" element={<CheckResult />} />
        <Route path="complete-splash" element={<CompleteSplash />} />
        <Route path="wrong-answer" element={<WrongAnswer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
