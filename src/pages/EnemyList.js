import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function EnemyList(){
    const [enemies, setEnemies]=useState([])

    const loadEnemies=()=>{
        axios.get("http://localhost:8080/enemies")
            .then(res=>{
                setEnemies(res.data)
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        loadEnemies();
    }, [])
    return(
        <>
            <h2>Enemy List</h2>

            {
                enemies?
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>HP</th>
                                <th>MP</th>
                                <th>Strength</th>
                                <th>Defense</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enemies.map((enemy, index)=>(
                                    <tr key={index}>
                                        <td><Link to={`/enemies/${enemy.id}`}>{enemy.id}</Link></td>
                                        <td>{enemy.name}</td>
                                        <td>{enemy.hp}/{enemy.maxHp}</td>
                                        <td>{enemy.mp}/{enemy.maxMp}</td>
                                        <td>{enemy.strength}</td>
                                        <td>{enemy.defense}</td>
                                        <td></td>
                                    </tr>
                                ))
                                
                            }
                            
                        </tbody>
                    </table>
                
                </>:
                <>
                    <h2>Loading</h2>
                </>
            }
            <Link to="/enemies/create">Post Enemy</Link>
        </>
    )
}
export default EnemyList;