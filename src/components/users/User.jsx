import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import {NavLink} from "react-router-dom";

let User = (props) => {

    let user = props.u;

    return (
        <div>
            <div className={styles.user}>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {props.user.followed
                        ?
                        <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                            props.unfollow(props.user.id)
                        }} className={styles.unfollow}> unfollow </button>
                        :
                        <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                            props.follow(props.user.id)
                        }} className={styles.follow}> follow </button>
                    }
                </div>
            </div>
            <span className={styles.userAbout}>
                                <span>
                                    <span>{props.user.name} </span>
                                    <span>{props.user.status}</span>
                                </span>
                                <span className={styles.location}>
                                    <div>{'user.location.city'}</div>
                                    <div>{'user.location.country'}</div>a
                                </span>
                            </span>
        </div>
    )
};

export default User;