export function fetchLoggedInUserOrders(userId) {
  return new Promise((resolve) => {
    console.log(userId)
    const response = fetch(`http://localhost:8080/orders/?user.id=${userId}`)
    const data = response.json()
    resolve({ data })
  });
}

export function fetchLoggedInUser(userId) {
  return new Promise((resolve) => {
    console.log(userId)
    const response = fetch(`http://localhost:8080/users/${userId}`)
    const data = response.json()
    resolve({ data })
  });
}

export function updateUser(update) {
  return new Promise((resolve) => {
    const response = fetch(`http://localhost:8080/users/${update.id}`, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = response.json()
    resolve({ data })
  });
}