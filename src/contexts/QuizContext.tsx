import { createContext } from "react";

interface IProblemProps {
  problemId: number;
  level: number;
  problem: string | null;
  problemDetail: string | null;
  photoUrl: string | null;
  date: string;
  audio?: string | null;
}

export interface QuizContextType {
  problems: IProblemProps[];
  currentIndex: number;
  setProblems: (problems: IProblemProps[]) => void;
  setCurrentIndex: (index: number) => void;
}

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);
