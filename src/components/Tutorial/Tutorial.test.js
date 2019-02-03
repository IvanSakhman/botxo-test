import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';

import {
    CHANGE_COLOR,
    CHANGE_ACTIVE_TAB,
    INCREMENT_ACTIVE_TAB,
    changeColor,
    changeActiveTab,
    incrementActiveTab
} from '../../actions/tutorialActions';

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
        ],
        activeTab: '1'
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
    });

    it('equal changeActiveTab action CHANGE_ACTIVE_TAB', () => {
        let action;
        store.dispatch(changeActiveTab(3));
        action = store.getActions();

        expect(action[0].type).equal('CHANGE_ACTIVE_TAB');
    });

    it('should show circle tab', () => {
        store.dispatch(changeActiveTab(2));
        const wrapper = shallow(<Tutorial
            store={store}
            handleClose={() => {}}
        />).dive();

        expect(wrapper.find('.circle')).to.have.length(1);
    });

    it('equal incrementActiveTab action INCREMENT_ACTIVE_TAB', () => {
        let action;
        store.dispatch(incrementActiveTab());
        action = store.getActions();

        expect(action[2].type).equal('INCREMENT_ACTIVE_TAB');
    });

    it('equal changeColor action CHANGE_COLOR', () => {
        let action;
        store.dispatch(changeColor({ itemIndex: 3, color: 'green' }));
        action = store.getActions();

        expect(action[3].type).equal('CHANGE_COLOR');
    });

    it('should show square yellow tab', () => {
        store.dispatch(changeColor({ itemIndex: 4, color: 'yellow' }));
        const wrapper = shallow(<Tutorial
            store={store}
            handleClose={() => {}}
        />).dive();

        expect(wrapper.find('.circle')).to.have.length(1);
    });
});