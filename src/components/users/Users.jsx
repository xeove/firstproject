import React from 'react';
import styles from './Users.module.css';
import Paginator from "./Paginator";
import User from "./User";

let Users = (props) => {

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}

            />
            <div className={styles.userBlock}>
                {
                    props.usersData.map(u => <User user={u}
                                                   key={u.id}
                                                   follow={props.follow}
                                                   unfollow={props.unfollow}
                                                   isFollowing={props.isFollowing}/>)
                }
            </div>
        </div>
    )
};

export default Users;