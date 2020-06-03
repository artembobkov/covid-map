import { useState, useEffect } from "react";
import covidGlobalStatService from "../services/covid-global-stat-service";
import getCountryCoordinatesByCodeService from "../services/get-country-coordinates-by-code-service";

export default function useCovidData(initialState = []) {
  const [covidCountriesStats, setCovidCountriesStats] = useState(initialState);
  const [covidGlobalStat, setCovidGlobalStat] = useState(initialState);
  const [
    covidTopCountryNewConfirmed,
    setCovidTopCountryNewConfirmed,
  ] = useState(initialState);
  const [covidTopCountryNewDeaths, setCovidTopCountryNewDeaths] = useState(
    initialState
  );
  const [
    covidTopCountryNewRecovered,
    setCovidTopCountryNewRecovered,
  ] = useState(initialState);

  useEffect(() => {
    covidGlobalStatService().then((covidData) => {
      setCovidGlobalStat(covidData.Global);
      setCovidTopCountryNewConfirmed(
        covidData.Countries.sort((a, b) =>
          a.NewConfirmed < b.NewConfirmed ? 1 : -1
        ).slice(0, 10)
      );
      setCovidTopCountryNewDeaths(
        covidData.Countries.sort((a, b) =>
          a.NewDeaths < b.NewDeaths ? 1 : -1
        ).slice(0, 10)
      );
      setCovidTopCountryNewRecovered(
        covidData.Countries.sort((a, b) =>
          a.NewRecovered < b.NewRecovered ? 1 : -1
        ).slice(0, 10)
      );

      const covidCountriesWithLocation = covidData.Countries.map(
        (covidCountry) => {
          const location = getCountryCoordinatesByCodeService(
            covidCountry.CountryCode
          );

          return { ...covidCountry, ...location };
        }
      );
      setCovidCountriesStats(covidCountriesWithLocation);
    });
  }, []);

  return [
    covidCountriesStats,
    covidGlobalStat,
    covidTopCountryNewConfirmed,
    covidTopCountryNewDeaths,
    covidTopCountryNewRecovered,
  ];
}
