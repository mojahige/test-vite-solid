import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from 'solid-testing-library';
import { EventNameInput } from './EventNameInput';

describe('EventNameInput component', () => {
  test('コンポーネントが描画される', () => {
    render(() => <EventNameInput />);

    expect(screen.getByTestId('event-name-input')).toBeInTheDocument();
  });

  test.each([
    [undefined, null, false],
    ['foo', 'foo', true],
  ])('placeholder を設定できる', (prop, value, hasAttributeExpected) => {
    render(() => <EventNameInput placeholder={prop} />);

    const testElement = screen.getByTestId('event-name-input');

    expect(testElement.getAttribute('placeholder')).toBe(value);
    expect(testElement.hasAttribute('placeholder')).toBe(hasAttributeExpected);
  });

  test.each([
    [undefined, null, false],
    ['foo', 'foo', true],
  ])('name を設定できる', (prop, value, hasAttributeExpected) => {
    render(() => <EventNameInput name={prop} />);

    const testElement = screen.getByTestId('event-name-input');

    expect(testElement.getAttribute('name')).toBe(value);
    expect(testElement.hasAttribute('name')).toBe(hasAttributeExpected);
  });

  test.each([
    [undefined, ''],
    ['foo', 'foo'],
  ])('value を設定できる', (prop, value) => {
    render(() => <EventNameInput value={prop} />);

    const testElement = screen.getByTestId('event-name-input');

    expect((testElement as HTMLInputElement).value).toBe(value);
  });

  test('handleInput が実行される', async () => {
    const handleInput = jest.fn();

    render(() => <EventNameInput handleInput={handleInput} />);

    const testElement = await screen.findByTestId('event-name-input');

    fireEvent.input(testElement, {
      target: { value: '🐶' },
    });

    expect(handleInput).toHaveBeenCalledTimes(1);
  });
});
