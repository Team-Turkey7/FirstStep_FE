import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizCard } from "./components/QuizCard";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<QuizCard num={7} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
