import type { Component } from 'solid-js';
import type { HandInputArguments } from '@src/components/EventNameInput';

import { For } from 'solid-js';
import { useEventName } from './dependencies';
import { EventNameInput } from '@src/components/EventNameInput';
import { isTest } from '@src/enviroment';
import { useEvent } from '@src/stores/EventStore';

export type HandSubmitArgument = Event & {
  submitter: HTMLElement;
};

export const EventNameForm: Component = () => {
  const [state, { add }] = useEvent();
  const { eventName, setEventName } = useEventName('');
  const handleInput = (event: HandInputArguments) => {
    setEventName({
      value: event.currentTarget.value,
    });
  };
  const handleSubmit = (event: HandSubmitArgument) => {
    event.preventDefault();

    if (!eventName.value) {
      return;
    }

    add?.({ name: eventName.value });
    setEventName({ value: '' });
  };

  return (
    <>
      <p>{state.events.length}</p>
      <form
        className="block w-full"
        onSubmit={handleSubmit}
        data-testid={isTest() ? 'event-name-form' : null}
      >
        <EventNameInput
          value={eventName.value}
          handleInput={handleInput}
          placeholder="👉 input your schedule name"
        />
      </form>
      <For each={state.events}>{(event) => <p>{event.name}</p>}</For>
    </>
  );
};
