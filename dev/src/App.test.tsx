import { render, screen } from 'solid-testing-library'
import App from './App'

describe('Test the browser', () => {
  test('should render in the browser', () => {
    render(() => <App />)

    expect(screen.getByTestId('foo').tagName.toLowerCase()).toBe('div')
  })
})
