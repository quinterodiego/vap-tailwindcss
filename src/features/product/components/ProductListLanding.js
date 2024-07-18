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
  { obj: img01, name: 'producto 01', price: 3000 },
  { obj: img02, name: 'producto 02', price: 3000 },
  { obj: img03, name: 'producto 03', price: 3000 },
  { obj: img04, name: 'producto 04', price: 3000 },
  { obj: img05, name: 'producto 05', price: 3000 },
  { obj: img06, name: 'producto 06', price: 3000 },
  { obj: img07, name: 'producto 07', price: 3000 },
  { obj: img08, name: 'producto 08', price: 3000 },
  { obj: img09, name: 'producto 09', price: 3000 },
  { obj: img10, name: 'producto 10', price: 3000 },
  { obj: img11, name: 'producto 11', price: 3000 },
  { obj: img12, name: 'producto 12', price: 3000 },
  // { obj: img01, name: 'producto 01' },
  // { obj: img01, name: 'producto 01' },
  // { obj: img01, name: 'producto 01' },
  // { obj: img01, name: 'producto 01' },
  // { obj: img01, name: 'producto 01' },
]

export default function ProductListLanding() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestro Productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, i) => (
            <div key={i} className="group relative">
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
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
