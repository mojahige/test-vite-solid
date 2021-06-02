import type { State, SetStateFunction } from 'solid-js';
import { createState } from 'solid-js';

interface UseScheduleNameState {
  value: string;
}
interface UseScheduleNameReturnType {
  scheduleName: State<UseScheduleNameState>;
  setScheduleName: SetStateFunction<UseScheduleNameState>;
}

export const useScheduleName = (
  initialValue = ''
): UseScheduleNameReturnType => {
  const [scheduleName, setScheduleName] = createState({
    value: initialValue,
  });

  return {
    scheduleName,
    setScheduleName,
  };
};
