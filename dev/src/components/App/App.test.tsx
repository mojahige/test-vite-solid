import { render, screen } from 'solid-testing-library';
import { App } from './App';

describe('App component', () => {
  test('コンポーネントが描画される', () => {
    render(() => <App />);

    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
