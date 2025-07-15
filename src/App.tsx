import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import CheckResult from "./pages/CheckResult";
import CompleteSplash from "./pages/CompleteSplash";
import WrongAnswer from "./pages/WrongAnswer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="check-result" element={<CheckResult />} />
        <Route path="complete-splash" element={<CompleteSplash />} />
        <Route path="wrong-answer" element={<WrongAnswer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
