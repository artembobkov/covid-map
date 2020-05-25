import countries from "../data/countries-coordinates";

export default function getCountryCoordinatesByCodeService(code) {
  return countries[code.toUpperCase()];
}
