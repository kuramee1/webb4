import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

interface Event {
  date: string;
  attendees: number;
  location: string;
  organizer: string;
}

const Events: React.FC = () => {
  const navigate = useNavigate();
  const clerk = useClerk();
  const { user } = clerk;
  const [events, setEvents] = useState<Event[]>([]);
  const [date, setDate] = useState<string>("");
  const [attendees, setAttendees] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [organizer, setOrganizer] = useState<string>("");

  const handleAddEvent = () => {
    if (date.trim() !== "" && attendees > 0 && location.trim() !== "" && organizer.trim() !== "") {
      const newEvent: Event = {
        date: date,
        attendees: attendees,
        location: location,
        organizer: organizer
      };
      setEvents([...events, newEvent]);
      // Очистка полів після додавання події
      setDate("");
      setAttendees(0);
      setLocation("");
      setOrganizer("");
    }
  };

  // Перевірка на вхід користувача перед відображенням сторінки
  if (!user) {
    navigate("/signin");
    return null;
  }

  return (
    <div className="events-container">
      <h2>Create New Event</h2>
      <div className="event-form">
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Attendees"
          value={attendees}
          onChange={(e) => setAttendees(parseInt(e.target.value))}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Organizer"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div className="event-list">
        <h2>Events List</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <p>Date: {event.date}</p>
              <p>Attendees: {event.attendees}</p>
              <p>Location: {event.location}</p>
              <p>Organizer: {event.organizer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Events;
