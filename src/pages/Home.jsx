function Home() {
  return (
    <div className="page-content">
      <h1>Home 页面</h1>
      <p>欢迎来到首页</p>
      <div style={{ 
        background: 'rgba(100, 108, 255, 0.1)', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>首页内容</h3>
        <p>这里是 Home 页面的内容展示区域</p>
      </div>
    </div>
  )
}

export default Home
