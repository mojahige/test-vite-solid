import { render, screen } from 'solid-testing-library';
import { useEventName } from './dependencies';
import { EventNameForm } from './EventNameForm';

describe('useEventName', () => {
  test('state の初期値を設定できる', () => {
    const { eventName } = useEventName('foo');

    expect(eventName.value).toBe('foo');
  });

  test('state 値を変更できる', () => {
    const { eventName, setEventName } = useEventName('');

    setEventName({ value: 'foo' });

    expect(eventName.value).toBe('foo');
  });
});

describe('EventNameForm component', () => {
  test('コンポーネントが描画される', () => {
    render(() => <EventNameForm />);

    expect(screen.getByTestId('event-name-form')).toBeInTheDocument();
  });
});
