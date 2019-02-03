import { CHANGE_COLOR, CHANGE_ACTIVE_TAB, INCREMENT_ACTIVE_TAB } from '../actions/tutorialActions';

const initialState = {
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
};

export default function tutorial(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            const { tabsContent } = state;
            const { itemIndex, color } = action.payload;
            const activeColor = { activeColor: color };

            return {
                ...state,
                tabsContent: [
                    ...tabsContent.slice(0, itemIndex),
                    activeColor,
                    ...tabsContent.slice(itemIndex),

                ]
            };
        case CHANGE_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.payload
            };
        case INCREMENT_ACTIVE_TAB:
            return {
                ...state,
                activeTab: (+state.activeTab + 1).toString()
            };
        default:
            return state;
    }
}
