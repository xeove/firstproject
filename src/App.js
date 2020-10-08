import React, {useEffect} from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import News from "./components/news/News";
import Music from "./components/music/MusicContainer";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {initialize} from "./redux/appReducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader";
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(() => import ("./components/dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import ("./components/profile/ProfileContainer"));

const App = (props) => {

        useEffect( () => {
            props.initialize()
        }, [props.initialized])

        if (!props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar id={props.id}/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <ProfileContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initialize}))(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default MainApp;