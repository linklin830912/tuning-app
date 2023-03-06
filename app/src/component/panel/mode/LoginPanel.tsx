import React from 'react';

type loginPanelProps = {
    isLogin: boolean;
    username?: string;
    avatarUrl?: string;
}
export const LoginPanel = (props:loginPanelProps)=>{
    return (
        <>
            { props.isLogin && props.username && (
                <div>
                    <div></div>
                </div>    
            )}
            { !props.isLogin && (
                <div>
                    <img src="./user_default_icon.svg"/>
                    anonymous player
                </div>    
            )}
            
        </>
    );
}