import React from 'react';
import Preloader from "../../common/Preloader";
import styles from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <h1> {props.userProfile.fullName} </h1>
                <div className={styles.userInfo}>
                    <img src={props.userProfile.photos.small}/>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                <h2>contacts</h2>
                <div className={styles.userContacts}>
                    <span> {props.userProfile.contacts.facebook} </span>
                    <span> {props.userProfile.contacts.vk} </span>
                    <span> {props.userProfile.contacts.instagram} </span>
                </div>
                <h2>jobStatus</h2>
                <div className={styles.userJobStatus}>
                    <span> {props.userProfile.lookingForAJob ? 'i have a job' : 'i dont have a job'} </span>
                    <span> {props.userProfile.lookingForAJobDescription} </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;