function Demo() {
  return (
    <div className="page-content">
      <h1>Demo 页面</h1>
      <p>这是默认的 Demo 页面</p>
      <div style={{ 
        background: 'rgba(100, 108, 255, 0.1)', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>欢迎使用 React 应用</h3>
        <p>这里是 Demo 内容展示区域</p>
      </div>
      <div className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg">
  Hello TailwindCSS
</div>
    </div>
  )
}

export default Demo
