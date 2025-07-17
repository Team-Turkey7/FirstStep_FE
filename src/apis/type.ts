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
  answer: string;
  photoUrl: string;
}
