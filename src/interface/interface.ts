export interface Error {
  message: string;
}

export interface univ {
  id: number;
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  state_province?: string;
  web_pages: string[];
  imgUrl: string;
  paragrapgh: string;
  chartData: string;
}
