import React from "react";
import "./AllUsers.css";

const AllUsers = ({ user }) => {
  const { id, name, des } = user;
  let obj = {};
  const addToCartHandle = (id) => {
    let obj;
    const getObj = localStorage.getItem("cart-items");
    if(getObj){
        obj = JSON.parse(getObj)
    }else{
        obj = {}
    }

    if (obj[id]) {
      obj[id] = obj[id] + 1;
    }else{
        obj[id] = 1;
    }

    localStorage.setItem("cart-items", JSON.stringify(obj));
  };

  const removeToCartHandle = id =>{
    const stored = localStorage.getItem("cart-items");
    if(stored){
      obj = JSON.parse(stored);
      if(id in obj){
        delete obj[id];
        localStorage.setItem("cart-items", JSON.stringify(obj));
      }
    }
  }

  return (
    <div className="user">
      <h3>id: {id}</h3>
      <h2>name: {name}</h2>
      <p>{des}</p>
      <button onClick={() => addToCartHandle(id)}>Add to cart</button>
      <button onClick={() => removeToCartHandle(id)} >Remove</button>
    </div>
  );
};

export default AllUsers;
