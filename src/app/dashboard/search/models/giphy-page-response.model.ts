export interface GiphyPageResponse<T> {
  data: T[];
  meta: {
    msg: string;
    response_id: string;
    status: number;
  };
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
}
