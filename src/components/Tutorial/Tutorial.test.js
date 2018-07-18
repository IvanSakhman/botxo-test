import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai'

Enzyme.configure({ adapter: new Adapter() });
import Tutorial from './TutorialContainer';

const initialState = {
    tutorial: {
        tabsContent: [
            {
                activeColor: 'red',
            },
            {
                activeColor: 'red',
            },
            {
                activeColor: 'red',
            },
            {
                activeColor: 'red',
            },
            {
                activeColor: 'red',
            },
        ]
    }
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore(initialState);

describe('<Tutorial />', () => {
    it('should render Open modal', () => {
        const wrapper = shallow(<Tutorial
            store={store}
            handleClose={() => {}}
        />).dive();

        expect(wrapper).to.have.lengthOf(1);
    })
});