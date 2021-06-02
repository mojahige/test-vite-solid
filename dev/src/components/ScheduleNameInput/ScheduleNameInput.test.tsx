import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from 'solid-testing-library';
import { ScheduleNameInput } from './ScheduleNameInput';

describe('ScheduleNameInput component', () => {
  test('コンポーネントが描画される', () => {
    render(() => <ScheduleNameInput />);

    expect(screen.getByTestId('event-name-input')).toBeInTheDocument();
  });

  test.each([
    [undefined, null, false],
    ['foo', 'foo', true],
  ])('placeholder を設定できる', (prop, value, hasAttributeExpected) => {
    render(() => <ScheduleNameInput placeholder={prop} />);

    const testElement = screen.getByTestId('event-name-input');

    expect(testElement.getAttribute('placeholder')).toBe(value);
    expect(testElement.hasAttribute('placeholder')).toBe(hasAttributeExpected);
  });

  test.each([
    [undefined, null, false],
    ['foo', 'foo', true],
  ])('name を設定できる', (prop, value, hasAttributeExpected) => {
    render(() => <ScheduleNameInput name={prop} />);

    const testElement = screen.getByTestId('event-name-input');

    expect(testElement.getAttribute('name')).toBe(value);
    expect(testElement.hasAttribute('name')).toBe(hasAttributeExpected);
  });

  test.each([
    [undefined, ''],
    ['foo', 'foo'],
  ])('value を設定できる', (prop, value) => {
    render(() => <ScheduleNameInput value={prop} />);

    const testElement = screen.getByTestId('event-name-input');

    expect((testElement as HTMLInputElement).value).toBe(value);
  });

  test('handleInput が実行される', async () => {
    const handleInput = jest.fn();

    render(() => <ScheduleNameInput handleInput={handleInput} />);

    const testElement = await screen.findByTestId('event-name-input');

    fireEvent.input(testElement, {
      target: { value: '🐶' },
    });

    expect(handleInput).toHaveBeenCalledTimes(1);
  });
});
