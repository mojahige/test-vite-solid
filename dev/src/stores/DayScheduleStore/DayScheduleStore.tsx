import type { Component } from 'solid-js';

import { createContext, createState, useContext } from 'solid-js';

export interface Event {
  name: string;
}
export type Events = Event[];
export type DayScheduleStore = [
  { schedules: Events },
  { add?: (newEvent: Event) => void }
];

export const DayScheduleContext = createContext<DayScheduleStore>([
  { schedules: [] },
  {},
]);
export const DayScheduleProvider: Component<{ schedules?: Events }> = (
  props
) => {
  const [state, setState] = createState({ schedules: props.schedules ?? [] });
  const store: DayScheduleStore = [
    state,
    {
      add(newEvent: Event) {
        setState('schedules', (state) => [...state, newEvent]);
      },
    },
  ];

  return (
    <DayScheduleContext.Provider value={store}>
      {props.children}
    </DayScheduleContext.Provider>
  );
};

export const useDaySchedule = (): DayScheduleStore =>
  useContext(DayScheduleContext);
