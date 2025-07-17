import axios from "axios";
import { CompletionResponse } from "./type";

export const baseUrl = import.meta.env.VITE_BASE_URL;

//완료 여부 전체 조회 api
export const Complete = async () => {
  return await axios.get<CompletionResponse>(`${baseUrl}/problem/completion`);
};
