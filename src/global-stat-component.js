import React from "react";
// import useCovidGlobalStat from "./hooks/use-covid-global-stats";
import useCovidCountriesStats from "./hooks/use-covid-countries-stats";

export default function GlobalStatComponetn() {
  // const [covidGlobalStat, covidTopCountryNewConfirmed] = useCovidGlobalStat();

  const [
    covidCountriesStats,
    covidGlobalStat,
    covidTopCountryNewConfirmed,
  ] = useCovidCountriesStats();

  const topNewConfirmedBlock = covidTopCountryNewConfirmed.map((countries) => {
    return (
      <div>
        <h4>{countries.Country}</h4>
        <div>New confirmed per day: {countries.NewConfirmed}</div>
      </div>
    );
  });

  return (
    <div>
      <h1>Global statistic</h1>
      <div>NewConfirmed:{covidGlobalStat.NewConfirmed}</div>
      <div>TotalConfirmed:{covidGlobalStat.TotalConfirmed}</div>
      <div>NewDeaths:{covidGlobalStat.NewDeaths}</div>
      <div>TotalDeaths:{covidGlobalStat.TotalDeaths}</div>
      <div>NewRecovered:{covidGlobalStat.NewRecovered}</div>
      <div>TotalRecovered:{covidGlobalStat.TotalRecovered}</div>
      {topNewConfirmedBlock}
    </div>
  );
}
