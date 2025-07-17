export type CompletionResponse = {
  date: string;
  complete: boolean;
};

export type ProblemsResponse = Problem[];

export interface Problem {
  id: number;
  category: string;
  isCorrect: boolean;
  answer: string;
  photoUrl: string;
  problem: string;
  problemDetail: string;
  level: number;
}

export type CategoryDateDataRequest = {
  category: string;
  date: string;
};

export type CategoryDateDataResponse = {
  id: number;
  level: number;
  problem: string;
  problemDetail: string;
  date: string;
  photoUrl: string;
};

export type MarkingProblemRequest = {
  id: string;
  userAnswer: string;
};

export type MarkingProblemResponse = {
  result: boolean;
};
