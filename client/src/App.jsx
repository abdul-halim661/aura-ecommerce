import { useState, useEffect } from 'react'

export default function App(){
  const [products, setProducts] = useState([])
  
  useEffect(()=>{
    fetch('https://aura-ecommerce-ww1b.onrender.com/api/products')
    .then(r=>r.json())
    .then(d=>setProducts(d))
  },[])

  return (
    <div style={{minHeight:'100vh', background:'#f5f5f5', fontFamily:'system-ui'}}>
      {/* Navbar */}
      <nav style={{background:'black', color:'white', padding:'16px 24px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1 style={{fontSize:'24px', fontWeight:'900', letterSpacing:'2px'}}>AURA.</h1>
        <div style={{display:'flex', gap:'20px', fontSize:'14px'}}>SHOP | CART (0)</div>
      </nav>

      {/* Hero */}
      <div style={{padding:'40px 24px', textAlign:'center'}}>
        <h2 style={{fontSize:'36px', fontWeight:'800'}}>NEW DROP</h2>
        <p style={{color:'#666', marginTop:'8px'}}>Streetwear Essentials</p>
      </div>

      {/* Products Grid */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(160px, 1fr))', gap:'16px', padding:'0 16px 40px', maxWidth:'1000px', margin:'0 auto'}}>
        {products.length===0 ? <p style={{gridColumn:'1/-1', textAlign:'center', padding:'40px'}}>Loading products...</p> :
          products.map(item=>(
            <div key={item.id} style={{background:'white', borderRadius:'12px', overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>
              <img src={item.image} style={{width:'100%', height:'200px', objectFit:'cover'}} alt={item.name}/>
              <div style={{padding:'12px'}}>
                <h3 style={{fontSize:'14px', fontWeight:'600', marginBottom:'4px'}}>{item.name}</h3>
                <p style={{fontSize:'13px', color:'#888'}}>In Stock</p>
                <p style={{fontSize:'16px', fontWeight:'700', marginTop:'8px'}}>৳{item.price}</p>
                <button style={{width:'100%', marginTop:'10px', background:'black', color:'white', border:'none', padding:'8px', borderRadius:'8px', fontSize:'13px', fontWeight:'600'}}>ADD TO CART</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
