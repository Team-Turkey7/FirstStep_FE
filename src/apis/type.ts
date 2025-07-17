export type CompletionResponse = {
  date: string;
  complete: boolean;
};

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
  audioUrl: string;
};
