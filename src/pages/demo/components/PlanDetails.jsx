
import { DeleteOutlined } from '@ant-design/icons';
import './PlanDetails.css';
  const difficultyMap = {
    1: '较易',
    2: '容易',
    3: '中等',
    4: '困难',
    5: '较难',
  }
export default function PlanDetails(props) {
    let {className,weekPlanList,removePlan} = props
  return (
    <div className={`${className} h-full main rounded-[15px] p-13px flex flex-col before-icon relative`}>
      <div className='w-full h-27px leading-17px mb-13px z-10'>
        <span className="text-[19px] font-600 text-[#333] mr-11px"
        >学习计划</span>
      </div>
      <div className='w-full h-[calc(100%-40px)] bg-[#fff] rounded-[16px] py-13px px-9px relative flex flex-col z-10'>
        <div className='w-full overflow-hidden overflow-y-auto h-full'>
          <div className='w-full overflow-hidden overflow-y-auto h-full px-4px custom-bar-style'>
              {weekPlanList.map((item, index) => (
                <div key={index} className='w-full bg-[#EFEFFF] text-[13px] text-[#333] px-11px py-8px rounded-[9px] mb-9px flex flex-1'>
                  <div className='w-full leading-[17px] flex items-center'>
                    <span className='font-500 break-words text-[14px]'>{item.activityThemeModuleName}</span>
                    {!item.disabled && item?.weekIndex &&
                      <span
                        className="inline-block box-border px-3px py-1px pt-2px text-12px rounded-[4px] border-[#6365FF] text-[#6365FF] whitespace-nowrap border align-middle ml-6px"
                      >
                        第{item.weekIndex}周
                      </span>
                    }
                    {!item.disabled && item?.difficulty &&
                      <span
                        class="inline-block box-border px-3px py-1px pt-2px text-12px rounded-[4px] whitespace-nowrap border border-[#6365FF] text-[#6365FF] align-middle ml-6px"
                      >
                        {difficultyMap[item.difficulty]}
                      </span>
                    }

                  </div>
                  <div className="w-17px flex-cc cursor-pointer" onClick={() => props.removePlan(item.activityThemeModuleId)}>
                    <DeleteOutlined />
                  </div>
                </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
