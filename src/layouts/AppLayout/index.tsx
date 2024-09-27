import { FC, PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CartModal } from '@/components/CartModal'
import './index.scss'
import { App } from '@/App'
import { ScrollToTop } from '@/components/ScrollToTop'

export const AppLayout: FC<PropsWithChildren> = () => {
  return (
    <App>
      <ScrollToTop>
        <div className="app-layout">
          <Header />
          <Outlet />
          <Footer />
          <CartModal />
        </div>
      </ScrollToTop>
    </App>
  )
}
