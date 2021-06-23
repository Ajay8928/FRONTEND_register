import React, { useState } from 'react';
import { Container,Button,Form,FormGroup,Input,Fragment} from 'reactstrap';
import axios from "axios";

const AddUser=()=>
{

    const [user,setUser]=useState({});

    const handleform=(e)=>
    {
         console.log(user);
         postDataServer(user)
        // e.preventDefault();
    }

    const postDataServer=(data)=>
    {
       axios.post("http://localhost:8080/users",data).then(
           (response)=>
           {
               console.log(response);
           },(error)=>
           {
               console.log(error);
           }
       )
    }
    return(
        
        <div>
            <h1 className="text-center my-3">Register Here</h1>
            <Form onSubmit={handleform}>
                <FormGroup>
                    <label>Name:</label>
                    <Input type="text" placeholder="Enter here"
                    name="username"
                    id="user" onChange={(e)=>
                    {
                        setUser({...user,user:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label>Age:</label>
                    <Input type="text" placeholder="Enter here"
                    name="age"
                    id="age" onChange={(e)=>
                        {
                            setUser({...user,age:e.target.value});
                        }}/>
                </FormGroup>
                <FormGroup>
                    <label>City:</label>
                    <Input type="text" placeholder="Enter here"
                    name="city"
                    id="city" onChange={(e)=>
                        {
                            setUser({...user,city:e.target.value});
                        }}/>
                </FormGroup>
                <FormGroup>
                    <label>Phone:</label>
                    <Input type="text" placeholder="Enter here"
                    name="phone"
                    id="phone" onChange={(e)=>
                        {
                            setUser({...user,phone:e.target.value});
                        }}/>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success" style={{marginRight:"8px",marginTop:"8px"}}>Register</Button>
                    <Button type="reset" color="warning"style={{marginRight:"8px",marginTop:"8px"}}>Clear</Button>
                </Container>
                

            </Form>
        </div>
        

    );
}
export default AddUser;