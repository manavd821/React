import Footer from '../component/Footer.component'
import { Outlet } from 'react-router'
import Header from '../component/Header.component'

export default function Layout() {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}
