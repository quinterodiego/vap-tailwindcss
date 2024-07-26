export function createOrder(order) {
  return new Promise((resolve) => {
    const response = fetch('http://localhost:8080/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = response.json()
    resolve({ data })
  });
}

export function updateOrder(order) {
  return new Promise((resolve) => {
    const response = fetch(`http://localhost:8080/orders/${order.id}`, {
      method: 'PATCH',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = response.json()
    resolve({ data })
  });
}

export function fetchAllOrders(sort, pagination) {
  let queryString = ''
  
  for(let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }
  
  for(let key in pagination) {
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise((resolve) => {
    const response = fetch(`http://localhost:8080/orders?${queryString}`)
    const data = response.json()
    const totalOrders = response.headers.get('X-Total-Count')
    resolve({ data: { orders: data, totalOrders: +totalOrders }})
  });
}