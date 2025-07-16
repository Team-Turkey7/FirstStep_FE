export type CompletionResponse = {
  completions: Completions[];
};

export type Completions = {
  date: string;
  isComplete: boolean;
};

export type ProblemsResponse = Problem[];

export interface Problem {
  id: number;
  category: string;
  isCorrect: boolean;
  level: number;
  problem: string;
  problemDetail: string;
  date: string;
  answer: string;
  photoUrl: string;
}
