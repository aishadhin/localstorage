import React from 'react';
import AllUsers from '../AllUsers/AllUsers';
import './Data.css'

const Data = () => {

    const users = [
        {id :'57yugu8456' , name:'Shadhin1', des:'hi hello how are you'},
        {id :'r5676tuhuk' , name:'Shadhin2', des:'hi hello how are you'},
        {id :'ui767gv345' , name:'Shadhin3', des:'hi hello how are you'}
    ]

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div className='users'>
                {
                    users.map(user => <AllUsers key={user.id} user={user}></AllUsers>)
                }
            </div>
        </div>
    );
};

export default Data;