import { Link } from 'react-router-dom'

function Demo() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Demo 页面</h1>
      <p>这是默认的 Demo 页面</p>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/home" style={{ 
          padding: '10px 20px', 
          backgroundColor: '#646cff', 
          color: 'white', 
          textDecoration: 'none',
          borderRadius: '8px'
        }}>
          前往 Home 页面
        </Link>
      </nav>
    </div>
  )
}

export default Demo
