export function fetchAllProducts() {
  return new Promise((resolve) => {
    const response = fetch('http://localhost:8080/products')
    const data = response.json()
    resolve({ data })
  });
}

export function fetchProductById(id) {
  return new Promise((resolve) => {
    const response = fetch(`http://localhost:8080/products/${id}`)
    const data = response.json()
    resolve({ data })
  });
}

export function createProduct(product) {
  return new Promise((resolve) => {
    const response = fetch(`http://localhost:8080/products`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'content-type': 'application/json'
      }
    })
    const data = response.json()
    resolve({ data })
  });
}

export function updateProduct(update) {
  return new Promise((resolve) => {
    const response = fetch(`http://localhost:8080/products/${update.id}`, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = response.json()

    console.log('data desde updateProduct', data)
    resolve({ data })
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  let queryString = ''
  for(let key in filter) {
    const categoryValues = filter[key]
    if(categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for(let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }

  for(let key in pagination) {
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise((resolve) => {
    const response = fetch(`http://localhost:8080/products?${queryString}`)
    const data = response.json()
    const totalItems = response.headers.get('X-Total-Count')
    resolve({ data: { products: data, totalItems: totalItems }})
  });
}
