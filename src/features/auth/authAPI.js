export function createUser(userData) {
  return new Promise( async (resolve) => {
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'content-type': 'application/json'
      }
    })
    const data = await response.json()
    resolve({ data })
  });
}

export function checkUser(loginInfo) {
  return new Promise( async (resolve, reject) => {
    const email = loginInfo.email
    const password = loginInfo.password
    const response = await fetch(`http://localhost:8080/users?email=${email}`)
    const data = await response.json()
    if(data.length) {
      if(password === data[0].password) {
        resolve({ data })
      } else {
        reject({ message: 'Credenciales inválidas' })
      }
    } else {
      reject({ message: 'Usuario no válido' })
    }
  });
}

export function updateUser(update) {
  return new Promise( async (resolve) => {
    const response = await fetch(`http://localhost:8080/users/${update.id}`, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    resolve({ data })
  });
}

export function singOut(userId) {
  return new Promise( async (resolve) => {
    resolve({ data: 'success' })
  });
}
