import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './index';

describe('Testing the Form Component', () => {   // Testing if the data is loaded on the page
  it('Should make a good API call', () => {
    let handleApiCall = jest.fn();

    render(<Form handleApiCall={handleApiCall} />);
    let button = screen.getByText('GO!');
    expect(button).toBeInTheDocument();             
    fireEvent.click(button)                        // Fire the Event to see if the button worked
    expect(handleApiCall).toHaveBeenCalled();      //handles the API Call
  });
  it('Should Error out when a bad api call', () => {
    let handleBadApiCall = jest.fn(() => new Error('test'));

    render(<Form handleApiCall={handleBadApiCall} />);
    let button = screen.getByText('GO!');
    expect(button).toBeInTheDocument();             
    fireEvent.click(button)                        // Fire the Event to see if the button worked
    expect(handleBadApiCall).toHaveBeenCalled();      //handles the API Call
  });
});