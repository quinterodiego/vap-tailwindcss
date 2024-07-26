export function addToCart(item) {
  return new Promise( (resolve) => {
    const response = fetch('http://localhost:8080/cart', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = response.json()
    resolve({ data })
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise( (resolve) => {
    const response = fetch(`http://localhost:8080/cart?user=${userId}`)
    const data = response.json()
    resolve({ data })
  });
}

export function updateCart(update) {
  return new Promise( (resolve) => {
    const response = fetch(`http://localhost:8080/cart/${update.id}`, {
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

export function deleteItemFromCart(itemId) {
  return new Promise( (resolve) => {
    const response = fetch(`http://localhost:8080/cart/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = response.json()
    console.log(data)
    resolve({ data: { id: data } })
  });
}

export function resetCart(userId) {
  return new Promise((resolve) => {
    const response = fetchItemsByUserId(userId)
    const items = response.data
    for(let item of items) {
     deleteItemFromCart(item.id)
    }
    resolve({ status: 'success' })
  })
}