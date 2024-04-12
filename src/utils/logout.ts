
export async function signOut() {
    
    const res = await fetch(`http://localhost:1323/admin/logout`,{ method: 'POST',
    credentials:'include',})
    return res.json()
  }