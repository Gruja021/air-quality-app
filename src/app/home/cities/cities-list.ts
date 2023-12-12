export interface CitiesObj {
  status: string;
  data: CitiesList[];
}

export interface CitiesList {
  uid: number;
  aqi: string;
  time: Time;
  station: Station;
}

interface Time {
  tz: string;
  stime: string;
  vtime: number;
}

interface Station {
  name: string;
  geo: number[];
  url: string;
}
