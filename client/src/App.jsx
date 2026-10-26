import { useState, useEffect } from 'react'

const PRODUCTS = [
  {id:1, name:'Oversized Hoodie - Noir', price:2850, op:3500, cat:'Hoodie', rating:4.8, reviews:124, stock:12, sizes:['S','M','L','XL'], colors:['Black','Ash'], img:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80', gallery:['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80','https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80'], tag:'BESTSELLER', desc:'Premium 400GSM fleece, heavyweight, Dhaka crafted.'},
  {id:2, name:'Cargo Pants - Utility', price:3200, op:3800, cat:'Pants', rating:4.7, reviews:89, stock:8, sizes:['30','32','34'], colors:['Olive','Black'], img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80', gallery:['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80'], tag:'NEW', desc:'6 pockets utility cargo, street-ready.'},
  {id:3, name:'Street Tee - Core', price:1500, op:1800, cat:'T-Shirt', rating:4.6, reviews:210, stock:25, sizes:['S','M','L'], colors:['White','Black'], img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', gallery:['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80'], tag:'ESSENTIAL', desc:'100% combed cotton essential tee.'},
  {id:4, name:'Denim Jacket - 90s', price:4500, op:5200, cat:'Jacket', rating:4.9, reviews:56, stock:5, sizes:['M','L','XL'], colors:['Blue'], img:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&q=80', gallery:['https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&q=80'], tag:'PREMIUM', desc:'Vintage wash denim, premium stitching.'},
  {id:5, name:'Sneakers High - Blaze', price:5800, op:6500, cat:'Shoes', rating:4.8, reviews:102, stock:10, sizes:['40','41','42','43'], colors:['Red'], img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', gallery:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'], tag:'LIMITED', desc:'Air cushion high-top runner.'},
  {id:6, name:'Bucket Hat - Cord', price:1200, op:1500, cat:'Accessories', rating:4.5, reviews:67, stock:30, sizes:['One Size'], colors:['Grey'], img:'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80', gallery:['https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80'], tag:'NEW', desc:'Corduroy bucket, street culture.'},
  {id:7, name:'Graphic Tee - Midnight', price:1800, op:2000, cat:'T-Shirt', rating:4.7, reviews:143, stock:18, sizes:['M','L','XL'], colors:['Black'], img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80', gallery:['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80'], tag:'HOT', desc:'Midnight puff print graphic.'},
  {id:8, name:'Wide Leg Jeans - Stone', price:3800, op:4200, cat:'Pants', rating:4.6, reviews:78, stock:14, sizes:['30','32'], colors:['Stone'], img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80', gallery:['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80'], tag:'TREND', desc:'Wide leg relaxed stone wash.'},
  {id:9, name:'Puffer Jacket - Arctic', price:6200, op:7500, cat:'Jacket', rating:4.9, reviews:41, stock:6, sizes:['L','XL'], colors:['Black'], img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80', gallery:['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80'], tag:'WINTER 26', desc:'800-fill arctic puffer.'},
  {id:10, name:'Beanie - Wool', price:900, op:1100, cat:'Accessories', rating:4.4, reviews:92, stock:40, sizes:['One Size'], colors:['Beige'], img:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80', gallery:['https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80'], tag:'SALE', desc:'Wool blend beanie.'},
  {id:11, name:'Runner - Cloud', price:5200, op:5800, cat:'Shoes', rating:4.7, reviews:88, stock:9, sizes:['40','41','42'], colors:['White'], img:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80', gallery:['https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80'], tag:'NEW', desc:'Cloud lightweight runner.'},
  {id:12, name:'Crop Hoodie - Femme', price:2600, op:3000, cat:'Hoodie', rating:4.6, reviews:65, stock:11, sizes:['S','M','L'], colors:['Pink'], img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', gallery:['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80'], tag:'DROP 26', desc:'Crop fit soft fleece.'},
  {id:13, name:'Tote Bag - Canvas', price:1100, op:1300, cat:'Accessories', rating:4.5, reviews:54, stock:22, sizes:['One Size'], colors:['Natural'], img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', gallery:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80'], tag:'ESSENTIAL', desc:'Canvas everyday tote.'},
  {id:14, name:'Overshirt - Check', price:3400, op:4000, cat:'Jacket', rating:4.7, reviews:49, stock:7, sizes:['M','L','XL'], colors:['Brown'], img:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80', gallery:['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80'], tag:'NEW', desc:'Check shacket overshirt.'},
]
const CATS = ['All','Hoodie','T-Shirt','Pants','Jacket','Shoes','Accessories']

export default function App(){
  const [page, setPage] = useState('shop')
  const [cat, setCat] = useState('All')
  const [search, setSearch] = useState('')
  const [priceMax, setPriceMax] = useState(7000)
  const [sort, setSort] = useState('featured')
  const [cart, setCart] = useState(()=>{try{return JSON.parse(localStorage.getItem('aura_cart')||'[]')}catch{return []}})
  const [wish, setWish] = useState(()=>{try{return JSON.parse(localStorage.getItem('aura_wish')||'[]')}catch{return []}})
  const [user, setUser] = useState(localStorage.getItem('aura_user')||null)
  const [selected, setSelected] = useState(null)
  const [size, setSize] = useState('M')
  const [qty, setQty] = useState(1)
  const [mainImg, setMainImg] = useState('')
  const [mobileMenu, setMobileMenu] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(()=>localStorage.setItem('aura_cart', JSON.stringify(cart)),[cart])
  useEffect(()=>localStorage.setItem('aura_wish', JSON.stringify(wish)),[wish])
  const showToast = (m)=>{setToast(m); setTimeout(()=>setToast(''),2600)}

  let filtered = PRODUCTS.filter(p=> (cat==='All'||p.cat===cat) && p.price<=priceMax && (p.name.toLowerCase().includes(search.toLowerCase()) || p.cat.toLowerCase().includes(search.toLowerCase()) || p.tag.toLowerCase().includes(search.toLowerCase())) )
  if(sort==='price-asc') filtered = [...filtered].sort((a,b)=>a.price-b.price)
  if(sort==='price-desc') filtered = [...filtered].sort((a,b)=>b.price-a.price)
  if(sort==='rating') filtered = [...filtered].sort((a,b)=>b.rating-a.rating)

  const addCart = (p, q=qty, s=size)=>{setCart([...cart, {...p, qty:q, selectedSize:s}]); showToast(`${p.name} added`)}
  const toggleWish = (p)=>{setWish(wish.find(x=>x.id===p.id)? wish.filter(x=>x.id!==p.id): [...wish,p]); showToast(wish.find(x=>x.id===p.id)?'Removed':'Wishlist added')}
  const login = (e)=>{e.preventDefault(); const em=e.target.email.value; if(!em.includes('@')){showToast('Valid email needed'); return} localStorage.setItem('aura_user',em); setUser(em); setPage('shop'); showToast('Welcome '+em.split('@')[0])}
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0)
  const shipping = total>5000?0:total>0?120:0
  const related = selected? PRODUCTS.filter(p=>p.cat===selected.cat && p.id!==selected.id).slice(0,4): []

  return (
    <div style={{minHeight:'100vh', background:'#080808', color:'#fff', fontFamily:'Inter, system-ui'}}>
      {toast && <div style={{position:'fixed', bottom:'22px', left:'50%', transform:'translateX(-50%)', background:'#fff', color:'#000', padding:'11px 18px', borderRadius:'24px', fontSize:'12px', fontWeight:'900', zIndex:100, boxShadow:'0 10px 30px rgba(0,0,0,0.5)'}}>{toast}</div>}
      <div style={{background:'#fff', color:'#000', textAlign:'center', fontSize:'10px', fontWeight:'900', letterSpacing:'2px', padding:'7px'}}>FREE SHIPPING OVER ৳5000 • NEW DROP 2026 • DHAKA • BDT ৳</div>
      
      <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 18px', borderBottom:'1px solid #1a1a1a', position:'sticky', top:0, background:'rgba(8,8,8,0.92)', backdropFilter:'blur(16px)', zIndex:20}}>
        <div onClick={()=>setPage('shop')} style={{fontWeight:'900', fontSize:'20px', cursor:'pointer'}}>AURA<span style={{fontWeight:400, color:'#666', marginLeft:'4px'}}>STUDIO</span><span style={{fontSize:'9px', border:'1px solid #333', padding:'2px 6px', borderRadius:'10px', marginLeft:'8px', color:'#888'}}>2026</span></div>
        <div style={{display:'flex', gap:'10px', fontSize:'11px', fontWeight:'700', alignItems:'center'}}>
          <span onClick={()=>setMobileMenu(!mobileMenu)} style={{display:'inline-block', cursor:'pointer', border:'1px solid #222', padding:'6px 10px', borderRadius:'20px'}}>☰</span>
          <span onClick={()=>setPage('shop')} style={{cursor:'pointer'}}>SHOP</span>
          <span onClick={()=>setPage('wishlist')} style={{cursor:'pointer'}}>WISH ({wish.length})</span>
          <span onClick={()=>setPage('cart')} style={{cursor:'pointer', background:'#151515', border:'1px solid #222', padding:'7px 12px', borderRadius:'20px'}}>CART {cart.length>0 && <b style={{background:'#FF3B30', padding:'2px 7px', borderRadius:'10px', marginLeft:'4px'}}>{cart.length}</b>}</span>
          {user? <span onClick={()=>{localStorage.removeItem('aura_user'); setUser(null); showToast('Logged out')}} style={{cursor:'pointer', background:'#1a1a1a', padding:'6px 10px', borderRadius:'20px'}}>LOGOUT</span> : <><span onClick={()=>setPage('login')} style={{cursor:'pointer', color:'#888'}}>LOGIN</span><span onClick={()=>setPage('signup')} style={{cursor:'pointer', background:'#fff', color:'#000', padding:'7px 12px', borderRadius:'20px'}}>SIGN UP</span></>}
        </div>
      </nav>

      {mobileMenu && <div style={{background:'#111', borderBottom:'1px solid #222', padding:'12px 18px', display:'flex', gap:'8px', flexWrap:'wrap'}}>{CATS.map(c=><span key={c} onClick={()=>{setCat(c); setPage('shop'); setMobileMenu(false)}} style={{padding:'6px 12px', borderRadius:'20px', background:cat===c?'#fff':'#151515', color:cat===c?'#000':'#888', fontSize:'11px', fontWeight:'700', cursor:'pointer'}}>{c}</span>)}<span onClick={()=>{setPage('about'); setMobileMenu(false)}} style={{padding:'6px 12px', borderRadius:'20px', background:'#151515', color:'#888', fontSize:'11px', cursor:'pointer'}}>ABOUT</span><span onClick={()=>{setPage('contact'); setMobileMenu(false)}} style={{padding:'6px 12px', borderRadius:'20px', background:'#151515', color:'#888', fontSize:'11px', cursor:'pointer'}}>CONTACT</span></div>}

      {page==='shop' && <>
        <div style={{padding:'30px 18px 18px', background:'radial-gradient(900px at 20% 0%, #1e1e3a 0%, #080808 60%)', borderBottom:'1px solid #111'}}>
          <p style={{fontSize:'10px', letterSpacing:'3px', color:'#FF3B30', fontWeight:'900'}}>COLLECTION • SS26 • 2026 PREMIUM</p>
          <h2 style={{fontSize:'46px', fontWeight:'900', lineHeight:'0.9', marginTop:'10px'}}>NEW DROP<br/>2026<span style={{color:'#FF3B30'}}>.</span></h2>
          <p style={{color:'#666', marginTop:'12px', fontSize:'12px', maxWidth:'420px', lineHeight:'1.6'}}>{filtered.length} Products • Premium streetwear essentials • {user?`Welcome ${user.split('@')[0]}`:'Login for exclusive drops'} • BDT ৳ via Intl.NumberFormat</p>
          <div style={{marginTop:'18px', display:'flex', gap:'8px', flexWrap:'wrap'}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, tag, category..." style={{flex:1, minWidth:'180px', background:'#111', border:'1px solid #222', borderRadius:'24px', padding:'12px 16px', color:'#fff', fontSize:'12px', outline:'none'}}/>
            <select value={sort} onChange={e=>setSort(e.target.value)} style={{background:'#111', border:'1px solid #222', borderRadius:'24px', padding:'12px 14px', color:'#fff', fontSize:'12px', outline:'none'}}><option value="featured">Featured</option><option value="price-asc">Price Low → High</option><option value="price-desc">Price High → Low</option><option value="rating">Top Rated</option></select>
          </div>
          <div style={{marginTop:'12px', display:'flex', alignItems:'center', gap:'12px', flexWrap:'wrap'}}>
            <input type="range" min="900" max="7000" step="100" value={priceMax} onChange={e=>setPriceMax(Number(e.target.value))} style={{width:'180px', accentColor:'#fff'}}/>
            <span style={{fontSize:'11px', background:'#151515', border:'1px solid #222', padding:'6px 12px', borderRadius:'20px', color:'#888'}}>MAX ৳{priceMax.toLocaleString()}</span>
            <span style={{fontSize:'10px', color:'#444'}}>BDT ৳ • Free shipping over ৳5000</span>
          </div>
          <div style={{display:'flex', gap:'8px', marginTop:'16px', overflowX:'auto', paddingBottom:'4px'}}>{CATS.map(c=><span key={c} onClick={()=>setCat(c)} style={{whiteSpace:'nowrap', padding:'8px 14px', borderRadius:'20px', background:cat===c?'#fff':'#151515', color:cat===c?'#000':'#888', fontSize:'11px', fontWeight:'800', cursor:'pointer', border:'1px solid #222'}}>{c.toUpperCase()}</span>)}</div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(170px, 1fr))', gap:'1px', background:'#1a1a1a'}}>
          {filtered.map(p=>(
            <div key={p.id} style={{background:'#111', padding:'10px'}}>
              <div style={{background:'#0a0a0a', borderRadius:'14px', overflow:'hidden', aspectRatio:'3/4', position:'relative', cursor:'pointer', border:'1px solid #1a1a1a'}} onClick={()=>{setSelected(p); setMainImg(p.img); setSize(p.sizes[0]); setQty(1); setPage('product')}}>
                <img src={p.img} alt={p.name} loading="lazy" style={{width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.88) contrast(1.08)', display:'block'}}/>
                <div style={{position:'absolute', inset:0, background:'linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 60%)'}}></div>
                <span style={{position:'absolute', top:'10px', left:'10px', background:'rgba(0,0,0,0.75)', backdropFilter:'blur(8px)', color:'#fff', fontSize:'8px', fontWeight:'900', padding:'5px 9px', borderRadius:'20px', border:'1px solid rgba(255,255,255,0.1)'}}>{p.tag}</span>
                <span style={{position:'absolute', bottom:'10px', right:'10px', background:'rgba(15,15,15,0.9)', fontSize:'9px', padding:'4px 8px', borderRadius:'20px', color:'#888', border:'1px solid #222'}}>{p.cat}</span>
              </div>
              <div style={{marginTop:'10px'}}>
                <p style={{fontSize:'12px', fontWeight:'600', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.name}</p>
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'6px'}}><span style={{fontSize:'14px', fontWeight:'900'}}>৳{p.price.toLocaleString()}</span><span style={{fontSize:'10px', color:'#555'}}><span style={{textDecoration:'line-through', marginRight:'4px'}}>৳{p.op.toLocaleString()}</span>★{p.rating}</span></div>
                <div style={{display:'flex', gap:'6px', marginTop:'10px'}}><button onClick={()=>addCart(p,1,p.sizes[0])} style={{flex:1, background:'#fff', color:'#000', border:'none', padding:'9px', borderRadius:'20px', fontSize:'11px', fontWeight:'900', cursor:'pointer'}}>ADD TO CART</button><button onClick={()=>toggleWish(p)} style={{width:'36px', background:wish.find(x=>x.id===p.id)?'#fff':'#1a1a1a', color:wish.find(x=>x.id===p.id)?'#000':'#fff', border:'1px solid #222', borderRadius:'20px', cursor:'pointer'}}>♥</button></div>
              </div>
            </div>
          ))}
        </div>

        {/* BENEFITS + TESTIMONIALS + NEWSLETTER */}
        <div style={{maxWidth:'1100px', margin:'0 auto', padding:'30px 18px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', gap:'12px'}}>
          <div style={{background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'16px'}}><p style={{fontSize:'10px', color:'#666', fontWeight:'900'}}>01</p><b style={{fontSize:'13px'}}>Premium Materials</b><p style={{fontSize:'11px', color:'#666', marginTop:'6px', lineHeight:'1.6'}}>400GSM fleece, YKK zippers, combed cotton.</p></div>
          <div style={{background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'16px'}}><p style={{fontSize:'10px', color:'#666', fontWeight:'900'}}>02</p><b style={{fontSize:'13px'}}>Free Shipping ৳5000+</b><p style={{fontSize:'11px', color:'#666', marginTop:'6px'}}>Dhaka • 2-3 days delivery.</p></div>
          <div style={{background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'16px'}}><p style={{fontSize:'10px', color:'#666', fontWeight:'900'}}>03</p><b style={{fontSize:'13px'}}>Loved by 500+</b><p style={{fontSize:'11px', color:'#666', marginTop:'6px'}}>"Best hoodie in this price" — Rahat, Gulshan</p></div>
        </div>

        <div style={{background:'#0a0a0a', borderTop:'1px solid #111', borderBottom:'1px solid #111', padding:'20px 18px', display:'flex', gap:'10px', alignItems:'center', flexWrap:'wrap'}}>
          <p style={{fontSize:'12px', fontWeight:'800'}}>Get early access to 2026 drops:</p>
          <form onSubmit={e=>{e.preventDefault(); showToast('Subscribed for 2026!'); e.target.reset()}} style={{display:'flex', gap:'8px'}}><input required type="email" placeholder="Email" style={{background:'#111', border:'1px solid #222', borderRadius:'20px', padding:'10px 14px', color:'#fff', fontSize:'12px'}}/><button style={{background:'#fff', color:'#000', borderRadius:'20px', padding:'10px 16px', fontSize:'11px', fontWeight:'900', border:'none', cursor:'pointer'}}>JOIN</button></form>
        </div>
      </>}

      {page==='product' && selected && <div style={{maxWidth:'1000px', margin:'0 auto', padding:'18px'}}>
        <p style={{fontSize:'11px', color:'#555'}}><span onClick={()=>setPage('shop')} style={{cursor:'pointer', color:'#888'}}>← SHOP</span> / {selected.cat} / {selected.name}</p>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'16px'}}>
          <div>
            <div style={{background:'#111', borderRadius:'16px', overflow:'hidden', border:'1px solid #222'}}><img src={mainImg||selected.img} alt={selected.name} style={{width:'100%', aspectRatio:'4/5', objectFit:'cover', filter:'brightness(0.9)'}}/></div>
            <div style={{display:'flex', gap:'8px', marginTop:'10px'}}>{selected.gallery.map((g,i)=><img key={i} src={g} onClick={()=>setMainImg(g)} style={{width:'56px', height:'70px', borderRadius:'10px', objectFit:'cover', cursor:'pointer', border:mainImg===g?'2px solid #fff':'1px solid #222', filter:'brightness(0.9)'}}/> )}</div>
          </div>
          <div>
            <p style={{fontSize:'10px', letterSpacing:'2px', color:'#FF3B30', fontWeight:'900'}}>{selected.cat.toUpperCase()} • {selected.tag}</p>
            <h2 style={{fontSize:'24px', fontWeight:'900', marginTop:'6px'}}>{selected.name}</h2>
            <p style={{marginTop:'10px'}}><b style={{fontSize:'22px'}}>৳{selected.price.toLocaleString()}</b> <span style={{color:'#555', textDecoration:'line-through', fontSize:'12px'}}>৳{selected.op.toLocaleString()}</span> <span style={{background:'#FF3B30', color:'#fff', fontSize:'10px', padding:'3px 8px', borderRadius:'10px', marginLeft:'6px', fontWeight:'900'}}>{Math.round((1-selected.price/selected.op)*100)}% OFF</span></p>
            <p style={{color:'#666', fontSize:'11px', marginTop:'6px'}}>★ {selected.rating} ({selected.reviews} reviews) • Stock: {selected.stock} • BDT ৳</p>
            <p style={{color:'#999', fontSize:'13px', marginTop:'14px', lineHeight:'1.7'}}>{selected.desc} Premium streetwear for 2026. Limited drop, no restock. Contemporary lifestyle and fashion.</p>
            
            <div style={{marginTop:'16px'}}><p style={{fontSize:'11px', fontWeight:'800', letterSpacing:'1px'}}>SIZE</p><div style={{display:'flex', gap:'8px', marginTop:'8px', flexWrap:'wrap'}}>{selected.sizes.map(s=><span key={s} onClick={()=>setSize(s)} style={{padding:'8px 14px', borderRadius:'20px', border:size===s?'1px solid #fff':'1px solid #222', background:size===s?'#fff':'#111', color:size===s?'#000':'#888', fontSize:'12px', fontWeight:'700', cursor:'pointer'}}>{s}</span>)}</div></div>
            <div style={{marginTop:'12px'}}><p style={{fontSize:'11px', fontWeight:'800'}}>COLORS: {selected.colors.join(', ')}</p></div>
            
            <div style={{marginTop:'16px', display:'flex', gap:'10px', alignItems:'center'}}>
              <div style={{display:'flex', alignItems:'center', background:'#111', border:'1px solid #222', borderRadius:'24px', padding:'4
