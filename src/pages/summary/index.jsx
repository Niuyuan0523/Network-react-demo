import './index.css'
import CustomInput from './components/CustomInput'
// 学习总结静态页
export default function Summary() {
  return (
    <div className="w-full h-full flex flex-col p-26px bg-[#D8E3FF]">
      <div className="w-full h-34px leading-34px mb-13px"> 学习总结静态页</div>
      <div className="w-full h-full flex flex-col bg-[#fff] rounded-[17px] p-17px">
        <div className="text-16px font-bold h-60px w-full text-center leading-60px">今日总结</div>
        <div className="w-full h-full grid grid-cols-2 gap-17px">
          <div className="h-full p-13px rounded-[17px] bg-l p-13px flex flex-col">
            <div className="text-17px font-bold h-24px w-full text-center leading-24px mt-4px">今日总结</div>
            <div className='w-full h-full bg-[#fff] my-13px rounded-[17px] p-13px'>
              111
            </div>
            <CustomInput placeholder='请输入今日总结'/>
          </div>
          <div className="h-full p-13px rounded-[17px] bg-r p-13px flex flex-col">
            <div className="text-17px font-bold h-24px w-full text-center leading-24px mt-4px">明日计划</div>
            <div className='w-full h-[calc(100%-73px)]  my-13px rounded-[17px] p-13px  overflow-y-auto no-bar bg-[#fff]'>
              <div className='h-800px bg-[#fff]'>
                222
              </div>
            </div>
            <CustomInput placeholder='请输入明日计划'/>
          </div>
        </div>
      </div>
    </div>
  )
}
