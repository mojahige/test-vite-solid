import type { State, SetStateFunction } from 'solid-js';
import { createState } from 'solid-js';

interface UseEventNameState {
  value: string;
}
interface UseEventNameReturnType {
  eventName: State<UseEventNameState>;
  setEventName: SetStateFunction<UseEventNameState>;
}

export const useEventName = (initialValue = ''): UseEventNameReturnType => {
  const [eventName, setEventName] = createState({
    value: initialValue,
  });

  return {
    eventName,
    setEventName,
  };
};
