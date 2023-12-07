export interface CityDetails {
  status: string;
  data: Data;
}

interface Data {
  aqi: number;
  idx: number;
  attributions: Attribution[];
  city: City;
  dominentpol: string;
  iaqi: Iaqi;
  time: Time;
  forecast: Forecast;
  debug: Debug;
}

interface Attribution {
  url: string;
  name: string;
  logo?: string;
}

interface City {
  geo: number[];
  name: string;
  url: string;
  location: string;
}

interface Debug {
  sync: Date;
}

interface Forecast {
  daily: Daily;
}

interface Daily {
  o3: O3[];
  pm10: O3[];
  pm25: O3[];
}

interface O3 {
  avg: number;
  day: Date;
  max: number;
  min: number;
}

interface Iaqi {
  dew: Dew;
  h: Dew;
  no2: Dew;
  p: Dew;
  pm10: Dew;
  pm25: Dew;
  so2: Dew;
  t: Dew;
  w: Dew;
  wg: Dew;
  co: Dew;
  o3: Dew;
}

interface Dew {
  v: number;
}

interface Time {
  s: Date;
  tz: string;
  v: number;
  iso: Date;
}
