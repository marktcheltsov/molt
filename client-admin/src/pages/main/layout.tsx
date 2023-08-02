import { FC, ReactNode, useEffect } from 'react'
import Header from '../../components/header'
import { LoginModal } from '../../components/modals/login-modal'
import { useLoginModal } from '../../hooks/use-login-modal'


interface LayoutProps {
    children: ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => {
    const { isOpen, onOpen  } = useLoginModal()
    useEffect(() => {
        const jwt = localStorage.getItem('token')
        if (!jwt) {
            onOpen()
        }
    }, [isOpen === true])
    
  return (
    <>
    <Header/>
    <LoginModal/>
    <main>
        {children}
    </main>
    </>
  )
}

export default Layout