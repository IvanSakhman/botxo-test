import { connect } from 'react-redux';
import Tutorial from './Tutorial';

import { changeColor, changeActiveTab, incrementActiveTab } from '../../actions/tutorialActions';

const mapStateToProps = state => ({
    tabsContent: state.tutorial.tabsContent,
    activeTab: state.tutorial.activeTab
});

const mapDispatchToProps = dispatch => ({
    changeColor: (data) => {
        dispatch(changeColor(data));
    },
    changeActiveTab: (data) => {
        dispatch(changeActiveTab(data));
    },
    incrementActiveTab: (data) => {
        dispatch(incrementActiveTab(data));
    }
});



const TutorialContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tutorial);

export default TutorialContainer;


