// import necessary react testing library helpers here
// import the Counter component here
import Counter from '../components/Counter';
import { render, fireEvent ,screen } from '@testing-library/react';

const counter = () => render(<Counter />);

beforeEach(() => {
});

test('renders counter message', () => {
  counter();
});

test('should render initial count with value of 0', () => {
  counter();
  const countElement = screen.getByTestId('count');
  expect(countElement).toBeInTheDocument();
  expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  counter();
  const countElement = screen.getByTestId('count');
  const plusButton = screen.getByText('+');
  fireEvent.click(plusButton);
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  counter();
  const countElement = screen.getByTestId('count');
  const minusButton = screen.getByText('-');
  fireEvent.click(minusButton);
  expect(countElement.textContent).toBe('-1');
});
