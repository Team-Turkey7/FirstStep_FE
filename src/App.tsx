import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BigText } from "./components/BigText";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<BigText />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
