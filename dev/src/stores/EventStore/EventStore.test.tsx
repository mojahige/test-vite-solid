// import { render, screen } from 'solid-testing-library';
import { fireEvent, render, screen } from 'solid-testing-library';
import { EventProvider, useEvent } from './EventStore';

describe('EventProvider', () => {
  test('初期値が空の配列である', () => {
    const Test = () => {
      const [state] = useEvent();

      return <p data-testid="paragraph">{state.events.length}</p>;
    };

    render(() => {
      return (
        <EventProvider>
          <Test />
        </EventProvider>
      );
    });

    expect(screen.getByTestId('paragraph').textContent).toBe('0');
  });

  test('event を追加できる', () => {
    const Test = () => {
      const [state, { add }] = useEvent();

      return (
        <>
          <p data-testid="paragraph">{state.events.length}</p>
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
        <EventProvider>
          <Test />
        </EventProvider>
      );
    });

    const paragraphElement = screen.getByTestId('paragraph');
    const buttonElement = screen.getByTestId('button');

    expect(paragraphElement.textContent).toBe('0');

    fireEvent.click(buttonElement);

    expect(paragraphElement.textContent).toBe('1');
  });
});
