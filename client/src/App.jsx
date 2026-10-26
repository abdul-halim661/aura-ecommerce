import { useState, useEffect } from 'react'
const P=[
 {id:1,n:'Hoodie Noir',p:2850,i:'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&w=600'},
 {id:2,n:'Cargo Pants',p:3200,i:'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&w=600'},
 {id:3,n:'Street Tee',p:1500,i:'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&w=600'},
 {id:4,n:'Denim Jacket',p:4500,i:'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&w=600'},
 {id:5,n:'Sneakers Blaze',p:5800,i:'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&w=600'},
 {id:6,n:'Bucket Hat',p:1200,i:'https://images.pexels.com/photos/1070467/pexels-photo-1070467.jpeg?auto=compress&w=600'},
 {id:7,n:'Graphic Tee',p:1800,i:'https://images.pexels.com/photos/9558246/pexels-photo-9558246.jpeg?auto=compress&w=600'},
 {id:8,n:'Wide Jeans',p:3800,i:'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&w=600'},
 {id:9,n:'Puffer Jacket',p:6200,i:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&w=600'},
 {id:10,n:'Beanie Wool',p:900,i:'https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&w=600'},
 {id:11,n:'Runner Cloud',p:5200,i:'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&w=600'},
 {id:12,n:'Crop Hoodie',p:2600,i:'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&w=600'},
 {id:13,n:'Tote Bag',p:1100,i:'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&w=600'},
 {id:14,n:'Overshirt Check',p:3400,i:'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&w=600'},
]
const CATS=['All','Hoodie','T-Shirt','Pants','Jacket','Shoes','Accessories']
export default function App(){
 const [cat,setCat]=useState('All')
 const [search,setSearch]=useState('')
 const [cart,setCart]=useState(()=>{try{return JSON.parse(localStorage.getItem('aura_cart')||'[]')}catch{return []}})
 const [page,setPage]=useState('shop')
 useEffect(()=>localStorage.setItem('aura_cart',JSON.stringify(cart)),[cart])
 let filtered=P.filter(x=>(cat==='All'||x.n.toLowerCase().includes(cat.toLowerCase())||true)&&x.n.toLowerCase().includes(search.toLowerCase()))
 if(cat!=='All') filtered=P.filter(x=>x.n.toLowerCase().includes(cat.toLowerCase())||x.n.toLowerCase().includes(search.toLowerCase()))
 // fix cat filter
 filtered=P.filter(p=>{const matchCat=cat==='All'||p.n.toLowerCase().includes(cat.toLowerCase())|| (cat==='T-Shirt'&&p.n.includes('Tee'))|| (cat==='Accessories'&&(p.n.includes('Hat')||p.n.includes('Bag')||p.n.includes('Beanie'))); const matchSearch=p.n.toLowerCase().includes(search.toLowerCase()); return matchCat&&matchSearch})
 const total=cart.reduce((s,i)=>s+i.p,0)
 return(
  <div style={{minHeight:'100vh',background:'#080808',color:'#fff',fontFamily:'system-ui'}}>
   <div style={{background:'#fff',color:'#000',textAlign:'center',fontSize:'10px',fontWeight:'900',padding:'6px'}}>FREE SHIPPING OVER ৳5000 • NEW DROP 2026 • DHAKA</div>
   <nav style={{display:'flex',justifyContent:'space-between',padding:'14px 18px',borderBottom:'1px solid #1a1a1a',position:'sticky',top:0,background:'#080808'}}>
    <b onClick={()=>setPage('shop')} style={{cursor:'pointer'}}>AURA STUDIO 2026</b>
    <div style={{display:'flex',gap:'10px',fontSize:'11px',fontWeight:'700'}}>
     <span onClick={()=>setPage('shop')} style={{cursor:'pointer'}}>SHOP</span>
     <span onClick={()=>setPage('cart')} style={{cursor:'pointer'}}>CART({cart.length})</span>
    </div>
   </nav>
   {page==='shop' && <>
    <div style={{padding:'24px 18px'}}>
     <h2 style={{fontSize:'42px',fontWeight:'900',lineHeight:'0.9'}}>NEW DROP<br/>2026.</h2>
     <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..." style={{width:'100%',marginTop:'14px',background:'#111',border:'1px solid #222',borderRadius:'24px',padding:'12px 16px',color:'#fff'}}/>
     <div style={{display:'flex',gap:'8px',marginTop:'12px',overflowX:'auto'}}>{CATS.map(c=><span key={c} onClick={()=>setCat(c)} style={{whiteSpace:'nowrap',padding:'7px 12px',borderRadius:'20px',background:cat===c?'#fff':'#151515',color:cat===c?'#000':'#888',fontSize:'11px',fontWeight:'800',cursor:'pointer'}}>{c}</span>)}</div>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(160px, 1fr))',gap:'1px',background:'#1a1a1a'}}>
     {filtered.map(p=>(
      <div key={p.id} style={{background:'#111',padding:'10px'}}>
       <div style={{background:'#0a0a0a',borderRadius:'12px',overflow:'hidden',aspectRatio:'3/4'}}><img src={p.i} alt={p.n} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
       <p style={{fontSize:'12px',marginTop:'8px',fontWeight:'600'}}>{p.n}</p>
       <p style={{fontSize:'13px',fontWeight:'900',marginTop:'4px'}}>৳{p.p.toLocaleString()}</p>
       <button onClick={()=>setCart([...cart,p])} style={{width:'100%',background:'#fff',color:'#000',border:'none',padding:'8px',borderRadius:'20px',fontSize:'11px',fontWeight:'900',marginTop:'8px',cursor:'pointer'}}>ADD TO CART</button>
      </div>
     ))}
    </div>
   </>}
   {page==='cart' && <div style={{padding:'18px'}}><h2 style={{fontWeight:'900'}}>CART • {cart.length}</h2>{cart.length===0?<button onClick={()=>setPage('shop')} style={{marginTop:'16px',background:'#fff',color:'#000',padding:'10px 18px',borderRadius:'20px',border:'none',fontWeight:'900',cursor:'pointer'}}>SHOP NOW</button>:<><div style={{marginTop:'16px'}}>{cart.map((c,i)=><div key={i} style={{display:'flex',gap:'12px',background:'#111',border:'1px solid #222',borderRadius:'12px',padding:'12px',marginBottom:'8px'}}><img src={c.i} style={{width:'60px',height:'75px',borderRadius:'8px',objectFit:'cover'}}/><div style={{flex:1}}><p style={{fontSize:'12px',fontWeight:'700'}}>{c.n}</p><p style={{fontSize:'12px',fontWeight:'900',marginTop:'4px'}}>৳{c.p.toLocaleString()}</p></div><button onClick={()=>setCart(cart.filter((_,idx)=>idx!==i))} style={{background:'none',border:'none',color:'#666',textDecoration:'underline',fontSize:'11px',cursor:'pointer'}}>Remove</button></div>)}</div><p style={{marginTop:'16px',fontWeight:'900'}}>Total: ৳{total.toLocaleString()}</p></>}</div>}
   <footer style={{textAlign:'center',padding:'30px',color:'#333',fontSize:'10px',borderTop:'1px solid #111',marginTop:'20px'}}>AURA STUDIO • 2026 • {P.length} PRODUCTS • BUILD FIXED</footer>
  </div>
 )
}
