import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Results from './index';

describe('Testing the result component', () => {
  it('should render the Result', () => {
    let data = { 
      pokemon: 'batman',
      power: 'ranger',
    };

    render(<Results data={data} />);
    let preTest = screen.getByTestId('result-pre-test');
    expect(preTest).toHaveTextContent('batman');
  });
});