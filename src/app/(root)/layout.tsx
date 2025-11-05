import { AuthProvider } from '@/context/AuthContext'
import {ReactNode} from 'react'

const RootLayout = ({children} : {children:ReactNode}) => {
  return (
    <div>
        <AuthProvider>
            {children}
        </AuthProvider>

    </div>
  )
}

export default RootLayout