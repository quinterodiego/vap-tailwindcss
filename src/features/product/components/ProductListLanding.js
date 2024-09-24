import React, { useState } from 'react'
import img01 from '../../../assets/productos/alcancia.jpg'
import img02 from '../../../assets/productos/llavero.jpg'
import img03 from '../../../assets/productos/valija.jpg'

const products = [
  { 
    obj: img01, 
    name: 'Alcancias plásticas', 
    src: '/src/assets/productos/alcancia.jpg', 
    price: 1000,
    description: 'Sticker personalizado en todo su contorno',
    dimensions: '9cm de alto x 9cm de diámetro',
    colors: 'Pastel - Fuertes',
    stock: 'Disponible'
  },
  { 
    obj: img02, 
    name: 'Llavero de acrilico con cadena',
    src: '/src/assets/productos/llavero.jpg', 
    price: 800,
    description: 'Imagen de ambos lados. Acompaña señalador personalizado',
    dimensions: 'Imágenes 6cm de alto x 4cm de ancho - Llavero 12cm - Señalador 14cm',
    colors: 'Según imagen',
    stock: 'Disponible' 
  },
  { 
    obj: img03, 
    name: 'Valijas medianas', 
    src: '/src/assets/productos/valija.jpg', 
    price: 1200,
    description: 'Sticker personalizado sobre un lado',
    dimensions: '14cm de ancho x 10cm de alto (sin manija) x 4cm de profundidad - Altura total con manija 13cm',
    colors: 'Pastel - Clásicos - Transparente',
    stock: 'Disponible' 
  },
  // { obj: img01, name: 'producto 01' },
  // { obj: img01, name: 'producto 01' },
  // { obj: img01, name: 'producto 01' },
  // { obj: img01, name: 'producto 01' },
  // { obj: img01, name: 'producto 01' },
]

export default function ProductListLanding() {

  const [productoSeleccionado, setProductoSeleccionado] = useState({})

  const selectCuadro = (producto) => {
    console.log(producto)
    setProductoSeleccionado(producto)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-500">Nuestro Productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, i) => (
            <a key={i} data-lightbox="photos" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => selectCuadro(product)} className='cursor-pointer'>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.obj}
                    src={product.obj}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {/* <a href={product.href}> */}
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      {/* </a> */}
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="modal fade pt-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 font-bold text-gray-500" id="exampleModalLabel">{productoSeleccionado.name}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img className='img-fluid' src={productoSeleccionado.obj} alt="" />
                
                <p className='pt-2'><b>Precio:</b> ${productoSeleccionado.price}</p>
                <p className='pt-2'><b>Detalles:</b> {productoSeleccionado.description}</p>
                <p className='pt-2'><b>Dimensiones:</b> {productoSeleccionado.dimensions}</p>
                <p className='pt-2'><b>Colores:</b> {productoSeleccionado.colors}</p>
                <p className='pt-2'><b>Stock:</b> {productoSeleccionado.stock}</p>
                <a href="https://api.whatsapp.com/send?phone=5491553297491&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos." className="hover:opacity-75" target="_blank" rel="noreferrer">
                  <p className='p-2 text-center text-xl' style={{ color: '#25d366' }}>Consultar <i className="fa-brands fa-whatsapp"></i></p>
                </a>
              </div>
              <div className="modal-footer">
                <button type="button" className="" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
