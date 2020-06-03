import React from "react";
import useCovidData from "./hooks/use-covid-countries-stats";

export default function GlobalStatComponetn() {
  const [
    covidCountriesStats,
    covidGlobalStat,
    covidTopCountryNewConfirmed,
    covidTopCountryNewDeaths,
    covidTopCountryNewRecovered,
  ] = useCovidData();

  const topNewConfirmedBlock = covidTopCountryNewConfirmed.map((countries) => {
    return (
      <div>
        <b> {countries.Country}</b> {countries.NewConfirmed}
      </div>
    );
  });

  return (
    <div className="global-stat-component">
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Global statistic</span>
      </nav>
      <div>NewConfirmed:{covidGlobalStat.NewConfirmed}</div>
      <div>TotalConfirmed:{covidGlobalStat.TotalConfirmed}</div>
      <div>NewDeaths:{covidGlobalStat.NewDeaths}</div>
      <div>TotalDeaths:{covidGlobalStat.TotalDeaths}</div>
      <div>NewRecovered:{covidGlobalStat.NewRecovered}</div>
      <div>TotalRecovered:{covidGlobalStat.TotalRecovered}</div>
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">
          <h2>TOP 10 countries per day</h2>
        </span>
      </nav>

      <button
        type="button"
        class="btn btn-primary"
        onClick={() => console.log(covidTopCountryNewDeaths)}
      >
        Infected
      </button>
      <button type="button" class="btn btn-secondary">
        Dead
      </button>
      <button type="button" class="btn btn-success">
        Recovered
      </button>
      {topNewConfirmedBlock}
    </div>
  );
}
