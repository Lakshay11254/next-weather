interface Daily {
    temperature_2m_max: [number];
    time: [string];
    weather_code: [number];
  }
  
  interface DailyUnits {
    temperature_2m_max: String
    time: String
    weather_code: String
  }
  
  interface Hourly {
    apparent_temperature: [number];
    dew_point_2m: [number];
    precipitation_probability: [number];
    relative_humidity_2m: [number];
    temperature_2m: [number];
    time: [string];
    uv_index: [number];
    uv_index_clear_sky: [number];
  }
  
  interface HourlyUnits {
    apparent_temperature: String
    dew_point_2m: String
    precipitation_probability: String
    relative_humidity_2m: String
    temperature_2m: String
    time: String
    uv_index: String
    uv_index_clear_sky: String
  }
  
  interface Root {
    daily: Daily;
    daily_units: DailyUnits;
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: String;
    timezone_abbreviation: String;
    utc_offset_seconds: number;
}
 