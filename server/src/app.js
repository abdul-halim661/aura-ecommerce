import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const API = "https://aura-ecommerce-ww1b.onrender.com/api/products"

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ background: '#0a0a0a', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>AURA.STORE</h1>
      <p>Data coming from {API}</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
        {products.map(p => (
          <div key={p.id} style={{ background: '#1a1a1a', padding: '15px', borderRadius: '10px' }}>
            <img src={p.image} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '10px' }}>{p.name}</h3>
            <p>৳ {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App