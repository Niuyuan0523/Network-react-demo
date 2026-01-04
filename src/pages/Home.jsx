import GEmpty from '@global/g-empty/index.jsx'
import GLoading from '@global/g-loading/index.jsx'
import { useState } from 'react';
import { message } from 'antd'
function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <div className="page-content">
      {loading && <GLoading />}
      <h1>Home 页面</h1>
      <p>欢迎来到首页</p>
      <div style={{
        background: 'rgba(100, 108, 255, 0.1)',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3 onClick={() => { message.info('This is a normal message'); }}>首页内容</h3>
        <p>这里是 Home 页面的内容展示区域</p>
        <GEmpty description="暂无数据"/>
      </div>
    </div>
  )
}

export default Home
