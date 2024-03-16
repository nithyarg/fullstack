import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
export default function Layout() {
    return (
      <div className='p-4 flex flex-col'>
        <Header/>
        <Outlet/>
      </div>
    )
}