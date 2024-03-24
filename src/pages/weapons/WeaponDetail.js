import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

function WeaponDetail(){
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
    useEffect(()=>{
        loadWeapon()
    },[])
    return(
        <>
            <h2>Name: {name}</h2>
            
            <p>Description: {description}</p>
            <p>Strength: {strength}</p>
            <p>Price: {price}</p>
        </>
    )
}
export default WeaponDetail;