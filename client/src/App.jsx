import { useState, useEffect } from 'react'

export default function App(){
  const [page, setPage] = useState('home')
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(localStorage.getItem('aura_user') || null)

  useEffect(()=>{
    fetch('https://aura-ecommerce-ww1b.onrender.com/api/products')
    .then(r=>r.json()).then(d=>setProducts(d))
  },[])

  const addToCart = (p) => { setCart([...cart, p]); alert(p.name + ' Added!') }
  const login = (e) => { e.preventDefault(); const email=e.target.email.value; localStorage.setItem('aura_user',email); setUser(email); setPage('home') }
  const logout = () => { localStorage.removeItem('aura_user'); setUser(null); setPage('home') }

  return (
    <div style={{minHeight:'100vh', background:'#f5f5f5', fontFamily:'system-ui'}}>
      <nav style={{background:'black', color:'white', padding:'14px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10}}>
        <h1 onClick={()=>setPage('home')} style={{fontSize:'22px', fontWeight:'900', cursor:'pointer'}}>AURA.</h1>
        <div style={{display:'flex', gap:'16px', fontSize:'13px', alignItems:'center'}}>
          <span onClick={()=>setPage('home')} style={{cursor:'pointer'}}>SHOP</span>
          <span onClick={()=>setPage('cart')} style={{cursor:'pointer'}}>CART ({cart.length})</span>
          {user ? <><span>{user.split('@')[0]}</span><span onClick={logout} style={{cursor:'pointer', opacity:0.7}}>LOGOUT</span></> : 
          <><span onClick={()=>setPage('login')} style={{cursor:'pointer'}}>LOGIN</span><span onClick={()=>setPage('signup')} style={{background:'white', color:'black', padding:'6px 12px', borderRadius:'6px', cursor:'pointer', fontWeight:'700'}}>SIGN UP</span></>}
        </div>
      </nav>

      {page==='home' && <>
        <div style={{padding:'40px 24px', textAlign:'center'}}><h2 style={{fontSize:'32px', fontWeight:'800'}}>NEW DROP</h2><p style={{color:'#666'}}>Streetwear Essentials - {products.length} Products</p></div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(160px, 1fr))', gap:'16px', padding:'0 16px 40px', maxWidth:'1000px', margin:'0 auto'}}>
          {products.map(p=>(
            <div key={p.id} style={{background:'white', borderRadius:'12px', overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>
              <img src={p.image} style={{width:'100%', height:'220px', objectFit:'cover'}}/>
              <div style={{padding:'12px'}}><h3 style={{fontSize:'14px', fontWeight:'600'}}>{p.name}</h3><p style={{fontWeight:'700', marginTop:'6px'}}>৳{p.price}</p><button onClick={()=>addToCart(p)} style={{width:'100%', marginTop:'8px', background:'black', color:'white', border:'none', padding:'8px', borderRadius:'8px'}}>ADD TO CART</button></div>
            </div>
          ))}
        </div>
      </>}

      {page==='login' && <div style={{maxWidth:'360px', margin:'60px auto', background:'white', padding:'24px', borderRadius:'12px'}}><h2 style={{fontSize:'20px', fontWeight:'800', marginBottom:'16px'}}>Login to AURA</h2><form onSubmit={login}><input name='email' placeholder='Email' required style={{width:'100%', padding:'10px', marginBottom:'10px', borderRadius:'8px', border:'1px solid #ddd'}}/><input type='password' placeholder='Password' required style={{width:'100%', padding:'10px', marginBottom:'16px', borderRadius:'8px', border:'1px solid #ddd'}}/><button style={{width:'100%', background:'black', color:'white', padding:'10px', borderRadius:'8px'}}>LOGIN</button></form><p style={{marginTop:'12px', fontSize:'13px'}}>No account? <span onClick={()=>setPage('signup')} style={{fontWeight:'700', cursor:'pointer'}}>Sign Up</span></p></div>}

      {page==='signup' && <div style={{maxWidth:'360px', margin:'60px auto', background:'white', padding:'24px', borderRadius:'12px'}}><h2 style={{fontSize:'20px', fontWeight:'800', marginBottom:'16px'}}>Create Account</h2><form onSubmit={login}><input name='email' placeholder='Email' required style={{width:'100%', padding:'10px', marginBottom:'10px', borderRadius:'8px', border:'1px solid #ddd'}}/><input type='password' placeholder='Password' required style={{width:'100%', padding:'10px', marginBottom:'16px', borderRadius:'8px', border:'1px solid #ddd'}}/><button style={{width:'100%', background:'black', color:'white', padding:'10px', borderRadius:'8px'}}>SIGN UP</button></form><p style={{marginTop:'12px', fontSize:'13px'}}>Have account? <span onClick={()=>setPage('login')} style={{fontWeight:'700', cursor:'pointer'}}>Login</span></p></div>}

      {page==='cart' && <div style={{maxWidth:'600px', margin:'40px auto', background:'white', padding:'24px', borderRadius:'12px'}}><h2 style={{fontSize:'20px', fontWeight:'800'}}>Your Cart ({cart.length})</h2>{cart.length===0 ? <p style={{marginTop:'20px', color:'#666'}}>Cart is empty. Go to Shop!</p> : cart.map((c,i)=><div key={i} style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid #eee'}}><span>{c.name}</span><span>৳{c.price}</span></div>)}<div style={{marginTop:'16px', fontWeight:'800'}}>Total: ৳{cart.reduce((s,i)=>s+Number(i.price),0)}</div><button onClick={()=>{alert('Order Placed!'); setCart([]); setPage('home')}} style={{width:'100%', marginTop:'16px', background:'black', color:'white', padding:'12px', borderRadius:'8px'}}>CHECKOUT</button></div>}
    </div>
  )
}
