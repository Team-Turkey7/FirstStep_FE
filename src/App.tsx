import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import Example from "./pages/Example";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
