import Image from 'next/image'


export const metadata = {
  title: "Kuwait",
}


export default function Kuwait() {
  return (
    <div>
      <div className="w-full bg-white h-24 bg-no-repeat shadow-xl md:shadow-lg md:rounded-md scale-[1.015] flex flex-row justify-between overflow-clip pr-4 items-center mb-4">
        <a className="sm:w-[15%] w-[30%] h-full" href="/"><div className="bg-[#231f20] h-full flex justify-center items-center">
          <svg aria-hidden="true" className="w-1/3 h-1/3 ml-2 -mr-1 rotate-180" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </a>
        <div className="w-full justify-center items-center flex">
          <h1 className="text-2xl">Kuwait Retailers</h1>
        </div>
      </div>
      <div className='w-full h-64 flex justify-center items-center'>
        <h1 className="text-2xl text-center my-auto">Coming Soon</h1>
      </div>

    </div>
  )
}
