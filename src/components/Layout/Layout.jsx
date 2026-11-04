import { Outlet } from 'react-router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

function Layout() {
  return (
    <div className="site-layout">
      <Header />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout