import React from "react";
import L from "leaflet";
import { Map, TileLayer, Popup, CircleMarker } from "react-leaflet";
import "./map-component.css";
import useCovidData from "./hooks/use-covid-countries-stats";
import GlobalStatComponent from "./global-stat-component";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

export default function MapComponent() {
  const [covidCountriesStats] = useCovidData();

  const markers = covidCountriesStats.map((covidCountryStat) => {
    return (
      <CircleMarker
        center={[covidCountryStat.latitude, covidCountryStat.longitude]}
        radius={25}
        color="green"
        onMouseOver={(e) => {
          e.target.openPopup();
        }}
        onMouseOut={(e) => {
          e.target.closePopup();
        }}
      >
        <Popup closeButton={false}>
          <div className="popup">
            <h2>{covidCountryStat.Country}</h2>
            <div>New Confirmed : {covidCountryStat.NewConfirmed}</div>
            <div>Total Confirmed : {covidCountryStat.TotalConfirmed}</div>
            <div>New Deaths : {covidCountryStat.NewDeaths}</div>
            <div>Total Deaths : {covidCountryStat.TotalDeaths}</div>
            <div>New Recovered : {covidCountryStat.NewRecovered}</div>
            <div>Total Recovered : {covidCountryStat.TotalRecovered}</div>
          </div>
        </Popup>
      </CircleMarker>
    );
  });

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Covid Map
        </a>
      </nav>
      <div className="covid-map-and-global-stat-block">
        <Map zoom={3} minZoom={3} center={[33.521862, 31.908509]}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers}
        </Map>
        <GlobalStatComponent />
      </div>
    </div>
  );
}
