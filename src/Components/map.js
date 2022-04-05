import React from "react";
import pic from "./images/Map.jpeg";


import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";


function Map() {
  return (
    <div className="Map">
      <img src={pic} />
    </div>

const data = [
  {crash_date: "2021-04-15T00:00:00.000",
  crash_time: "20:00",
  borough: "STATEN ISLAND",
  zip_code: "10304",
  on_street_name: "GREENFIELD AVENUE",
  off_street_name: "OSGOOD AVENUE",
  number_of_persons_injured: "0",
  number_of_persons_killed: "0",
  number_of_pedestrians_injured: "0",
  number_of_pedestrians_killed: "0",
  number_of_cyclist_injured: "0",
  number_of_cyclist_killed: "0",
  number_of_motorist_injured: "0",
  number_of_motorist_killed: "0",
  contributing_factor_vehicle_1: "Unspecified",
  collision_id: "4408310",
  vehicle_type_code1: "Sedan"},
  {
    crash_date: "2021-04-06T00:00:00.000",
    crash_time: "22:58",
    borough: "STATEN ISLAND",
    zip_code: "10312",
    latitude: "40.5268940",
    longitude: "-74.1672800",
    location: {
      latitude: "40.526894",
      longitude: "-74.16728",
      human_address: '{"address": "", "city": "", "state": "", "zip": ""}'

  },
  {
    crash_date: "2021-04-14T00:00:00.000",
    crash_time: "16:30",
    borough: "STATEN ISLAND",
    zip_code: "10308",
    latitude: "40.542908",
    longitude: "-74.15579",
    location: {
      latitude: "40.542908",
      longitude: "-74.15579",
      human_address: '{"address": "", "city": "", "state": "", "zip": ""}'
  },
  {
    crash_date: "2021-04-16T00:00:00.000",
    crash_time: "12:00",
    borough: "STATEN ISLAND",
    zip_code: "10306",
    latitude: "40.57365",
    longitude: "-74.11252",
    location: {
      latitude: "40.57365",
      longitude: "-74.11252",
      human_address: '{"address": "", "city": "", "state": "", "zip": ""}'

  },
  {
    crash_date: "2021-04-14T00:00:00.000",
    crash_time: "6:45",
    borough: "STATEN ISLAND",
    zip_code: "10308",
    latitude: "40.54048",
    longitude: "-74.153404",
    location: {
      latitude: "40.54048",
      longitude: "-74.153404",
      human_address: '{"address": "", "city": "", "state": "", "zip": ""}'

  },
  {
    crash_date: "2021-04-14T00:00:00.000",
    crash_time: "17:30",
    borough: "STATEN ISLAND",
    zip_code: "10306",
    latitude: "40.565254",
    longitude: "-74.1301",
    location: {
      latitude: "40.565254",
      longitude: "-74.1301",
      human_address: '{"address": "", "city": "", "state": "", "zip": ""}'


  },

  {
    crash_date: "2021-04-14T00:00:00.000",
    crash_time: "10:49",
    on_street_name: "STATEN ISLAND EXPRESSWAY",
    number_of_persons_injured: "1",
    number_of_persons_killed: "0",
    number_of_pedestrians_injured: "0",
    number_of_pedestrians_killed: "0",
    number_of_cyclist_injured: "0",
    number_of_cyclist_killed: "0",
    number_of_motorist_injured: "1",
    number_of_motorist_killed: "0",
    contributing_factor_vehicle_1: "Driver Inattention/Distraction",
    contributing_factor_vehicle_2: "Unspecified",
    collision_id: "4407590",
    vehicle_type_code1: "Station Wagon/Sport Utility Vehicle",
    vehicle_type_code2: "Station Wagon/Sport Utility Vehicle"


  },

  {
    crash_date: "2021-04-15T00:00:00.000",
    crash_time: "18:00",
    borough: "STATEN ISLAND",
    zip_code: "10301",
    latitude: "40.634415",
    longitude: "-74.08535",
    location: {
      latitude: "40.634415",
      longitude: "-74.08535",
      human_address: '{"address": "", "city": "", "state": "", "zip": ""}'

  },
  {
    crash_date: "2021-04-14T00:00:00.000",
    crash_time: "13:30",
    borough: "STATEN ISLAND",
    zip_code: "10304",
    latitude: "40.62046",
    longitude: "-74.07641",
    location: {
      latitude: "40.62046",
      longitude: "-74.07641",
      human_address: '{"address": "", "city": "", "state": "", "zip": ""}'

  },
  {
    crash_date: "2021-04-14T00:00:00.000",
    crash_time: "15:10",
    borough: "STATEN ISLAND",
    zip_code: "10306",
    latitude: "40.573204",
    longitude: "-74.09711",
    location: {
      latitude: "40.573204",
      longitude: "-74.09711",
      human_address: '{"address": "", "city": "", "state": "", "zip": ""}'

  },

  {
    crash_date: "2021-04-15T00:00:00.000",
    crash_time: "16:08",
    borough: "STATEN ISLAND",
    zip_code: "10306",
    latitude: "40.575832",
    longitude: "-74.12409",
    location: {
      latitude: "40.575832",
      longitude: "-74.12409",
      human_address: '{"address": "", "city": "", "state": "", "zip": ""}'


  },

{
  crash_date: "2021-04-15T00:00:00.000",
  crash_time: "13:45",
  borough: "STATEN ISLAND",
  zip_code: "10308",
  latitude: "40.540188",
  longitude: "-74.149",
  location: {
    latitude: "40.540188",
    longitude: "-74.149",
    human_address: '{"address": "", "city": "", "state": "", "zip": ""}'

},

{
  crash_date: "2021-04-15T00:00:00.000",
  crash_time: "15:34",
  borough: "STATEN ISLAND",
  zip_code: "10304",
  latitude: "40.63115",
  longitude: "-74.076454",
  location: {
    latitude: "40.63115",
    longitude: "-74.076454",
    human_address: '{"address": "", "city": "", "state": "", "zip": ""}'

},

{
  crash_date: "2021-04-15T00:00:00.000",
  crash_time: "12:15",
  borough: "STATEN ISLAND",
  zip_code: "10310",
  latitude: "40.6354",
  longitude: "-74.106674",
  location: {
    latitude: "40.6354",
    longitude: "-74.106674",
    human_address: '{"address": "", "city": "", "state": "", "zip": ""}'

}
];

        <VictoryChart>
          <VictoryAxis tickValues={["Staten Island"]} />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
  
          <VictoryBar data={data} x="borough" y="crash_time" />
        </VictoryChart>
   

  );
}


export default Map;
