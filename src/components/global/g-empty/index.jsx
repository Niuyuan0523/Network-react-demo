import defaultEmptyImg from '@/assets/img/common/empty.png'

export default function GEmpty(props) {
  let { img, size = '280px', description } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <img src={img || defaultEmptyImg} alt="empty" style={{ width: size, height: size, objectFit: 'contain' }} />
      <p style={{ color: '#9ca3af', marginTop: '8px' }}>{description}</p>
    </div>
  )
}
