import { MathAnswer } from "../components";

const test = {
  problemId: 1,
  problem: "태수와 고래밥",
  problemDetail:
    "태수는 20개의 고래밥을 가지고 있다.하지만 정욱이가 고래밥이 너무 가지고 싶어 태수의 고래밥 14개를 뺏었다.태수가 가지고 있는 고래밥의 개수는?",
  answer: "",
};

export const Home = () => {
  return (
    <>
      <MathAnswer
        problemId={test.problemId}
        problem={test.problem}
        problemDetail={test.problemDetail}
        answer={test.answer}
      />
    </>
  );
};
