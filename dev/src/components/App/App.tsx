import type { Component } from 'solid-js';

import { ScheduleNameForm } from '@src/components/ScheduleNameForm';
// import styles from './App.module.css'
// import image from '@assets/dummy.png'
import { DayScheduleProvider } from '@src/stores/DayScheduleStore';

export const App: Component = () => {
  return (
    <>
      <DayScheduleProvider>
        <ScheduleNameForm />
      </DayScheduleProvider>
    </>
  );
};
