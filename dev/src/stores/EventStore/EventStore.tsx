import type { Component } from 'solid-js';
import { createContext, createState, useContext } from 'solid-js';

export interface Event {
  name: string;
}
export type Events = Event[];
export type EventStore = [
  { events: Events },
  { add?: (newEvent: Event) => void }
];

export const EventContext = createContext<EventStore>([{ events: [] }, {}]);
export const EventProvider: Component<{ events?: Events }> = (props) => {
  const [state, setState] = createState({ events: props.events ?? [] });
  const store: EventStore = [
    state,
    {
      add(newEvent: Event) {
        setState('events', (state) => [...state, newEvent]);
      },
    },
  ];

  return (
    <EventContext.Provider value={store}>
      {props.children}
    </EventContext.Provider>
  );
};

export const useEvent = (): EventStore => useContext(EventContext);
