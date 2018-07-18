import React from 'react';
import Home from './../components/Home/Home';
import { shallow } from 'enzyme';

it('renders', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('button').value()).toEqual('Open Modal');
});