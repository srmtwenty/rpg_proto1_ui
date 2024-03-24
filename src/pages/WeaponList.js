import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function WeaponList(){
    const [weapons, setWeapons]=useState([])

    const loadWeapons=()=>{
        axios.get("http://localhost:8080/weapons")
            .then(res=>{
                setWeapons(res.data)
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        loadWeapons();
    }, [])
    return(
        <>
            <h2>Weapon List</h2>

            {
                weapons?
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Strength</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                weapons.map((weapon, index)=>(
                                    <tr key={index}>
                                        <td>{weapon.name}</td>
                                        <td>{weapon.strength}</td>
                                        <td>{weapon.price}</td>
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
            <Link to="/weapons/create">Post Weapon</Link>
        </>
    )
}
export default WeaponList;