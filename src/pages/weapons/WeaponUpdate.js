import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate,useParams} from 'react-router-dom';

function WeaponUpdate(){
    const [name, setName]=useState("");
    const [description, setDescription]=useState("");
    const [strength, setStrength]=useState(0);
    const [price, setPrice]=useState(0);

    const {id}=useParams();
    const navigate=useNavigate();
    const loadWeapon=()=>{
        axios.get(`http://localhost:8080/weapons/${id}`)
            .then(res=>{
                setName(res.data.name)
                setDescription(res.data.description)
                setStrength(res.data.strength)
                setPrice(res.data.price)
        
            })
            .catch(err=>console.log(err))
    }

    const updateWeapon=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/weapons/${id}/update`, {
            name:name,
            description:description,
            strength:strength,
            price:price
        })
            .then(res=>{
                navigate(`/weapons/${id}`)
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        loadWeapon();
    },[])
    return(
        <>
            <form onSubmit={updateWeapon}>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <div>
                    <label>Strength:</label>
                    <input type="number" onChange={(e)=>setStrength(e.target.value)} value={strength}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
               
                <input type="submit" value="Update Weapon"/>
            </form>
        </>
    )
}
export default WeaponUpdate;