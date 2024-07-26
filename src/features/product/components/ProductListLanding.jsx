import { useState } from 'react'
import img01 from '../../../assets/hero01.png'
import img02 from '../../../assets/hero02.png'
import img03 from '../../../assets/hero03.png'
import img04 from '../../../assets/hero04.png'
import img05 from '../../../assets/hero05.png'
import img06 from '../../../assets/hero06.png'
import img07 from '../../../assets/hero07.png'
import img08 from '../../../assets/libretas01.png'
import img09 from '../../../assets/popular01.png'
import img10 from '../../../assets/popular02.png'
import img11 from '../../../assets/popular03.png'
import img12 from '../../../assets/popular04.png'

const products = [
  { obj: img01, name: 'Producto 01', src: '/src/assets/hero01.png', price: 3000 },
  { obj: img02, name: 'Producto 02', src: '/src/assets/hero02.png', price: 3000 },
  { obj: img03, name: 'Producto 03', src: '/src/assets/hero03.png', price: 3000 },
  { obj: img04, name: 'Producto 04', src: '/src/assets/hero04.png', price: 3000 },
  { obj: img05, name: 'Producto 05', src: '/src/assets/hero05.png', price: 3000 },
  { obj: img06, name: 'Producto 06', src: '/src/assets/hero06.png', price: 3000 },
  { obj: img07, name: 'Producto 07', src: '/src/assets/hero07.png', price: 3000 },
  { obj: img08, name: 'Producto 08', src: '/src/assets/libretas01.png', price: 3000 },
  { obj: img09, name: 'Producto 09', src: '/src/assets/popular01.png', price: 3000 },
  { obj: img10, name: 'Producto 10', src: '/src/assets/popular02.png', price: 3000 },
  { obj: img11, name: 'Producto 11', src: '/src/assets/popular03.png', price: 3000 },
  { obj: img12, name: 'Producto 12', src: '/src/assets/popular04.png', price: 3000 },
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
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestro Productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, i) => (
            <a key={i} data-lightbox="photos" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => selectCuadro(product)}>
           
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.obj}
                    src={product.obj}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
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
                <h1 className="modal-title fs-5" id="exampleModalLabel">{productoSeleccionado.name}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img className='img-fluid' src={productoSeleccionado.obj} alt="" />
                
                <p className='pt-2'><b>Precio:</b> ${productoSeleccionado.price}</p>
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
