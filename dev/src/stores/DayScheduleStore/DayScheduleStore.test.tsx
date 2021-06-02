// import { render, screen } from 'solid-testing-library';
import { fireEvent, render, screen } from 'solid-testing-library';
import { DayScheduleProvider, useDaySchedule } from './DayScheduleStore';

describe('DayScheduleProvider', () => {
  test('初期値が空の配列である', () => {
    const Test = () => {
      const [state] = useDaySchedule();

      return <p data-testid="paragraph">{state.schedules.length}</p>;
    };

    render(() => {
      return (
        <DayScheduleProvider>
          <Test />
        </DayScheduleProvider>
      );
    });

    expect(screen.getByTestId('paragraph').textContent).toBe('0');
  });

  test('schedule を追加できる', () => {
    const Test = () => {
      const [state, { add }] = useDaySchedule();

      return (
        <>
          <p data-testid="paragraph">{state.schedules.length}</p>
          <button
            onClick={() => {
              add?.({ name: '🐶' });
            }}
            type="button"
            data-testid="button"
          >
            button
          </button>
        </>
      );
    };

    render(() => {
      return (
        <DayScheduleProvider>
          <Test />
        </DayScheduleProvider>
      );
    });

    const paragraphElement = screen.getByTestId('paragraph');
    const buttonElement = screen.getByTestId('button');

    expect(paragraphElement.textContent).toBe('0');

    fireEvent.click(buttonElement);

    expect(paragraphElement.textContent).toBe('1');
  });
});
