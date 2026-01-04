import defaultEmptyImg from '@/assets/img/common/update.png'
import './index.css'
export default function GLoading(props) {
  console.log(props)
  return (
    <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50 bg-[rgba(255,255,255,0.5)]'>
      <img className='loading-animate' src={defaultEmptyImg} alt="empty" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
    </div>
  )
}
