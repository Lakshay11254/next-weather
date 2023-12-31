type Props = {
    params:{
        city: string;
        lat: string;
        long: string;
    }
}
const WeatherPage = ({params:{city, lat, long}}: Props) => {
  return (
    <div>Welcome to the Weather Page: {city} {lat} {long} </div>
  )
}

export default WeatherPage