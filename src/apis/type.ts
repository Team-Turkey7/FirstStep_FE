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
