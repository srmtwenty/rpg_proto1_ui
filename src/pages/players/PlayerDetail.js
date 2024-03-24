import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

function PlayerDetail(){
    const [name, setName]=useState("");
    const [age, setAge]=useState(0);
    const [gender, setGender]=useState(0);
    const [maxHp, setMaxHp]=useState(0);
    const [hp, setHp]=useState(0);
    const [mp, setMp]=useState(0);
    const [maxMp, setMaxMp]=useState(0);
    const [strength, setStrength]=useState(0);
    const [defense, setDefense]=useState(0);
    const [money, setMoney]=useState(0);
    const [allArmors, setAllArmors]=useState([]);
    const [allWeapons, setAllWeapons]=useState([]);
    const [allItems, setAllItems]=useState([]);
    const [armor, setArmor]=useState(-1);
    const [weapon, setWeapon]=useState(-1);
    const [totalStrength, setTotalStrength]=useState(0);
    const [totalDefense, setTotalDefense]=useState(0);

    const [allEnemies, setAllEnemies]=useState([]);
    

    const {id}=useParams();
    const navigate=useNavigate();
    const loadPlayer=()=>{
        axios.get(`http://localhost:8080/players/${id}`)
            .then(res=>{
                setName(res.data.name)
                setAge(res.data.age)
                setGender(res.data.gender)
                setMaxHp(res.data.maxHp)
                setMaxMp(res.data.maxMp)
                setHp(res.data.hp)
                setMp(res.data.mp)
                setStrength(res.data.strength)
                setDefense(res.data.defense)
                setMoney(res.data.money)
                setArmor(res.data.armor)
                setWeapon(res.data.weapon)
                setTotalStrength(res.data.totalStrength)
                setTotalDefense(res.data.totalDefense)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    }
    const loadAllArmors=()=>{
        axios.get("http://localhost:8080/armors")
            .then(res=>{
                setAllArmors(res.data)
            })
            .catch(err=>console.log(err))
    }
    const loadAllWeapons=()=>{
        axios.get("http://localhost:8080/weapons")
            .then(res=>{
                setAllWeapons(res.data)
            })
            .catch(err=>console.log(err))
    }
    const loadAllItems=()=>{
        axios.get("http://localhost:8080/items")
            .then(res=>{
                setAllItems(res.data)
            })
            .catch(err=>console.log(err))
    }
    const loadEnemies=()=>{
        axios.get("http://localhost:8080/enemies")
            .then(res=>{
                setAllEnemies(res.data)
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        loadPlayer()
        loadAllArmors()
        loadAllWeapons()
        loadAllItems()
        loadEnemies()
    },[])


    const equipWeapon=(weaponId)=>{
        axios.put(`http://localhost:8080/players/${id}/equipW/${weaponId}`)
            .then(res=>{
                console.log("Weapon has been equipped!")
                window.location.reload();
                navigate(`http://localhost:8080/players/${id}`)
            }) 
            .catch(err=>console.log(err))
    }
    const removeWeapon=(weaponId)=>{
        axios.put(`http://localhost:8080/players/${id}/removeW/${weaponId}`)
            .then(res=>{
                console.log("Weapon has been removed!")
                window.location.reload();
                navigate(`http://localhost:8080/players/${id}`)
            }) 
            .catch(err=>console.log(err))
    }

    const equipArmor=(armorId)=>{
        axios.put(`http://localhost:8080/players/${id}/equipA/${armorId}`)
            .then(res=>{
                console.log("Armor has been equipped!")
                window.location.reload();
                navigate(`http://localhost:8080/players/${id}`)
            }) 
            .catch(err=>console.log(err))
    }
    const removeArmor=(armorId)=>{
        axios.put(`http://localhost:8080/players/${id}/removeA/${armorId}`)
            .then(res=>{
                console.log("Armor has been removed!")
                window.location.reload();
                navigate(`http://localhost:8080/players/${id}`)
            }) 
            .catch(err=>console.log(err))
    }

    const betting=()=>{
        axios.put(`http://localhost:8080/players/${id}/betting`)
            .then(res=>{
                window.location.reload();
                navigate(`http://localhost:8080/players/${id}`)
            })
    }
    
    const battle=(enemyId)=>{
        axios.put(`http://localhost:8080/players/${id}/battle/${enemyId}`)
            .then(res=>{
                window.location.reload();
                navigate(`http://localhost:8080/players/${id}`)
            })
            .catch(err=>console.log(err))
    }
    const recovery=()=>{
        axios.put(`http://localhost:8080/players/${id}/recovery`)
            .then(res=>{
                window.location.reload();
                navigate(`http://localhost:8080/players/${id}`)
            })
            .catch(err=>console.log(err))
    }
    return(
        <>
            <div style={{display:"flex", justifyContent:"flex-start"}}>
            <div style={{width:"50%", border:"blue solid 2px"}}>
                <h2>Name: {name}</h2>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>HP: {hp}/{maxHp}</p>
                <p>MP: {mp}/{maxMp}</p>
                <p>Strength: {totalStrength} 
                    ({strength} + 
                        {
                            weapon?
                            <>{weapon.strength}</>:
                            <>0</>
                        }
                    )
                </p>
                <p>Defense: {totalDefense} 
                    ({defense} + 
                        {
                            armor?    
                            <>{armor.defense}</>:
                            <>0</>
                        }
                    )
                </p>
                <p>Money: {money}</p>
                <p>Weapon: 
                    {
                        weapon?
                        <>{weapon.name} <button onClick={()=>removeWeapon(weapon.id)}>Un-Equip</button></>:
                        <>Un-equipped</>
                    }
                </p>
                <p>Armor:
                    {
                        armor?
                        <>{armor.name} <button onClick={()=>removeArmor(armor.id)}>Un-Equip</button></>:
                        <>Un-equipped</>
                    } 
                </p>
            </div>

            <div style={{border:"blue solid 2px", width:"40%"}}>
                <div>
                    <h2>Weapon List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Strength</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allWeapons.map((aw, i)=>(
                                <tr key={i}>
                                    <td>{aw.id}</td>
                                    <td>{aw.name}</td>
                                    <td>{aw.strength}</td>
                                    <td>{aw.price}</td>
                                    <td>
                                        {
                                            aw.id!=null?
                                            <button onClick={()=>equipWeapon(aw.id)}>Equip</button>
                                            :<>Equipped</>
                                        }
                                    </td>
                                </tr>    
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
                

                <div>
                <h2>Armor List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Defense</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allArmors.map((aa, i)=>(
                                <tr key={i}>
                                    <td>{aa.id}</td>
                                    <td>{aa.name}</td>
                                    <td>{aa.defense}</td>
                                    <td>{aa.price}</td>
                                    <td>  
                                        {
                                            aa.id!=null?
                                            <button onClick={()=>equipArmor(aa.id)}>Equip</button>
                                            :<>Equipped</>
                                        }
                                    </td>
                                </tr>    
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>

                <div>
                <h2>Item List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allItems.map((it, i)=>(
                                <tr key={i}>
                                    <td>{it.id}</td>
                                    <td>{it.name}</td>
                                    <td>{it.strength}</td>
                                    <td>{it.price}</td>
                                    <td></td>
                                </tr>    
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
            
            </div>

            </div>
            
            <div>
                <h2>Action:</h2>
                <div>
                    <div>
                        <button onClick={()=>betting()}>Betting(costs 200)</button>
                    </div>
                    <div>
                        <button onClick={()=>recovery()}>Full Recovery</button>
                    </div>
                </div>
                
            </div>

            <div>
                    <h2>Enemy List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>                            
                                <th>HP</th>
                                <th>MP</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allEnemies.map((enemy, i)=>(
                                <tr key={i}>
                                    <td>{enemy.id}</td>
                                    <td>{enemy.name}</td>
                                    <td>{enemy.hp}/{enemy.maxHp}</td>
                                    <td>{enemy.mp}/{enemy.maxMp}</td>
                                    <td>
                                        <button onClick={()=>battle(enemy.id)}>Battle</button>
                                    </td>
                                </tr>    
                                ))
                            }
                            
                        </tbody>
                    </table>
            </div>
        </>
    )
}
export default PlayerDetail;