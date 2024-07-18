import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import about from '../assets/about.png'

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white my-8 px-6 py-8 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary">Transformando momentos especiales en recuerdos inolvidables</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre Nosotros</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Verde Agua Personalizados: Donde la Creatividad y la Personalización se Encuentran
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={about}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-4 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <i className="text-primary fa-solid fa-hourglass-start mt-2"></i>
                  <span>
                    <strong className="font-semibold text-gray-900">El Comienzo.</strong> Con una pequeña inversión y un gran sueño, Laura y Mateo comenzaron a diseñar anotadores, etiquetas candy bar, y tarjetas personales desde la comodidad de su hogar. Su primer cliente fue una amiga cercana que deseaba hacer de la fiesta de cumpleaños de su hija un evento inolvidable. La atención al detalle y la calidad de los productos hicieron que la voz se corriera rápidamente.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" /> */}
                  <i className="text-primary fa-solid fa-chart-simple mt-2"></i>
                  <span>
                    <strong className="font-semibold text-gray-900">Crecimiento y Diversificación</strong> A medida que aumentaba la demanda, Verde Agua Personalizados expandió su catálogo para incluir vinilos decorativos, souvenirs personalizados, y una línea completa de productos escolares. Cada artículo es diseñado con amor y cuidado, asegurando que cada cliente reciba exactamente lo que imaginó, o incluso algo mejor.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <i className="text-primary fa-regular fa-handshake mt-2"></i>
                  <span>
                    <strong className="font-semibold text-gray-900">Nuestro Compromiso</strong> En Verde Agua Personalizados, creemos que cada ocasión merece un toque especial. Nos dedicamos a escuchar a nuestros clientes y trabajar mano a mano con ellos para crear productos que no solo cumplan, sino que superen sus expectativas. Nuestra misión es brindar productos únicos que reflejen la personalidad y el estilo de cada individuo.
                  </span>
                </li>
              </ul>
              {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
