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
    <div className="flex flex-wrap justify-center inter-font text-white m-10">
      <h1 className="text-[4em] montserrat_classic-font" data-aos="flip-right">
        Calendário
      </h1>
      <div
        className="bg-gradient-to-b from-neutral-700 to-neutral-900 text-white h-full w-full"
        data-aos="fade-up"
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          locale="pt-br"
        />
      </div>
    </div>
  );
};

export default CalendarPage;
