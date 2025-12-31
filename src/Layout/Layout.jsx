import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* 顶部导航 */}
      <header className="w-full h-60px flex items-center justify-between px-24px bg-[#646cff]">
        <div className="logo">My React App</div>
        {/* <nav className="top-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Demo
          </NavLink>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
        </nav> */}
      </header>

      <div className="container">
        {/* 左侧菜单 */}
        <aside className="sidebar">
          <nav className="side-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
              <span className="menu-icon">📊</span>
              <span>Demo111</span>
            </NavLink>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
              <span className="menu-icon">🏠</span>
              <span>Home</span>
            </NavLink>
          </nav>
        </aside>

        {/* 右侧主内容区 */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
