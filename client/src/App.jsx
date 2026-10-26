import { useState, useEffect } from 'react'
export default function App(){
  const [p,setP]=useState([])
  useEffect(()=>{fetch('https://aura-ecommerce-ww1b.onrender.com/api/products').then(r=>r.json()).then(d=>setP(d))},[])
  return(<div style={{background:'black',color:'white',padding:20}}><h1>AURA.STORE</h1>{p.length===0?'Loading...':p.map(x=><div key={x.id}><img src={x.image} width='100'/><h3>{x.name} - ${x.price}</h3></div>)}</div>)
}
