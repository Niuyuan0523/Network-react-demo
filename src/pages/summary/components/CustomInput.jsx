import { CameraOutlined,AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
export default function CustomInput(props) {
  let {placeholder} = props
  return(
    <div className="flex items-center w-full h-42px px-13px py-10px bg-[#fff] rounded-[17px]">
      <div className='w-22px h-22px flex items-center justify-center cursor-pointer'>
        <CameraOutlined className='text-[19px]'/>
      </div>
      <div className='flex-1 mx-6px'>
        <Input
          type="text"
          placeholder={placeholder}
          variant="borderless"
          className='w-full h-full outline-none border-0 focus:outline-none resize-none'
          />
      </div>
      <div className='w-22px h-22px flex items-center justify-center cursor-pointer'>

        <AudioOutlined className='text-[19px]' />
      </div>
    </div>
  )
}
