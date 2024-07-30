export interface CountryData {
    id: string;
    name: string;
    continent: string;
    flag_url: string;
    gold_medals: number;
    silver_medals: number;
    bronze_medals: number;
    total_medals: number;
    rank: number;
    rank_total_medals: number;
}
  
export interface Links {
    first: string;
    last: string;
    prev: string;
    next: string;
  }
  
export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}
  
export interface MedalApiResponse {
    data: CountryData[];
    links: Links;
    meta: Meta;
}
  