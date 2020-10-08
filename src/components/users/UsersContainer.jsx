import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {follow, requestUsers, setUsers, toggleIsFollowing} from "../../redux/usersPageReducer";
import {unfollow} from "../../redux/usersPageReducer";
import {setCurrentPage} from "../../redux/usersPageReducer";
import {setUsersTotalCount} from "../../redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowing} from "../../redux/usersSelector";


const UsersContainer = (props) => {

    useEffect( () => {
        props.requestUsers(props.currentPage, props.pageSize)
    }, [])

    let onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize)
    }

        return <>
            {props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={props.totalUsersCount}
                   pagesCount={props.pagesCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={onPageChanged}
                   usersData={props.usersData}
                   follow={props.follow}
                   unfollow={props.unfollow}
                   isFollowing={props.isFollowing}
            />
        </>
}


let mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)

    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    requestUsers
})(UsersContainer);