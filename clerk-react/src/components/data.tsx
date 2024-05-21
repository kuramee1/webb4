export interface Event {
  date: string;
  attendees: number;
  location: string;
  organizer: string;
}

// data.tsx
export const data: Event[] = [
  {
    date: "2024-05-18",
    attendees: 10,
    location: "Some Location",
    organizer: "Some Organizer"
  },
  // Додайте інші події за необхідністю
];
