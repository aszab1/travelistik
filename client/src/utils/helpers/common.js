const tokenName = 'TRAVELISTIK-TOKEN'

// This function takes a request object and returns form data as a JS object
export async function formToObj(request){
  const formData = await request.formData()
  console.log(formData)
  return Object.fromEntries(formData.entries())
}

export function setToken(access){
  localStorage.setItem(tokenName, access)
}

export function getToken(){
  return localStorage.getItem(tokenName)
}

export function removeToken(){
  localStorage.removeItem(tokenName)
}


export function activeUser(){
  // Get token from localstorage
  const token = getToken()
  if (!token) return null

  // If token exists
  const b64 = token.split('.')[1]
  const payload = JSON.parse(atob(b64))
  console.log('payload', payload)

  const now = Date.now() / 1000
  const exp = payload.exp
  if (exp > now) {
    return payload.user_id
  }
}
console.log('activeuser', activeUser())
