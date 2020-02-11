import React from 'react';
import connect from '@vkontakte/vk-connect';
import './button-share-wall.css'

class ButtonShareWall extends React.Component {

    onShare = () =>{
        connect.send("VKWebAppShowWallPostBox", {"message": "https://vk.com/app7311872"});
    }

    render() {
    
        return (
            <div className="button-share-wall" onClick = {this.onShare}>
               ПОДЕЛИТЬСЯ
            </div>
        )
    }
}

export default ButtonShareWall;