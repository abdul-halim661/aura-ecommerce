import { useState } from 'react'
const PRODUCTS = [
  {id:1, name:'Oversized Hoodie', price:2850, img:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500', cat:'Hoodie', tag:'BESTSELLER', col:'#FF3B30'},
  {id:2, name:'Cargo Pants', price:3200, img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500', cat:'Pants', tag:'NEW', col:'#00D4AA'},
  {id:3, name:'Street Tee', price:1500, img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', cat:'T-Shirt', tag:'ESSENTIAL', col:'#0A84FF'},
  {id:4, name:'Denim Jacket', price:4500, img:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500', cat:'Jacket', tag:'PREMIUM', col:'#BF5AF2'},
  {id:5, name:'Sneakers High', price:5800, img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', cat:'Shoes', tag:'LIMITED', col:'#FF9F0A'},
  {id:6, name:'Bucket Hat', price:1200, img:'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500', cat:'Accessories', tag:'NEW', col:'#FFD60A'},
  {id:7, name:'Graphic Tee Black', price:1800, img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500', cat:'T-Shirt', tag:'HOT', col:'#FF453A'},
  {id:8, name:'Wide Leg Jeans', price:3800, img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500', cat:'Pants', tag:'TREND', col:'#64D2FF'},
  {id:9, name:'Puffer Jacket', price:6200, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500', cat:'Jacket', tag:'WINTER 26', col:'#FF2D55'},
  {id:10, name:'Beanie Cap', price:900, img:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500', cat:'Accessories', tag:'SALE', col:'#FFCC02'},
  {id:11, name:'Running Shoes', price:5200, img:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500', cat:'Shoes', tag:'NEW', col:'#AF52DE'},
  {id:12, name:'Crop Hoodie', price:2600, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500', cat:'Hoodie', tag:'DROP 26', col:'#30D158'},
]

export default function App(){
  const [page, setPage] = useState('shop')
  const [cat, setCat] = useState('All')
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(localStorage.getItem('aura_user')||null)
  const [showCart, setShowCart] = useState(false)

  const filtered = cat==='All' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===cat)
  const login = (e)=>{e.preventDefault(); const email=e.target.email.value; localStorage.setItem('aura_user',email); setUser(email); setPage('shop')}
  const logout = ()=>{localStorage.removeItem('aura_user'); setUser(null); setPage('shop')}

  return (
    <div style={{minHeight:'100vh', background:'#080808', color:'#fff', fontFamily:'system-ui'}}>
      <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 20px', borderBottom:'1px solid #1a1a1a', position:'sticky', top:0, background:'rgba(8,8,8,0.95)', zIndex:20}}>
        <h1 onClick={()=>setPage('shop')} style={{fontWeight:'900', fontSize:'20px', cursor:'pointer'}}>AURA<span style={{fontWeight:'400', color:'#666', marginLeft:'4px'}}>STUDIO</span><span style={{fontSize:'9px', border:'1px solid #222', padding:'2px 6px', borderRadius:'10px', marginLeft:'8px', color:'#666'}}>2026</span></h1>
        <div style={{display:'flex', gap:'14px', fontSize:'11px', fontWeight:'700', alignItems:'center'}}>
          <span onClick={()=>setPage('shop')} style={{cursor:'pointer', color:page==='shop'?'#fff':'#666'}}>SHOP</span>
          <span onClick={()=>setShowCart(true)} style={{cursor:'pointer'}}>CART ({cart.length})</span>
          {user ? <><span style={{color:'#666'}}>{user.split('@')[0]}</span><span onClick={logout} style={{cursor:'pointer', background:'#1a1a1a', padding:'6px 10px', borderRadius:'20px'}}>LOGOUT</span></> : <><span onClick={()=>setPage('login')} style={{cursor:'pointer', color:'#888'}}>LOGIN</span><span onClick={()=>setPage('signup')} style={{cursor:'pointer', background:'#fff', color:'#000', padding:'7px 12px', borderRadius:'20px'}}>SIGN UP</span></>}
        </div>
      </nav>

      {page==='shop' && <>
        <div style={{padding:'36px 20px 20px', background:'radial-gradient(800px at 20% 0%, #1a1a2e 0%, #080808 70%)'}}>
          <p style={{fontSize:'10px', letterSpacing:'3px', color:'#FF3B30', fontWeight:'900'}}>COLLECTION • SS26 • PREMIUM</p>
          <h2 style={{fontSize:'48px', fontWeight:'900', lineHeight:'0.9', marginTop:'8px'}}>NEW DROP<br/><span style={{WebkitTextStroke:'1px #333
