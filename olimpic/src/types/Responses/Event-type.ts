interface Competitor {
    country_id: string;
    country_flag_url: string;
    competitor_name: string;
    position: number;
    result_position: string;
    result_winnerLoserTie: string;
    result_mark: string;
}
  
export interface OlympicEventData {
    id: number;
    day: string;
    discipline_name: string;
    discipline_pictogram: string;
    name: string | null;
    venue_name: string;
    event_name: string;
    detailed_event_name: string;
    start_date: string;
    end_date: string;
    status: string;
    is_medal_event: number;
    is_live: number;
    competitors: Competitor[];
}
  
export  interface Links {
    first: string;
    last: string;
    prev: string;
    next: string;
}
  
export  interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}
  
export  interface EventsApiResponse {
    data: OlympicEventData[];
    links: Links;
    meta: Meta;
}
export  interface EventApiResponse {
    data: OlympicEventData;
}  