import userEvent from '@testing-library/user-event';
import { render, screen } from '@/test/test-utils';
import SwitchLanguageToggle from './SwitchLanguageToggle';

describe('switch language buttons change language and disabled after click', () => {
  test('should language change to english', async () => {
    render(<SwitchLanguageToggle />);
    const enBtn = screen.getByRole('button', { name: 'EN' });
    await userEvent.click(enBtn).then(() => {
      expect(enBtn).toBeDisabled();
    });
  });
  test('should language change to farsi', async () => {
    render(<SwitchLanguageToggle />);
    const faBtn = screen.getByRole('button', { name: 'FA' });
    await userEvent.click(faBtn).then(() => {
      expect(faBtn).toBeDisabled();
    });
  });
});
