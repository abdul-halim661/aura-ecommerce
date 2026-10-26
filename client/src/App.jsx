import { useState } from 'react'
const PRODUCTS = [
  {id:1, name:'Oversized Hoodie', price:2850, img:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80', tag:'BESTSELLER', col:'#FF3B30'},
  {id:2, name:'Cargo Pants', price:3200, img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80', tag:'NEW', col:'#00D4AA'},
  {id:3, name:'Street Tee', price:1500, img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', tag:'ESSENTIAL', col:'#0A84FF'},
  {id:4, name:'Denim Jacket', price:4500, img:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&q=80', tag:'PREMIUM', col:'#BF5AF2'},
  {id:5, name:'Sneakers High', price:5800, img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', tag:'LIMITED', col:'#FF9F0A'},
  {id:6, name:'Bucket Hat', price:1200, img:'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&q=80', tag:'NEW', col:'#FFD60A'},
  {id:7, name:'Graphic Tee Black', price:1800, img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80', tag:'HOT', col:'#FF453A'},
  {id:8, name:'Wide Leg Jeans', price:3800, img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80', tag:'TREND', col:'#64D2FF'},
  {id:9, name:'Puffer Jacket', price:6200, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80', tag:'WINTER 26', col:'#FF2D55'},
  {id:10, name:'Beanie Cap', price:900, img:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80', tag:'SALE', col:'#FFCC02'},
  {id:11, name:'Running Shoes', price:5200, img:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80', tag:'NEW', col:'#AF52DE'},
  {id:12, name:'Crop Hoodie', price:2600, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80', tag:'DROP 26', col:'#30D158'},
]

export default function App(){
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  return (
    <div style={{minHeight:'100vh', background:'#080808', color:'#fff', fontFamily:"'Inter', system-ui"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap')`}</style>
      
      <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 28px', borderBottom:'1px solid #1a1a1a', position:'sticky', top:0, background:'rgba(8,8,8,0.9)', backdropFilter:'blur(20px)', zIndex:20}}>
        <div style={{display:'flex', alignItems:'center', gap:'12px'}}><h1 style={{fontWeight:'900', fontSize:'24px', letterSpacing:'-0.5px'}}>AURA<span style={{fontWeight:'400', opacity:0.3, marginLeft:'4px'}}>STUDIO</span></h1><span style={{fontSize:'10px', border:'1px solid #222', padding:'3px 8px', borderRadius:'20px', color:'#666'}}>DHAKA • 2026</span></div>
        <div style={{display:'flex', gap:'24px', fontSize:'12px', fontWeight:'700', letterSpacing:'1px'}}><span style={{opacity:0.5}}>SHOP</span><span onClick={()=>setShowCart(true)} style={{cursor:'pointer'}}>CART <span style={{background:'white', color:'black', padding:'2px 7px', borderRadius:'10px', marginLeft:'4px'}}>{cart.length}</span></span></div>
      </nav>

      <div style={{padding:'50px 28px 30px', background:'radial-gradient(1200px at 20% -10%, #1a1a2e 0%, transparent 50%), radial-gradient(800px at 80% 0%, #1a0a0a 0%, #080808 60%)'}}>
        <div style={{maxWidth:'1100px', margin:'0 auto'}}>
          <p style={{fontSize:'11px', letterSpacing:'3px', color:'#FF3B30', fontWeight:'900', marginBottom:'12px'}}>COLLECTION • SS26</p>
          <h2 style={{fontSize:'clamp(40px, 8vw, 72px)', fontWeight:'900', lineHeight:'0.85', letterSpacing:'-3px'}}>NEW DROP<br/><span style={{color:'transparent', WebkitTextStroke:'1px #333'}}>2026</span></h2>
          <p style={{color:'#555', marginTop:'18px', fontSize:'13px', maxWidth:'320px', lineHeight:'1.5'}}>Premium streetwear essentials. 12 pieces. Limited stock. Crafted for Dhaka culture.</p>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(175px, 1fr))', gap:'1px', background:'#1a1a1a', borderTop:'1px solid #1a1a1a', borderBottom:'1px solid #1a1a1a', maxWidth:'1100px', margin:'0 auto'}}>
        {PRODUCTS.map(p=>(
          <div key={p.id} style={{background:'#0f0f0f', padding:'12px', position:'relative', group:'true'}}>
            <div style={{background:'#111', borderRadius:'12px', overflow:'hidden', aspectRatio:'3/4', position:'relative'}}><img src={p.img} style={{width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.9) contrast(1.1)'}} loading='lazy'/><div style={{position:'absolute', inset:0, background:'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 60%)'}}></div><span style={{position:'absolute', top:'10px', left:'10px', background:'rgba(0,0,0,0.8)', backdropFilter:'blur(10px)', border:`1px solid ${p.col}30`, color:p.col, fontSize:'8px', fontWeight:'900', letterSpacing:'1px', padding:'5px 8px', borderRadius:'20px'}}>{p.tag}</span></div>
            <div style={{marginTop:'12px'}}><h3 style={{fontSize:'13px', fontWeight:'600', letterSpacing:'-0.2px'}}>{p.name}</h3><div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'8px'}}><p style={{fontSize:'15px', fontWeight:'900'}}>৳{p.price.toLocaleString()}</p><span style={{fontSize:'10px', color:'#444'}}>{p.col==='NEW'?'Just In':''}</span></div><button onClick={()=>setCart([...cart,p])} style={{width:'100%', marginTop:'12px', background:'#fff', color:'#000', border:'none', padding:'10px', borderRadius:'10px', fontWeight:'800', fontSize:'11px', letterSpacing:'0.5px', cursor:'pointer'}}>ADD TO CART — +</button></div>
          </div>
        ))}
      </div>

      {showCart && <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', backdropFilter:'blur(20px)', zIndex:50, display:'flex', justifyContent:'flex-end'}} onClick={()=>setShowCart(false)}><div style={{background:'#111', width:'100%', maxWidth:'380px', padding:'28px', borderLeft:'1px solid #222'}} onClick={e=>e.stopPropagation()}><div style={{display:'flex', justifyContent:'space-between'}}><h3 style={{fontWeight:'900'}}>CART ({cart.length})</h3><span onClick={()=>setShowCart(false)} style={{cursor:'pointer'}}>✕</span></div>{cart.length===0?<p style={{marginTop:'40px', color:'#444', textAlign:'center'}}>Your cart is empty</p>:<><div style={{marginTop:'24px'}}>{cart.map((c,i)=><div key={i} style={{display:'flex', gap:'12px', marginBottom:'14px'}}><img src={c.img} style={{width:'50px', height:'65px', borderRadius:'8px', objectFit:'cover'}}/><div><p style={{fontSize:'12px', fontWeight:'700'}}>{c.name}</p><p style={{fontSize:'12px', color:'#666', marginTop:'4px'}}>৳{c.price}</p></div></div>)}</div><div style={{marginTop:'24px', borderTop:'1px solid #222', paddingTop:'16px'}}><p style={{fontWeight:'900', fontSize:'18px'}}>Total ৳{cart.reduce((s,a)=>s+a.price,0).toLocaleString()}</p><button onClick={()=>{alert('Order Placed for 2026!'); setCart([]); setShowCart(false)}} style={{width:'100%', background:'white', color:'black', padding:'14px', borderRadius:'12px', border:'none', fontWeight:'900', marginTop:'14px'}}>CHECKOUT • 2026 DROP</button></div></>}</div></div>}
      <footer style={{textAlign:'center', padding:'40px 20px', color:'#222', fontSize:'10px', letterSpacing:'2px'}}>AURA STUDIO • EST. DHAKA 2026 • PREMIUM STREETWEAR</footer>
    </div>
  )
}
