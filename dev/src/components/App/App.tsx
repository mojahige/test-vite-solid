import type { Component } from 'solid-js';

import { EventNameForm } from '@src/components/EventNameForm';
// import styles from './App.module.css'
// import image from '@assets/dummy.png'
import { EventProvider } from '@src/stores/EventStore';

export const App: Component = () => {
  return (
    <>
      <EventProvider>
        <EventNameForm />
      </EventProvider>
    </>
  );
};
