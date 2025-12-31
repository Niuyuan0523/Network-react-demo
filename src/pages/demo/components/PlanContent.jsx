import React, { useState } from 'react';
import PlanDetails from './PlanDetails';
import PlantTree from './PlanTree';
const weekPlanList = [
  {
    "activityStudentWeekPlanId": 159,
    "activityThemeModuleId": 11416,
    "activityThemeModuleName": "前备知识",
    "weekIndex": null,
    "difficulty": 3
  },
  {
    "activityStudentWeekPlanId": 161,
    "activityThemeModuleId": 11420,
    "activityThemeModuleName": "精研真题（一）",
    "weekIndex": 4,
    "difficulty": 4
  },
  {
    "activityStudentWeekPlanId": 149,
    "activityThemeModuleId": 11424,
    "activityThemeModuleName": "精研真题（二）",
    "weekIndex": 4,
    "difficulty": 4
  },
  {
    "activityStudentWeekPlanId": 151,
    "activityThemeModuleId": 11428,
    "activityThemeModuleName": "辨析信息，读懂选项（一）",
    "weekIndex": null,
    "difficulty": 4
  },
  {
    "activityStudentWeekPlanId": 153,
    "activityThemeModuleId": 11432,
    "activityThemeModuleName": "辨析信息，读懂选项（二）",
    "weekIndex": null,
    "difficulty": 4
  },
  {
    "activityStudentWeekPlanId": 155,
    "activityThemeModuleId": 11436,
    "activityThemeModuleName": "信息类阅读的重要文体知识(上)",
    "weekIndex": 2,
    "difficulty": 3
  },
  {
    "activityStudentWeekPlanId": 157,
    "activityThemeModuleId": 11440,
    "activityThemeModuleName": "信息类阅读的重要文体知识(下)",
    "weekIndex": 3,
    "difficulty": 5
  },
  {
    "activityStudentWeekPlanId": 158,
    "activityThemeModuleId": 11444,
    "activityThemeModuleName": "信息类阅读选择题与变式练习(上)",
    "weekIndex": 3,
    "difficulty": 3
  },
  {
    "activityStudentWeekPlanId": 160,
    "activityThemeModuleId": 11448,
    "activityThemeModuleName": "信息类阅读选择题与变式练习(下)",
    "weekIndex": 4,
    "difficulty": null
  },
  {
    "activityStudentWeekPlanId": 162,
    "activityThemeModuleId": 11452,
    "activityThemeModuleName": "信息类阅读主观题核心考法与解法(上)",
    "weekIndex": 4,
    "difficulty": 4
  },
  {
    "activityStudentWeekPlanId": 150,
    "activityThemeModuleId": 11456,
    "activityThemeModuleName": "信息类阅读主观题核心考法与解法(中)",
    "weekIndex": 4,
    "difficulty": 4
  },
  {
    "activityStudentWeekPlanId": 152,
    "activityThemeModuleId": 11460,
    "activityThemeModuleName": "信息类阅读主观题核心考法与解法(下)",
    "weekIndex": 4,
    "difficulty": 3
  },
  {
    "activityStudentWeekPlanId": 154,
    "activityThemeModuleId": 11464,
    "activityThemeModuleName": "信息类阅读综合练习(上)",
    "weekIndex": null,
    "difficulty": 4
  },
  {
    "activityStudentWeekPlanId": 156,
    "activityThemeModuleId": 11468,
    "activityThemeModuleName": "信息类阅读综合练习(下)",
    "weekIndex": null,
    "difficulty": 4
  }
]
export default function PlanContent(props) {
  console.log(props);
  const [planList, setPlanList] = useState(weekPlanList);
  const handleCheckChange = (moduleIds) => {
    setPlanList(prevList =>
      prevList.map(item => ({
        ...item,
        checked: moduleIds.includes(item.activityThemeModuleId)
      }))
    );
  };
  const removePlan = (moduleId) => {
    setPlanList(prevList => prevList.map(item => ({ ...item, checked: item.activityThemeModuleId === moduleId ? false : item.checked })));
  };
  const checkedList = planList.filter(item => item.checked);
  return (<div className="w-full h-full flex flex-1">
    <PlantTree className='min-w-363px w-[calc(35%)] mr-17px' weekPlanList={planList} onCheckChange={handleCheckChange}/>
    <PlanDetails className='w-[calc(47%)] grow'weekPlanList={checkedList} removePlan={removePlan}/>
  </div>);
}
