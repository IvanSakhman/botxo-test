import React from 'react'
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { expect } from 'chai'

Enzyme.configure({ adapter: new Adapter() });

import Home from './Home';

describe('<Home />', () => {
    it('should render text', () => {
        const wrapper = render(<Home />);

        expect(wrapper).to.have.lengthOf(1);
    })
});