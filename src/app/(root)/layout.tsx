import { AuthProvider } from '@/context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import {ReactNode} from 'react'

const RootLayout = ({children} : {children:ReactNode}) => {
  return (
    <div>
        <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
      </nav>
        <AuthProvider>
            {children}
        </AuthProvider>

    </div>
  )
}

export default RootLayout