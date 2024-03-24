import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function EnemyPost(){
    const [name, setName]=useState("");
    const [maxHp, setMaxHp]=useState(0);
    const [maxMp, setMaxMp]=useState(0);
    const [strength, setStrength]=useState(0);
    const [defense, setDefense]=useState(0);
    const [money, setMoney]=useState(0);
    const [description, setDescription]=useState("");

    const navigate=useNavigate();
    const createEnemy=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/enemies/create", {
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
            <form onSubmit={createEnemy}>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </div>
                
                <div>
                    <label>Max Hp:</label>
                    <input type="number" onChange={(e)=>setMaxHp(e.target.value)}/>
                </div>
                <div>
                    <label>Max Mp:</label>
                    <input type="number" onChange={(e)=>setMaxMp(e.target.value)}/>
                </div>
                <div>
                    <label>Strength:</label>
                    <input type="number" onChange={(e)=>setStrength(e.target.value)}/>
                </div>
                <div>
                    <label>Defense:</label>
                    <input type="number" onChange={(e)=>setDefense(e.target.value)}/>
                </div>
                <div>
                    <label>Money:</label>
                    <input type="number" onChange={(e)=>setMoney(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <input type="submit" value="Create Enemy"/>
            </form>
            
        
        </>
    )
}
export default EnemyPost;