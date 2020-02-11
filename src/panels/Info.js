import React from 'react';
import connect from '@vkontakte/vk-connect';
import Spinner from '../components/spinner';
import ButtonShareWall from '../components/button-share-wall'
import './info.css'

class Info extends React.Component {

    render() {
        return (
            <div className="info-panel-wrapper">
                <div>
                    <img src={this.props.userPhoto}></img>
                    <p className = 'user-name'>{this.props.userName}</p>
                    <p className = 'user-lastname'>{this.props.userSurname}</p>
                </div>
                <ButtonShareWall/>
            </div>
        )
    }
}

class InfoContainer extends React.Component {
    
    state = {
        fetchedUser: null,
        loading: true,
    }

    componentDidMount () {
         setTimeout(
            this.getUserInfo, 1200
         )
    }

    getUserInfo = () =>{
        connect.send("VKWebAppGetUserInfo", {}).then(e => {
            this.setState({
                fetchedUser: e,
                loading: false
            })
        })
    }
    
    render() {

        const {loading, fetchedUser} = this.state;

        if (loading) return (
            <Spinner/>
        )

        return (
            <Info 
            userPhoto={fetchedUser.photo_200} 
            userName={fetchedUser.first_name} 
            userSurname={fetchedUser.last_name}
            />
        )
    }
}
export default InfoContainer;