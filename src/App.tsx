import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Onboarding } from "./pages/Onboarding";
import { Main } from "./pages/Main";
import { Study } from "./pages/Study";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/main" element={<Main />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
