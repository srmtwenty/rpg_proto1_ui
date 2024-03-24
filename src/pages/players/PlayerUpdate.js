import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

function PlayerUpdate(){
    const [name, setName]=useState("");
    const [age, setAge]=useState(0);
    const [maxHp, setMaxHp]=useState(0);
    const [maxMp, setMaxMp]=useState(0);

    const [strength, setStrength]=useState(0);
    const [defense, setDefense]=useState(0);
    const [money, setMoney]=useState(0);
    const [gender, setGender]=useState(0);

    const navigate=useNavigate();
    const {id}=useParams();
    const updatePlayer=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/players/${id}/update`, {
            name:name,
            age:age,
            gender:gender,
            maxHp:maxHp,
            hp:maxHp,
            maxMp:maxMp,
            mp:maxMp,
            strength:strength,
            defense:defense,
            money:money
        })
            .then(res=>{
                navigate(`/players/${id}`)
            })
            .catch(err=>console.log(err))
    }

    const loadPlayer=()=>{
        axios.get(`http://localhost:8080/players/${id}`)
            .then(res=>{
                setName(res.data.name)
                setAge(res.data.age)
                setGender(res.data.gender)
                setMaxHp(res.data.maxHp)
                setMaxMp(res.data.maxMp)
             
                setStrength(res.data.strength)
                setDefense(res.data.defense)
                setMoney(res.data.money)
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        loadPlayer();
    },[])
    return(
        <>
            <form onSubmit={updatePlayer}>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" onChange={(e)=>setAge(e.target.value)} value={age}/>
                </div>
                <div>
                    <label>Gender:</label>
                    <select id="gender" name="gender" onChange={(e)=>setGender(e.target.value)}>
                        <option value={0}>Male</option>
                        <option value={1}>Female</option>
                    </select>
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
                <input type="submit" value="Update Player"/>
            </form>
            
        
        </>
    )
}
export default PlayerUpdate;