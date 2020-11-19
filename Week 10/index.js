import { getJSON, getLocation } from './utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-10-01&endtime=2020-12-02&maxradiuskm=100';

getLocation().then((data) => {
    console.log(data)
let latitude = data.coords.latitude;
let longitude = data.coords.longitude;
const url = baseUrl + `&latitude=${latitude}&longitude=${longitude}`;
getJSON(url).then((data) => {console.log(data)});
});
