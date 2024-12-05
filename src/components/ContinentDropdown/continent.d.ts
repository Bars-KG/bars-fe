interface AirportContinentsProps {
  continents: Continent[]
}
interface ContinentProps {
  continent: Continent;
}

type Continent = {
  code: string; name: string
}