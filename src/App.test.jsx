import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

test('renders the pest control hero headline', async () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );

  const heading = await screen.findByRole('heading', { name: /best pest control company in kochi/i });
  expect(heading).toBeInTheDocument();
});
