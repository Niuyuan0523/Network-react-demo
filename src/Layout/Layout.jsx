import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className="w-full h-lvh flex flex-col">
      {/* 顶部导航 */}
      <header className="w-full h-60px flex items-center justify-between px-24px bg-[#646cff]">
        <div className="font-bold text-white text-24px">My React App</div>
        {/* <nav className="top-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Demo
          </NavLink>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
        </nav> */}
      </header>

      <div className="flex flex-1 ">
        {/* 左侧菜单 */}
        <aside className="w-220px shrink-0 bg-[#16213e]">
          <nav className="side-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
              <span className="menu-icon">📊</span>
              <span>Demo111</span>
            </NavLink>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
              <span className="menu-icon">🏠</span>
              <span>Home</span>
            </NavLink>
            <NavLink to="/summary" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
              <span className="menu-icon">🏠</span>
              <span>Summary</span>
            </NavLink>
          </nav>
        </aside>

        {/* 右侧主内容区 */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
