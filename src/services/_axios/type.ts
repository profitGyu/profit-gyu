export interface IBaseResponse {
  code: string;
  detail: string;
}

export interface IBaseWithPageResponse {
  code: string;
  detail: string;
  pagination: IPagination;
}

export interface IPagination {
  total: number;
  count: number;
  per_page: string;
  current_page: number;
  total_pages: number;
}

export interface INodeBaseResponse {
  status: boolean;
  status_code: string;
}
