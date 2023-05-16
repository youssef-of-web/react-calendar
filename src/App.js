import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MOCK_EVENTS } from "./event";
const localizer = momentLocalizer(moment);

function App() {
  const events = MOCK_EVENTS.map((event) => {
    // new Date(Y, M, D, H, MIN)
    return {
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color,
    };
  });
  return (
    <div className="App" style={{ padding: "14px" }}>
      <Calendar
        localizer={localizer}
        startAccessor={"start"}
        events={events}
        endAccessor={"end"}
        style={{
          height: "1000px",
        }}
        eventPropGetter={(event) => {
          return {
            style: {
              backgroundColor: event.color,
            },
          };
        }}
        onSelectEvent={(event) => alert(event.title)}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
      />
    </div>
  );
}

export default App;
