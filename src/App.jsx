import React, { useState, useEffect } from "react";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const launchDate = new Date("2024-12-25T00:00:00.000Z"); // November 1st, 2023
    const countdown = setInterval(() => {
      const now = new Date();
      const timeDiff = launchDate.getTime() - now.getTime();
      const daysLeft = Math.floor(timeDiff / (1000 * 3600 * 24));
      const hoursLeft = Math.floor(
        (timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)
      );
      const minutesLeft = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
      const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div class="h-screen flex justify-center items-center gap-5 bg-gray-100">
      <div class="flex flex-col gap-5 max-w-md p-4 bg-white rounded shadow-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <h1 class="text-3xl font-bold mb-4 text-center md:text-4xl lg:text-5xl xl:text-6xl">
          Portfolio Coming Soon!
        </h1>
        <p class="text-sm mb-8 text-center md:text-base lg:text-lg xl:text-xl">
          Get ready to explore my amazing portfolio, launching on December 25th,
          2024.
        </p>
        <div class="flex justify-center mb-8 flex-wrap md:flex-nowrap">
          <div class="mr-4 mb-4 md:mb-0">
            <span class="text-4xl font-bold">{days}</span>
            <span class="text-lg">Days</span>
          </div>
          <div class="mr-4 mb-4 md:mb-0">
            <span class="text-4xl font-bold">{hours}</span>
            <span class="text-lg">Hours</span>
          </div>
          <div class="mr-4 mb-4 md:mb-0">
            <span class="text-4xl font-bold">{minutes}</span>
            <span class="text-lg">Minutes</span>
          </div>
          <div class="mb-4 md:mb-0">
            <span class="text-4xl font-bold">{seconds}</span>
            <span class="text-lg">Seconds</span>
          </div>
        </div>
        <p class="text-sm mb-8 text-center md:text-base lg:text-lg xl:text-xl">
          Stay tuned for the launch!
        </p>
        <a
          href="https://www.figma.com/design/sbkJIojAmC1bjReEvlQXJl/Portfolio-v_1?node-id=0-1&node-type=canvas&t=2BAe1kQHBeNnMf95-0"
          target="_blank"
          className="text-blue-500 hover:text-red-500 text-sm mb-8 text-center md:text-base lg:text-lg xl:text-xl"
        >
          <p>Link</p>
        </a>
      </div>
    </div>
  );
}

export default App;
