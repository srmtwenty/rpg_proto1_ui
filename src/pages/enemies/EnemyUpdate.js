import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

function EnemyUpdate(){
    const [name, setName]=useState("");
    const [maxHp, setMaxHp]=useState(0);
    const [maxMp, setMaxMp]=useState(0);
    const [hp, setHp]=useState(0);
    const [mp, setMp]=useState(0);
    const [strength, setStrength]=useState(0);
    const [defense, setDefense]=useState(0);
    const [money, setMoney]=useState(0);
    const [description, setDescription]=useState("");

    const {id}=useParams();
    const navigate=useNavigate();

    const loadEnemy=()=>{
        axios.get(`http://localhost:8080/enemies/${id}`)
            .then(res=>{
                setName(res.data.name)
                setMaxHp(res.data.maxHp)
                setMaxMp(res.data.maxMp)
                setHp(res.data.hp)
                setMp(res.data.mp)
                setStrength(res.data.strength)
                setDefense(res.data.defense)
                setMoney(res.data.money)
                setDescription(res.data.description)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
        
    }
    useEffect(()=>{
        loadEnemy();
    },[])
    const updateEnemy=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/enemies/${id}/update`, {
            name:name,
            maxHp:maxHp,
            hp:maxHp,
            maxMp:maxMp,
            mp:maxMp,
            strength:strength,
            defense:defense,
            money:money,
            description:description
        })
            .then(res=>{
                navigate("/enemies")
            })
            .catch(err=>console.log(err))
    }

    return(
        <>
            <form onSubmit={updateEnemy}>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                
                <div>
                    <label>Max Hp:</label>
                    <input type="number" onChange={(e)=>setMaxHp(e.target.value)} value={maxHp}/>
                </div>
                <div>
                    <label>Max Mp:</label>
                    <input type="number" onChange={(e)=>setMaxMp(e.target.value)} value={maxMp}/>
                </div>
                <div>
                    <label>Strength:</label>
                    <input type="number" onChange={(e)=>setStrength(e.target.value)} value={strength}/>
                </div>
                <div>
                    <label>Defense:</label>
                    <input type="number" onChange={(e)=>setDefense(e.target.value)} value={defense}/>
                </div>
                <div>
                    <label>Money:</label>
                    <input type="number" onChange={(e)=>setMoney(e.target.value)} value={money}/>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <input type="submit" value="Update Enemy"/>
            </form>  
        </>
    )
}
export default EnemyUpdate;