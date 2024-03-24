import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function ArmorList(){
    const [armors, setArmors]=useState([])

    const loadArmor=()=>{
        axios.get("http://localhost:8080/armors")
            .then(res=>{
                setArmors(res.data)
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        loadArmor();
    }, [])
    return(
        <>
            <h2>Armor List</h2>

            {
                armors?
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Defense</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                armors.map((armor, index)=>(
                                    <tr key={index}>
                                        <td>{armor.name}</td>
                                        <td>{armor.defense}</td>
                                        <td>{armor.price}</td>
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
            <Link to="/armors/create">Post Armor</Link>
        </>
    )
}
export default ArmorList;