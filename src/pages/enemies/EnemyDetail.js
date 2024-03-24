import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

function EnemyDetail(){
    const [name, setName]=useState("");

    const [maxHp, setMaxHp]=useState(0);
    const [hp, setHp]=useState(0);
    const [mp, setMp]=useState(0);
    const [maxMp, setMaxMp]=useState(0);
    
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
    return(
        <>
            <div>
                <h2>Name: {name}</h2>
                <p>HP: {hp}/{maxHp}</p>
                <p>MP: {mp}/{maxMp}</p>
                <p>Strength: {strength} </p>
                <p>Defense: {defense} </p>
                <p>Money: {money}</p>
                <p>Description: {description}</p>
            </div>
        </>
    )
}
export default EnemyDetail;