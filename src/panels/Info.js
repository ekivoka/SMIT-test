import React from 'react';
import connect from '@vkontakte/vk-connect';
import Spinner from '../components/spinner/Spinner';



class Info extends React.Component {
    
    state = {
        fetchedUser: null,
        loading: true,
    }

    componentDidMount () {
         setTimeout(
            this.getUserInfo, 1500
         )
    }

    getUserInfo = () =>{
        connect.send("VKWebAppGetUserInfo", {}).then(e => {
            console.log(2)
            this.setState({
                fetchedUser: e,
                loading: false
            })
        })
    }
    
    render() {

        const {loading} = this.state;

        if (loading) return (
            <Spinner/>
        )

        return (
            <div>info</div>
        )
    }
}
export default Info;