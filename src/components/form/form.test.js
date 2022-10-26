import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from './index';

describe('Testing the Form Component', () => {
  it('should render the form', () => {
    let handleApiCall = jest.fn();

    render(<Form handleApiCall={handleApiCall} />);
    let method = screen.getByText('GET');
    expect(method).toBeInTheDocument();
  });
  
});