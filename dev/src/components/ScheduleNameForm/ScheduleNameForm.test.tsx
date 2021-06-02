import { render, screen } from 'solid-testing-library';
import { useScheduleName } from './dependencies';
import { ScheduleNameForm } from './ScheduleNameForm';

describe('useEventName', () => {
  test('state の初期値を設定できる', () => {
    const { scheduleName } = useScheduleName('foo');

    expect(scheduleName.value).toBe('foo');
  });

  test('state 値を変更できる', () => {
    const { scheduleName, setScheduleName } = useScheduleName('');

    setScheduleName({ value: 'foo' });

    expect(scheduleName.value).toBe('foo');
  });
});

describe('EventNameForm component', () => {
  test('コンポーネントが描画される', () => {
    render(() => <ScheduleNameForm />);

    expect(screen.getByTestId('event-name-form')).toBeInTheDocument();
  });
});
