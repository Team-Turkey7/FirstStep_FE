import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Onboarding } from "./pages/Onboarding";
import { Main } from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
