import axios from "axios";

const _GET_SUMMARY = "https://api.covid19api.com/summary"; //@A summary of new and total cases per country updated daily.

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function covidGlobalStatService() {
  while (true) {
    try {
      const response = await axios.get(_GET_SUMMARY);
      return response.data;
    } catch (err) {
      await sleep(5000);
    }
  }
}
