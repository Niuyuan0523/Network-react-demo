import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Home 页面</h1>
      <p>欢迎来到首页</p>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/" style={{ 
          padding: '10px 20px', 
          backgroundColor: '#646cff', 
          color: 'white', 
          textDecoration: 'none',
          borderRadius: '8px'
        }}>
          返回 Demo 页面
        </Link>
      </nav>
    </div>
  )
}

export default Home
