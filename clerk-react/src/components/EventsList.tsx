import React from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

interface Event {
  date: string;
  attendees: number;
  location: string;
  organizer: string;
}

const EventsList: React.FC = () => {
  const clerk = useClerk();
  const navigate = useNavigate(); // Додавання useNavigate
  const { user } = clerk;
  // Тестові дані для івентів
   const events: Event[] = [
    {
      date: "2024-05-01",
      attendees: 50,
      location: "Venue A",
      organizer: "Organizer A"
    },
    {
      date: "2024-05-05",
      attendees: 30,
      location: "Venue B",
      organizer: "Organizer B"
    },
    {
      date: "2024-05-10",
      attendees: 25,
      location: "Venue C",
      organizer: "Organizer C"
    },
    {
      date: "2024-05-15",
      attendees: 60,
      location: "Venue D",
      organizer: "Organizer D"
    },
    {
      date: "2024-05-20",
      attendees: 40,
      location: "Venue E",
      organizer: "Organizer E"
    },
    {
      date: "2024-05-25",
      attendees: 35,
      location: "Venue F",
      organizer: "Organizer F"
    },
    {
      date: "2024-06-01",
      attendees: 55,
      location: "Venue G",
      organizer: "Organizer G"
    },
    {
      date: "2024-06-05",
      attendees: 70,
      location: "Venue H",
      organizer: "Organizer H"
    },
    {
      date: "2024-06-10",
      attendees: 20,
      location: "Venue I",
      organizer: "Organizer I"
    },
    {
      date: "2024-06-15",
      attendees: 45,
      location: "Venue J",
      organizer: "Organizer J"
    },
    {
      date: "2024-06-20",
      attendees: 65,
      location: "Venue K",
      organizer: "Organizer K"
    },
    {
      date: "2024-06-25",
      attendees: 30,
      location: "Venue L",
      organizer: "Organizer L"
    },
    {
      date: "2024-07-01",
      attendees: 40,
      location: "Venue M",
      organizer: "Organizer M"
    },
    {
      date: "2024-07-05",
      attendees: 50,
      location: "Venue N",
      organizer: "Organizer N"
    },
    {
      date: "2024-07-10",
      attendees: 25,
      location: "Venue O",
      organizer: "Organizer O"
    },
  ];
  const handleSignOut = () => {
    clerk.signOut();
  };

  if (!user) {
    navigate("/signin"); // Використання navigate якщо користувач не увійшов
    return null;
  }
   return (
    <div className="events-list">
      <h2>Events List</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Attendees:</strong> {event.attendees}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Organizer:</strong> {event.organizer}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default EventsList;
