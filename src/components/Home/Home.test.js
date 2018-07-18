import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'

import Home from './Home'

describe('Home', () => {
    it('should render text', () => {
        const wrapper = render(<Home />);

        expect(wrapper).to.have.text('Open modal')
    })
})