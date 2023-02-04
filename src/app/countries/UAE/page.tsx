import Image from 'next/image'
import { Inter } from '@next/font/google'
import UAEFull from '../../../../public/UAE-Full.png'

const inter = Inter({ subsets: ['latin'] })

export default function UAE() {
  return (
    <div>
      <div className="text-center">
      <Image
            alt="UAE flag"
            src={UAEFull}
            width={200}
            height={100}
            style={{
            maxWidth: '100%',
            height: 'auto',
            }}
            className="mx-auto lg:mx-0 mb-4"
             />
      </div>
      <h1>You can find Contigo Products in the UAE at:</h1>

    </div>
  )
}
