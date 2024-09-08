import React from 'react';

interface Event {
  date: string;
  description: string;
}

interface TimelineViewProps {
  events: Event[];
}

const TimelineView: React.FC<TimelineViewProps> = ({ events }) => (
  <div>
    <h3>Timeline</h3>
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          <p>{event.date}: {event.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default TimelineView;
