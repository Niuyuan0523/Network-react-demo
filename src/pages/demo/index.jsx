import { useState } from 'react';
// import { Button } from 'antd';
import PlanContent from './components/PlanContent';
const subjectList = [
  { sysSubjectId: 1, sysSubjectName: '语文' },
  { sysSubjectId: 2, sysSubjectName: '数学' },
  { sysSubjectId: 3, sysSubjectName: '英语' },
];

function DemoIndex() {
  const [checkedSubjectId, setCheckedSubjectId] = useState(1);

  function changeSubject(sysSubjectId) {
    setCheckedSubjectId(sysSubjectId);
    console.log(sysSubjectId);
  }
  return (
    <div className="w-full h-lvh p-26px bg-[#D8E3FF]">
        <div className="w-full h-34px mb-17px">
            <span className="text-[17px] text-[#333] font-600">周计划</span>
        </div>
        <div  className="w-full h-[calc(100%-52px)] bg-[#EBF2FF] rounded-[17px] border border-[#FFFFFF] flex-1 flex p-17px">
            {/* 科目列表 */}
            <div
                className="w-[48px] overflow-y-auto no-bar border-box px-7px"
            >
                {subjectList.map((item) => (
                <div key={item.sysSubjectId}
                    // className="text-[17px] text-[#666] relative cursor-pointer mt-12px mb-24px"
                    onClick={() => changeSubject(item.sysSubjectId)}
                    className={`text-[17px] text-[#666] relative cursor-pointer mt-12px mb-24px ${checkedSubjectId === item.sysSubjectId ? 'is-active !text-[#333] font-600' : ''}`}
                >
                    <div className="relative z-1">{item.sysSubjectName}</div>
                </div>
                ))}
            </div>
            {/* 内容区域  */}
            <div className="flex-1 w-0 h-full ml-22px relative">
                <PlanContent sysSubjectId={checkedSubjectId} />
            </div>
        </div>
    </div>
  )
}

export default DemoIndex
