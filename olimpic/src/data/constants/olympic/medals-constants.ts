import { MedalApiResponse } from "@/types/Responses/Medal-types";

export const medals:MedalApiResponse = {
    "data": [
      {
        "id": "KOR",
        "name": "República da Coréia",
        "continent": "ASI",
        "flag_url": "https:\/\/codante.s3.amazonaws.com\/codante-apis\/olympic-games\/flags\/KOR.png",
        "gold_medals": 5,
        "silver_medals": 3,
        "bronze_medals": 1,
        "total_medals": 9,
        "rank": 1,
        "rank_total_medals": 4
      },
      {
        "id": "JPN",
        "name": "Japão",
        "continent": "ASI",
        "flag_url": "https:\/\/codante.s3.amazonaws.com\/codante-apis\/olympic-games\/flags\/JPN.png",
        "gold_medals": 5,
        "silver_medals": 2,
        "bronze_medals": 4,
        "total_medals": 11,
        "rank": 2,
        "rank_total_medals": 3
      },
    ],
    "links": {
      "first": "...",
      "last": "...",
      "prev": "...",
      "next": "..."
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 10,
      "path": "...",
      "per_page": 20,
      "to": 20,
      "total": 200
    }
  }