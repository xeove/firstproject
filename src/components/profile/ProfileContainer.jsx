import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = (props) => {


    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = props.id
            if (!userId) {
                props.history.push("/login")
            }
        }
        props.getUserProfile(userId)
        props.getUserStatus(userId)
    }, [props.userId]);

    return (
        <Profile {...props} userProfile={props.userProfile} status={props.status}
                 updateUserStatus={props.updateUserStatus}/>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userProfile: state.profilePage.userProfile,
    id: state.auth.id,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer);