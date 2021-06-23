import React,{useEffect, useState} from 'react';
import User from './User';
import base_url from './api/bootapi';
import axios from 'axios';
import { ToastHeader } from 'reactstrap';
import { toast } from 'react-toastify';


const AllUsers=()=>
{
    const getAllUsersFromServer=()=>
    {
        axios.get("http://localhost:8080/users").then(
            (response)=>
            {
                console.log(response);
                setUsers(response.data);
            },
            (error)=>
            {
                console.log(error);
                toast.error("server down");
            }
        );
    };

    useEffect(()=>{
        getAllUsersFromServer();
    },[]);

    const[users,setUsers]=useState(
        [
            {name:"Ajay",age:"23",city:"Pune",phone:"12345678"},
            {name:"Vijay",age:"51",city:"Pune",phone:"847545678"},
            {name:"Akshay",age:"26",city:"Pune",phone:"898757478"},
            {name:"Latika",age:"43",city:"Pune",phone:"997534598"}


        ]
    );
    return(
        <div>
            <h1 className="text-center">All users</h1>
            {users.length>0 ?
            users.map((item)=><User key={item.id} user={item}/>)
            :"No Users are registered"}
        </div>
    )

}
export default AllUsers;