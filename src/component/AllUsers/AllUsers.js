import React from 'react';
import './AllUsers.css'

const AllUsers = ({user}) => {
    const {id, name, des} = user;

    const addToCartHandle = id => {
        
        if(localStorage.getItem(id)){
            // const newQuantity = localStorage.getItem(id) + 1;
            localStorage.setItem(id ,parseInt(localStorage.getItem(id)) + 1)
        }else{
            localStorage.setItem(id , 1);
        }
    }
    return (
        <div className='user'>
            <h3>id: {id}</h3>
            <h2>name: {name}</h2>
            <p>{des}</p>
            <button onClick={() => addToCartHandle(id)}>Add to cart</button>
            <button>Remove</button>
        </div>
    );
};

export default AllUsers;