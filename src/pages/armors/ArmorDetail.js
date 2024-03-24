import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

function ArmorDetail(){
    const [name, setName]=useState("");
    const [description, setDescription]=useState("");
    const [defense, setDefense]=useState(0);
    const [price, setPrice]=useState(0);

    const {id}=useParams();
    const navigate=useNavigate();
    const loadArmor=()=>{
        axios.get(`http://localhost:8080/armors/${id}`)
            .then(res=>{
                setName(res.data.name)
                
                setDescription(res.data.description)
                setDefense(res.data.defense)
                setPrice(res.data.price)
                navigate(`/armors/${id}`)
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        loadArmor()
    },[])
    return(
        <>
            <h2>Name: {name}</h2>
            
            <p>Description: {description}</p>
            <p>Defense: {defense}</p>
            <p>Price: {price}</p>
        </>
    )
}
export default ArmorDetail;