import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import WebsiteCarbonBadge from '../WebsiteCarbonBadge';

describe('Running Test for WebsiteCarbonBadge', () => {
  it('renders the component', () => {
    render(<WebsiteCarbonBadge />);
  });
});
