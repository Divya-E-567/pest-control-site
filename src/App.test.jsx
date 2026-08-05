import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the pest control hero headline', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /best pest control company in kochi/i });
  expect(heading).toBeInTheDocument();
});
