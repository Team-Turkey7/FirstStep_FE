import axios from "axios";
import {
  CategoryDateDataRequest,
  CategoryDateDataResponse,
  CompletionResponse,
} from "./type";

export const baseUrl = import.meta.env.VITE_BASE_URL;

//완료 여부 전체 조회 api
export const Complete = async () => {
  return await axios.get<CompletionResponse>(`${baseUrl}/problem/completion`);
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
