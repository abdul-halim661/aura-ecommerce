import { useState, useEffect } from 'react'

const LOCAL_PRODUCTS = [
  {id:1, name:'Oversized Hoodie', price:2850, image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', color:'#FF6B6B', cat:'Hoodie'},
  {id:2, name:'Cargo Pants', price:3200, image:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400', color:'#4ECDC4', cat:'Pants'},
  {id:3, name:'Street Tee', price:1500, image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', color:'#45B7D1', cat:'T-Shirt'},
  {id:4, name:'Denim Jacket', price:4500, image:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400', color:'#96CEB4', cat:'Jacket'},
  {id:5, name:'Sneakers High', price:5800, image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', color:'#FFEAA7', cat:'Shoes'},
  {id:6, name:'Bucket Hat', price:1200, image:'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400', color:'#DDA0DD', cat:'Accessories'},
  {id:7, name:'Graphic Tee Black', price:1800, image:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400', color:'#2C3E50', cat:'T-Shirt'},
  {id:8, name:'Wide Leg Jeans', price:3800, image:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400', color:'#74B9FF', cat:'Pants'},
  {id:9, name:'Puffer Jacket', price:6200, image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', color:'#FF7675', cat:'Jacket'},
  {id:10, name:'Beanie Cap', price:900, image:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400', color:'#FDCB6E', cat:'Accessories'},
  {id:11, name:'Running Shoes', price:5200, image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', color:'#6C5CE7', cat:'Shoes'},
  {id:12, name:'Crop Hoodie', price:2600, image:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400', color:'#FD79A8', cat:'Hoodie'},
]

export default function App(){
  const [page, setPage] = useState('home')
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(localStorage.getItem('aura_user') || null)

  const addToCart = (p) => { setCart([...cart, p]); }
  const login = (e) => { e.preventDefault(); localStorage.setItem('aura_user', e.target.email.value); setUser(e.target.email.value); setPage('home') }

  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(180deg, #fff 0%, #f8f9ff 100%)', fontFamily:'system-ui'}}>
      <nav style={{background:'rgba(0,0,0,0.95)', backdropFilter:'blur(10px)', color:'white', padding:'14px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:20}}>
        <h1 onClick={()=>setPage('home')} style={{fontSize:'24px', fontWeight:'900', letterSpacing:'2px', cursor:'pointer'}}>AURA<span style={{color:'#FF6B6B'}}>.</span></h1>
        <div style={{display:'flex', gap:'18px', fontSize:'13px', alignItems:'center', fontWeight:'600'}}>
          <span onClick={()=>setPage('home')} style={{cursor:'pointer'}}>SHOP</span>
          <span onClick={()=>setPage('cart')} style={{cursor:'pointer', background:'#222', padding:'6px 12px', borderRadius:'20px'}}>CART {cart.length>0 && <span style={{background:'#FF6B6B', padding:'2px 6px', borderRadius:'10px', marginLeft:'4px'}}>{cart.length}</span>}</span>
          {user ? <span onClick={()=>{localStorage.removeItem('aura_user'); setUser(null)}} style={{cursor:'pointer'}}>LOGOUT</span> : <><span onClick={()=>setPage('login')} style={{cursor:'pointer'}}>LOGIN</span><span onClick={()=>setPage('signup')} style={{background:'white', color:'black', padding:'8px 14px', borderRadius:'20px', cursor:'pointer'}}>SIGN UP</span></>}
        </div>
      </nav>

      {page==='home' && <>
        <div style={{padding:'50px 24px 20px', textAlign:'center'}}>
          <h2 style={{fontSize:'42px', fontWeight:'900', background:'linear-gradient(90deg, #FF6B6B, #4ECDC4, #45B7D1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>NEW DROP 2025</h2>
          <p style={{color:'#666', marginTop:'8px', fontSize:'14px'}}>12 Premium Streetwear Products • Colorful Collection</p>
          <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'16px', flexWrap:'wrap'}}>
            {['All','Hoodie','T-Shirt','Jacket','Shoes'].map(c=><span key={c} style={{padding:'6px 14px', borderRadius:'20px', background:c==='All'?'black':'white', color:c==='All'?'white':'black', fontSize:'12px', border:'1px solid #eee'}}>{c}</span>)}
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(170px, 1fr))', gap:'18px', padding:'20px 16px 60px', maxWidth:'1100px', margin:'0 auto'}}>
          {LOCAL_PRODUCTS.map(p=>(
            <div key={p.id} style={{background:'white', borderRadius:'16px', overflow:'hidden', boxShadow:'0 4px 20px rgba(0,0,0,0.06)', transition:'transform 0.2s'}} onMouseOver={e=>e.currentTarget.style.transform='translateY(-4px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
              <div style={{position:'relative'}}><img src={p.image} style={{width:'100%', height:'210px', objectFit:'cover'}}/><span style={{position:'absolute', top:'8px', left:'8px', background:p.color, color:p.color==='#FFEAA7'?'black':'white', fontSize:'10px', padding:'4px 8px', borderRadius:'10px', fontWeight:'700'}}>{p.cat}</span></div>
              <div style={{padding:'12px'}}><h3 style={{fontSize:'14px', fontWeight:'700'}}>{p.name}</h3><div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'8px'}}><p style={{fontSize:'16px', fontWeight:'800'}}>৳{p.price}</p><div style={{width:'12px', height:'12px', borderRadius:'50%', background:p.color, border:'1px solid #eee'}}></div></div><button onClick={()=>addToCart(p)} style={{width:'100%', marginTop:'10px', background:'black', color:'white', border:'none', padding:'9px', borderRadius:'10px', fontSize:'12px', fontWeight:'700', cursor:'pointer'}}>ADD TO CART +</button></div>
            </div>
          ))}
        </div>
      </>}

      {page==='cart' && <div style={{maxWidth:'500px', margin:'40px auto', background:'white', padding:'24px', borderRadius:'16px', boxShadow:'0 10px 30px rgba(0,0,0,0.08)'}}><h2 style={{fontWeight:'800'}}>Cart ({cart.length})</h2>{cart.length===0?<p style={{marginTop:'20px'}}>Empty</p>:<><div style={{marginTop:'16px'}}>{cart.map((c,i)=><div key={i} style={{display:'flex', gap:'12px', padding:'10px 0', borderBottom:'1px solid #f0f0f0'}}><img src={c.image} style={{width:'50px', height:'50px', borderRadius:'8px', objectFit:'cover'}}/><div style={{flex:1}}><p style={{fontSize:'13px', fontWeight:'600'}}>{c.name}</p><p style={{fontSize:'12px', color:'#888'}}>৳{c.price}</p></div></div>)}</div><p style={{marginTop:'16px', fontWeight:'800', fontSize:'18px'}}>Total: ৳{cart.reduce((s,a)=>s+a.price,0)}</p><button onClick={()=>{alert('Order Success!'); setCart([])}} style={{width:'100%', background:'linear-gradient(90deg, #FF6B6B, #6C5CE7)', color:'white', padding:'12px', borderRadius:'10px', border:'none', marginTop:'12px', fontWeight:'700'}}>CHECKOUT</button></>}</div>}

      {(page==='login' || page==='signup') && <div style={{maxWidth:'380px', margin:'60px auto', background:'white', padding:'28px', borderRadius:'20px', boxShadow:'0 10px 30px rgba(0,0,0,0.08)'}}><h2 style={{fontWeight:'900', fontSize:'22px'}}>{page==='login'?'Welcome Back':'Join AURA'}</h2><form onSubmit={login} style={{marginTop:'20px'}}><input name='email' placeholder='Email' required style={{width:'100%', padding:'12px', borderRadius:'10px', border:'1px solid #eee', marginBottom:'10px'}}/><input type='password' placeholder='Password' required style={{width:'100%', padding:'12px', borderRadius:'10px', border:'1px solid #eee', marginBottom:'16px'}}/><button style={{width:'100%', background:'black', color:'white', padding:'12px', borderRadius:'10px', fontWeight:'700'}}>{page==='login'?'LOGIN':'SIGN UP'}</button></form></div>}
    </div>
  )
}
