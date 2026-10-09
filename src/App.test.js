import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio sections', () => {
  render(<App />);
  expect(screen.getByText(/some projects I've built/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
});
