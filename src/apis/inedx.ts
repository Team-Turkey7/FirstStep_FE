import axios from "axios";
import { CompletionResponse, ProblemsResponse } from "./type";

export const baseUrl = import.meta.env.VITE_BASE_URL;

export const CheckAnswers = async (date: string) => {
  const encodedDate = encodeURIComponent(date);
  return await axios.get<ProblemsResponse>(`${baseUrl}/problem/${encodedDate}`);
};

export const CheckWrongAnswers = async () => {
  return await axios.get<ProblemsResponse>(`${baseUrl}/problem/mypage`);
};
