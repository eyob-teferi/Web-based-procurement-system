
export async function signOut() {
    
    const res = await fetch(`http://localhost:1323/admin/logout`,{ method: 'POST',
    credentials:'include',})
    return res.json()
  }
  
  export async function signOutUser() {
    
    const res = await fetch(`http://localhost:1323/user/logout`,{ method: 'POST',
    credentials:'include',})
    return res.json()
  }
  export async function signOutDepartment() {
    
    const res = await fetch(`http://localhost:1323/department/logout`,{ method: 'POST',
    credentials:'include',})
    return res.json()
  }