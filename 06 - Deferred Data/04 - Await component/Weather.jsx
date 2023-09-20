import React, { Suspense } from "react";
import { useLoaderData, defer } from "react-router-dom";
import { sleep, getWeather } from "./utils";

export async function loader() {
  const weatherPromise = getWeather();
  return defer({ weather: weatherPromise });
}

export default function Weather() {
  const loaderData = useLoaderData();


  return (
    <section className="weather-container">
      <h1>Weather in Salt Lake City</h1>
      <Await resolve={loaderData.weather}>
        {(loadedWeather) => {
          const iconUrl = 
          `http://openweathermap.org/img/wn/${loaderData.weather[0].icon}@2x.png`
          return (
                  <>
                    <h3>{loaderData.main.temp}F</h3>
                    <img src={iconUrl} />
                  </>
          )
        }}
      </Await>
    </section>
  );
}

//<h3>{loaderData.main.temp}ºF</h3>
//<img src={iconUrl} />
