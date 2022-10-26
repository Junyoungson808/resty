import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../app';


describe('Testing the Form Component', () => {
  it('should render the form', () => {
    render(<App />);
    let getSpan = screen.getByTestId('get-test');
    fireEvent.click(getSpan);
    let preTest = screen.getByTestId('result-pre-test');

    expect(preTest).toHaveTextContent('bulbasaur');
  });

});