import React, { useEffect, useState } from 'react'

const API = 'http://localhost:5000/api/items'

export default function App() {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [editing, setEditing] = useState(null)

  const load = async () => {
    const res = await fetch(API)
    setItems(await res.json())
  }

  useEffect(() => { load() }, [])

  const createItem = async (e) => {
    e.preventDefault()
    await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, description }) })
    setName('')
    setDescription('')
    load()
  }

  const startEdit = (item) => {
    setEditing(item)
    setName(item.name)
    setDescription(item.description || '')
  }

  const saveEdit = async (e) => {
    e.preventDefault()
    await fetch(`${API}/${editing._id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, description }) })
    setEditing(null)
    setName('')
    setDescription('')
    load()
  }

  const remove = async (id) => {
    if (!window.confirm('Delete item?')) return
    await fetch(`${API}/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div style={{ maxWidth: 720, margin: '24px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>MERN CRUD</h1>

      <form onSubmit={editing ? saveEdit : createItem} style={{ marginBottom: 16 }}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required style={{ padding:8, width:'40%', marginRight:8 }} />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} style={{ padding:8, width:'40%', marginRight:8 }} />
        <button style={{ padding:8 }}>{editing ? 'Save' : 'Create'}</button>
        {editing && <button type="button" onClick={() => { setEditing(null); setName(''); setDescription('') }} style={{ marginLeft:8 }}>Cancel</button>}
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(it => (
          <li key={it._id} style={{ padding:12, border:'1px solid #ddd', marginBottom:8, borderRadius:6 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <strong>{it.name}</strong>
                <div style={{ color:'#555' }}>{it.description}</div>
              </div>
              <div>
                <button onClick={() => startEdit(it)} style={{ marginRight:8 }}>Edit</button>
                <button onClick={() => remove(it._id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
