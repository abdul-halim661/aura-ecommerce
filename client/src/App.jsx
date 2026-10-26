import { useState } from 'react'
const PRODUCTS = [
  {id:1, name:'Oversized Hoodie', price:2850, img:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', badge:'HOT', col:'#FF6B6B'},
  {id:2, name:'Cargo Pants', price:3200, img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400', badge:'NEW', col:'#4ECDC4'},
  {id:3, name:'Street Tee', price:1500, img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', badge:'SALE', col:'#45B7D1'},
  {id:4, name:'Denim Jacket', price:4500, img:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400', badge:'TREND', col:'#96CEB4'},
  {id:5, name:'Sneakers High', price:5800, img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', badge:'LIMITED', col:'#FFEAA7'},
  {id:6, name:'Bucket Hat', price:1200, img:'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400', badge:'NEW', col:'#DDA0DD'},
  {id:7, name:'Graphic Tee Black', price:1800, img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400', badge:'HOT', col:'#FF7675'},
  {id:8, name:'Wide Leg Jeans', price:3800, img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400', badge:'HOT', col:'#74B9FF'},
  {id:9, name:'Puffer Jacket', price:6200, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', badge:'WINTER', col:'#FD79A8'},
  {id:10, name:'Beanie Cap', price:900, img:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400', badge:'SALE', col:'#FDCB6E'},
  {id:11, name:'Running Shoes', price:5200, img:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400', badge:'NEW', col:'#6C5CE7'},
  {id:12, name:'Crop Hoodie', price:2600, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400', badge:'HOT', col:'#00B894'},
]

export default function App(){
  const [cart, setCart] = useState([])
  const [page, setPage] = useState('shop')
  return (
    <div style={{minHeight:'100vh', background:'#0a0a0a', color:'white', fontFamily:'system-ui'}}>
      {/* NAV */}
      <nav style={{display:'flex', justifyContent:'space-between', padding:'16px 24px', borderBottom:'1px solid #222', position:'sticky', top:0, background:'#0a0a0a', zIndex:10}}>
        <h1 style={{fontWeight:'900', fontSize:'22px', letterSpacing:'3px'}}>AURA<span style={{color:'#FF6B6B'}}>.</span></h1>
        <div style={{display:'flex', gap:'20px', fontSize:'13px', fontWeight:'700'}}>
          <span onClick={()=>setPage('shop')} style={{cursor:'pointer', color:page==='shop'?'#FF6B6B':'#888'}}>SHOP</span>
          <span onClick={()=>setPage('cart')} style={{cursor:'pointer'}}>CART ({cart.length})</span>
          <span style={{background:'white', color:'black', padding:'6px 14px', borderRadius:'20px'}}>LOGIN</span>
        </div>
      </nav>

      {/* HERO */}
      <div style={{padding:'30px 24px', background:'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)', borderBottom:'1px solid #222'}}>
        <h2 style={{fontSize:'48px', fontWeight:'900', lineHeight:'0.9'}}>NEW<br/><span style={{color:'#FF6B6B'}}>DROP</span> 2025</h2>
        <p style={{color:'#666', marginTop:'10px'}}>12 Products • Streetwear Essentials • Dark Edition</p>
      </div>

      {/* GRID */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(165px, 1fr))', gap:'14px', padding:'20px 14px', maxWidth:'1100px', margin:'0 auto'}}>
        {PRODUCTS.map(p=>(
          <div key={p.id} style={{background:'#151515', borderRadius:'16px', overflow:'hidden', border:'1px solid #222'}}>
            <div style={{position:'relative'}}><img src={p.img} style={{width:'100%', height:'210px', objectFit:'cover'}}/><span style={{position:'absolute', top:'8px', left:'8px', background:p.col, color:p.col==='#FFEAA7'?'black':'white', fontSize:'9px', fontWeight:'900', padding:'4px 8px', borderRadius:'20px'}}>{p.badge}</span></div>
            <div style={{padding:'12px'}}><h3 style={{fontSize:'13px', fontWeight:'700'}}>{p.name}</h3><p style={{fontSize:'18px', fontWeight:'900', marginTop:'6px', color:p.col}}>৳{p.price}</p><button onClick={()=>setCart([...cart,p])} style={{width:'100%', marginTop:'10px', background:'white', color:'black', border:'none', padding:'8px', borderRadius:'10px', fontWeight:'800', fontSize:'12px', cursor:'pointer'}}>ADD TO CART</button></div>
          </div>
        ))}
      </div>

      {page==='cart' && <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.9)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50}}><div style={{background:'#151515', padding:'24px', borderRadius:'20px', width:'90%', maxWidth:'400px', border:'1px solid #333'}}><h3 style={{fontWeight:'800'}}>Cart ({cart.length})</h3>{cart.map((c,i)=><div key={i} style={{display:'flex', justifyContent:'space-between', marginTop:'10px', fontSize:'13px'}}><span>{c.name}</span><span style={{color:c.col}}>৳{c.price}</span></div>)}<p style={{marginTop:'16px', fontWeight:'900'}}>Total ৳{cart.reduce((s,a)=>s+a.price,0)}</p><button onClick={()=>setPage('shop')} style={{width:'100%', marginTop:'12px', background:'#222', color:'white', padding:'10px', borderRadius:'10px', border:'none'}}>Close</button></div></div>}
      <div style={{textAlign:'center', padding:'30px', color:'#333', fontSize:'11px', borderTop:'1px solid #111', marginTop:'20px'}}>AURA. © 2025 • MADE IN DHAKA</div>
    </div>
  )
}
