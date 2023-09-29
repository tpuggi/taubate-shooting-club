import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Papa from "papaparse";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/contexts/calendar/calendar.csv"); // Substitua pelo caminho correto do seu arquivo CSV
      const reader = response.body.getReader();
      const result = await reader.read();

      const text = new TextDecoder().decode(result.value);
      Papa.parse(text, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          console.log(result);
          const calendarEvents = result.data.map((item) => ({
            title: item.eventTitle,
            start: item.eventDate,
            end: item.eventEndDate,
            color: item.eventColor ? item.eventColor : "rgb(153, 27, 27)",
          }));
          setEvents(calendarEvents);
        },
      });
    }

    fetchData();
  }, []);

  return (
    <div className="inter-font text-white">
      <div
        className="h-[8em] mt-10 bg-red-800 items-center flex justify-center bg-center bg-blend-multiply bg-opacity-40 bg-[url('/images/clube.jpg')]"
        data-aos="flip-left"
      >
        <h1 className="text-2xl font-bold mb-4 text-[2em]">Calendário</h1>
      </div>
      <div className="flex justify-center  text-white " data-aos="fade-up">
        <div className="h-full w-full m-10 bg-gradient-to-b from-neutral-700 to-neutral-900">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            locale="pt-br"
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
