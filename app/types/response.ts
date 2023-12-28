// 본인 서버에서 내려주는 응답 구조
export interface APIResponse<T> {
  data: T;
}
