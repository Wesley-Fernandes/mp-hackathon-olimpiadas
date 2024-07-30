import { EventsApiResponse } from "@/types/Responses/Event-type";

export const events:EventsApiResponse = {
    "data": [
    {
      "id": 3407,
      "day": "2024-07-24",
      "discipline_name": "Football",
      "discipline_pictogram": "https://codante.s3.amazonaws.com/codante-apis/olympic-games/pictograms/FBL.avif",
      "name": null,
      "venue_name": "Geoffroy-Guichard Stadium",
      "event_name": "Men",
      "detailed_event_name": "Men's Group B",
      "start_date": "2024-07-24T15:00:00+02:00",
      "end_date": "2024-07-24T16:45:00+02:00",
      "status": "Finished",
      "is_medal_event": 0,
      "is_live": 0,
      "competitors": [
        {
          "country_id": "Argentina",
          "country_flag_url": "https://codante.s3.amazonaws.com/codante-apis/olympic-games/flags/ARG.png",
          "competitor_name": "Argentina",
          "position": 0,
          "result_position": "",
          "result_winnerLoserTie": "L",
          "result_mark": "1"
        },
        {
          "country_id": "Marrocos",
          "country_flag_url": "https://codante.s3.amazonaws.com/codante-apis/olympic-games/flags/MAR.png",
          "competitor_name": "Morocco",
          "position": 1,
          "result_position": "",
          "result_winnerLoserTie": "W",
          "result_mark": "2"
        }
      ]
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
      "per_page": 10,
      "to": 10,
      "total": 100
    }
  }