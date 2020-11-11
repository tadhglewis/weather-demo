import Unit from "../Unit";

type WeatherDescription = "Clear";

type Direction = "N" | "E" | "S" | "W";

type Current = {
  cloudcover: number;
  feelslike: number;
  humidity: number;
  is_day: string;
  observation_time: string;
  recip: number;
  pressure: number;
  temperature: number;
  uv_index: number;
  visiblity: number;
  weather_code: number;
  weather_descriptions: WeatherDescription[];
  weather_icons: string[];
  wind_degree: number;
  wind_dir: Direction;
};

type _Location = {
  country: string;
  lat: string;
  localtime: string;
  localtime_epoch: number;
  lon: string;
  name: string;
  region: string;
  timezone_id: string;
  utc_offset: string;
};

type _Request = {
  language: "en";
  query: string;
  type: "LatLon" | "City" | "IP" | "Zipcode";
  unit: Unit;
};

type Weather = {
  current: Current;
  location: _Location;
  request: _Request;
};

export default Weather;
