export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
export const INCREMENT_ACTIVE_TAB = 'INCREMENT_ACTIVE_TAB';

export const changeColor = (data) => ({
    type: CHANGE_COLOR,
    payload: data
});

export const changeActiveTab = (data) => ({
    type: CHANGE_ACTIVE_TAB,
    payload: data
});

export const incrementActiveTab = (data) => ({
    type: INCREMENT_ACTIVE_TAB,
    payload: data
});