import { connect } from 'react-redux';
import Tutorial from './Tutorial';

import { changeColor} from '../../actions/homeActions';

const mapStateToProps = state => ({
    tabsContent: state.home.tabsContent
});

const mapDispatchToProps = dispatch => ({
    changeColor: (data) => {
        dispatch(changeColor(data));
    }
});

const TutorialContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tutorial);

export default TutorialContainer;


