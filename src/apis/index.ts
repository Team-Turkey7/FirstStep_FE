import axios from "axios";
import { CompletionResponse, ProblemsResponse } from "./type";
import {
  CategoryDateDataRequest,
  CategoryDateDataResponse,
  MarkingProblemRequest,
  MarkingProblemResponse,
} from "./type";

export const baseUrl = import.meta.env.VITE_BASE_URL;

// 채점 api
export const MarkingProblemData = async (id: string, userAnswer: string) => {
  const requestData: MarkingProblemRequest = { id, userAnswer };

  try {
    const response = await axios.post<MarkingProblemResponse>(
      `${baseUrl}/problem/judge`,
      requestData
    );

    console.log("채점 성공 응답:", response.data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.message) {
      console.error("상태 코드:", err.response?.status);
      console.error("에러 응답:", err.response?.data);
      console.error("요청 설정:", err.config);

      throw new Error(err.response?.data?.message || "채점 실패");
    }
    throw err;
  }
};

//완료 여부 전체 조회 api
export const Complete = async () => {
  try {
    const response = await axios.get<CompletionResponse[]>(
      `${baseUrl}/problem/completion`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.message) {
      throw new Error(error.response?.data.message);
    }
    throw new Error("알 수 없는 에러 발생");
  }
};

// 카테고리와 날짜별 조회 api
export const CategoryDateData = async (category: string, date: string) => {
  const requestData: CategoryDateDataRequest = { category, date };

  try {
    const response = await axios.post<CategoryDateDataResponse[]>(
      `${baseUrl}/problem/category`,
      requestData
    );

    console.log("성공 응답:", response.data);
    return response.data;
  } catch (err) {
    console.error("전체 에러:", err);

    if (axios.isAxiosError(err)) {
      console.error("상태 코드:", err.response?.status);
      console.error("응답 데이터:", err.response?.data);
      console.error("요청 URL:", err.config?.url);
      console.error("요청 파라미터:", err.config?.params);

      throw new Error(
        `API 요청 실패: ${err.response?.status || "NETWORK_ERROR"}`
      );
    }

    console.error("알 수 없는 에러:", err);
  }
};

export const CheckAnswers = async (date: string) => {
  const encodedDate = encodeURIComponent(date);
  return await axios.get<ProblemsResponse>(`${baseUrl}/problem/${encodedDate}`);
};

export const CheckWrongAnswers = async () => {
  return await axios.get<ProblemsResponse>(`${baseUrl}/problem/mypage`);
};
