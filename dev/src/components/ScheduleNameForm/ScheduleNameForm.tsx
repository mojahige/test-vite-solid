import type { Component } from 'solid-js';
import type { HandInputArguments } from '@src/components/ScheduleNameInput';

import { For } from 'solid-js';
import { useScheduleName } from './dependencies';
import { ScheduleNameInput } from '@src/components/ScheduleNameInput';
import { isTest } from '@src/enviroment';
import { useDaySchedule } from '@src/stores/DayScheduleStore';

export type HandSubmitArgument = Event & {
  submitter: HTMLElement;
};

export const ScheduleNameForm: Component = () => {
  const [state, { add }] = useDaySchedule();
  const { scheduleName, setScheduleName } = useScheduleName('');
  const handleInput = (event: HandInputArguments) => {
    setScheduleName({
      value: event.currentTarget.value,
    });
  };
  const handleSubmit = (event: HandSubmitArgument) => {
    event.preventDefault();

    if (!scheduleName.value) {
      return;
    }

    add?.({ name: scheduleName.value });
    setScheduleName({ value: '' });
  };

  return (
    <>
      <p>{state.schedules.length}</p>
      <form
        className="block w-full"
        onSubmit={handleSubmit}
        data-testid={isTest() ? 'event-name-form' : null}
      >
        <ScheduleNameInput
          value={scheduleName.value}
          handleInput={handleInput}
          placeholder="👉 input your schedule name"
        />
      </form>
      <For each={state.schedules}>{(schedule) => <p>{schedule.name}</p>}</For>
    </>
  );
};
