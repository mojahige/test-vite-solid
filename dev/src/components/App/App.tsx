import type { Component } from 'solid-js';

import { EventNameForm } from '@src/components/EventNameForm';
// import styles from './App.module.css'
// import image from '@assets/dummy.png'
import { DayScheduleProvider } from '@src/stores/DayScheduleStore';

export const App: Component = () => {
  return (
    <>
      <DayScheduleProvider>
        <EventNameForm />
      </DayScheduleProvider>
    </>
  );
};
