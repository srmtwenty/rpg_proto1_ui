import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function PlayerPost(){
    const [name, setName]=useState("");
    const [age, setAge]=useState(0);
    const [maxHp, setMaxHp]=useState(0);
    const [maxMp, setMaxMp]=useState(0);
    const [strength, setStrength]=useState(0);
    const [defense, setDefense]=useState(0);
    const [money, setMoney]=useState(0);
    const [gender, setGender]=useState(0);


    const navigate=useNavigate();
    const createPlayer=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/players/create", {
            name:name,
            age:age,
            maxHp:maxHp,
            hp:maxHp,
            maxMp:maxMp,
            mp:maxMp,
            strength:strength,
            defense:defense,
            money:money,
            gender:gender,
            totalStrength:strength,
            totalDefense:defense
        })
            .then(res=>{
                navigate("/players")
            })
            .catch(err=>console.log(err))
    }

    return(
        <>
            <form onSubmit={createPlayer}>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" onChange={(e)=>setAge(e.target.value)}/>
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
                <input type="submit" value="Create Player"/>
            </form>
            
        
        </>
    )
}
export default PlayerPost;