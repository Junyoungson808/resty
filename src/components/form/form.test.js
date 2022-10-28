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
  it('calls the handleApi function with expected parameters', () => {
    let expectedParams = {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon',
      data: 'some test json',
    };

    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    let getSpan = screen.getByText('GET');
    let textArea = screen.getByTestId('form-text-area');
    let urlInput = screen.getByTestId('form-url');
    
    fireEvent.click(getSpan);
    fireEvent.change(textArea, {target: {value: 'some test json'}});
    fireEvent.change(urlInput, {target: {value: 'https://pokeapi.co/api/v2/pokemon'}});
    let button = screen.getByText('GO!');
    fireEvent.click(button);

  });
});