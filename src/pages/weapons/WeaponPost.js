import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function WeaponPost(){
    const [name, setName]=useState("");
    const [description, setDescription]=useState("");
    const [strength, setStrength]=useState(0);
    const [price, setPrice]=useState(0);

    const navigate=useNavigate();
    const createWeapon=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/weapons/create", {
            name:name,
            description:description,
            strength:strength,
            price:price
        })
            .then(res=>{
                navigate("/weapons")
            })
            .catch(err=>console.log(err))
    }

    return(
        <>
            <form onSubmit={createWeapon}>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div>
                    <label>Strength:</label>
                    <input type="number" onChange={(e)=>setStrength(e.target.value)}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)}/>
                </div>
               
                <input type="submit" value="Create Strength"/>
            </form>
        </>
    )
}
export default WeaponPost;