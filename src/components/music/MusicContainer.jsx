import React from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import Music from './Music'
import {compose} from "redux";

class MusicContainer extends React.Component {
    render() {
        return (
            <Music />
        )
    }
}

let mapStateToProps = (state) => ({

});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MusicContainer);