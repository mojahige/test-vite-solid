import type { Component } from 'solid-js';
import { isTestEnv } from '@src/is';

export type HandInputArguments = InputEvent & {
  currentTarget: HTMLInputElement;
};

export interface Props {
  value?: string;
  name?: string;
  placeholder?: string;
  handleInput?: (event: HandInputArguments) => void;
}

export const ScheduleNameInput: Component<Props> = (props) => {
  return (
    <div class="flex">
      <input
        className="block flex-grow h-11 px-4 py-1 bg-white border-1 border-gray rounded-sm shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        onInput={props.handleInput}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        type="text"
        data-testid={isTestEnv() ? 'event-name-input' : null}
      />
      <button class="flex-none w-24 h-11 rounded-sm bg-blue-400 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600">
        📝
      </button>
    </div>
  );
};
