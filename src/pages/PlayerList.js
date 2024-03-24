import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './style.css'
function PlayerList(){
    const [players, setPlayers]=useState([])

    const loadPlayer=()=>{
        axios.get("http://localhost:8080/players")
            .then(res=>{
                setPlayers(res.data)
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        loadPlayer();
    }, [])
    return(
        <>
            <h2>Player List</h2>

            {
                players?
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>HP</th>
                                <th>MP</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                players.map((player, index)=>(
                                    <tr key={index}>
                                        <td><Link to={`/players/${player.id}`}>{player.id}</Link></td>
                                        <td>{player.name}</td>
                                        <td>{player.age}</td>
                                        <td>{player.hp}/{player.maxHp}</td>
                                        <td>{player.mp}/{player.maxMp}</td>
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
            <Link to="/players/create">Post Player</Link>
        </>
    )
}
export default PlayerList;