import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

function ArmorUpdate(){
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
            })
            .catch(err=>console.log(err))
    }
    
    const updateArmor=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/armors/${id}/update`, {
            name:name,
            description:description,
            defense:defense,
            price:price
        })
            .then(res=>{
                navigate(`/armors/${id}`)
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        loadArmor();
    },[])
    return(
        <>
            <form onSubmit={updateArmor}>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <div>
                    <label>Defense:</label>
                    <input type="number" onChange={(e)=>setDefense(e.target.value)} value={defense}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
               
                <input type="submit" value="Update Armor"/>
            </form>
        </>
    )
}
export default ArmorUpdate;