import React from "react";
const ini =[
    {
        id:"1",
        username:"jay",
        password:"98799879",
    },
    {
        id:"2",
        username:"rahul",
        password:"98799879",
    },
];

const log_check = (state = { logs: ini }, action) =>{
    return state;
}

export default log_check;