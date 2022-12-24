import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('first', () => {
    render(<App />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
