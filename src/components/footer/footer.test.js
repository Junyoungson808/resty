import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Testing the Form Component', () => {
  it('should render the Footer', () => {
    render(<Footer/>);
    let footerContent = screen.getByText('© Junyoung Son 2022');
    expect(footerContent).toBeInTheDocument();
  });
});