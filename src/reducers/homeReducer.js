import { CHANGE_COLOR } from './../actions/homeActions';

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
    ]
};

export default function tutorial(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            const { tabsContent } = state;
            const { itemIndex, color } = action.payload;

            tabsContent[itemIndex].activeColor = color;

            return {
                ...state,
                tabsContent
            };
        default:
            return state;
    }
}
