import '@testing-library/jest-dom/extend-expect';
import { render } from 'solid-testing-library';
import { Heading } from './Heading';

describe('Heading component', () => {
  test('should render in the browser', () => {
    const headingTextContent = 'Hello.';

    const { getByText } = render(() => (
      <Heading textContent={headingTextContent} />
    ));

    expect(getByText(headingTextContent)).toBeInTheDocument();
  });
});
