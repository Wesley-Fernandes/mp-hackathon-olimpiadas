export interface DisciplineData {
    id: string;
    name: string;
    pictogram_url: string;
}
  
export interface DisciplineApiResponse {
    data: DisciplineData[];
}
  