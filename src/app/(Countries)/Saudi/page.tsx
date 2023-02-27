import Image from 'next/image'

import AmazonLogo from '../../../../public/saudi-logos/AmazonLogo.png'
import JarirLogo from '../../../../public/saudi-logos/Jarir-Logo.png'

const locationList = [
  {
    name: 'Jarir Bookstore',
    url: 'https://www.jarir.com/sa-en/catalogsearch/result?search=Contigo',
    logo: JarirLogo
  },
  {
    name: 'Amazon',
    url: 'https://www.amazon.sa/-/en/Contigo/b/ref=bl_dp_s_web_20234293031?ie=UTF8&node=20234293031&field-lbr_brands_browse-bin=Contigo',
    logo: AmazonLogo
  }

]

export const metadata = {
  title: "Saudi Arabia",
}


export default function Saudi() {
  return (
    <div>
      <div className="w-full bg-white h-24 bg-no-repeat shadow-xl md:shadow-lg md:rounded-md scale-[1.015] flex flex-row justify-between overflow-clip pr-4 items-center mb-4">
        <a className="sm:w-[15%] w-[30%] h-full" href="/"><div className="bg-[#231f20] h-full flex justify-center items-center">
          <svg aria-hidden="true" className="w-1/3 h-1/3 ml-2 -mr-1 rotate-180" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </a>
        <div className="w-full justify-center items-center flex">
          <h1 className="text-2xl">Saudi Retailers</h1>
        </div>
      </div>
      <div className='grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-cols-max px-4 pb-6'>

        {locationList.map((location, index) => (
          <div key={index} className="shadow-lg bg-white rounded-md text-center flex flex-col justify-center items-center overflow-clip md:hover:shadow-2xl md:hover:-translate-y-0.5 md:hover:scale-[1.01] transition-all ease-in-out">
            <div className="py-4">
              <Image
                alt={location.name}
                src={location.logo}
                width={200}
                height={100}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                className="mx-auto lg:mx-0 mb-4" />
              <h1 className="text-xl">{location.name}</h1>

            </div>
            {location.url != null ?
              <a className="w-full" href={location.url}><button className="w-full shadow-md md:w-[80%] p-4 bg-[#231f20] md:rounded-md md:mb-4 md:mx-4 mt-2 text-gray-100 text-lg md:hover:bg-zinc-600 transition-all ease-in-out">Shop Online</button></a> :
              <a className="w-full"><button className="w-full md:w-[80%] p-4 bg-white md:rounded-md md:mb-4 md:mx-4 mt-2 text-white"></button></a>}
          </div>
        ))}
      </div>

    </div>
  )
}
