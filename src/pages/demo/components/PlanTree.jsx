import React, { useState } from 'react';
import { Tree } from 'antd';
export default function PlanTree(props) {
  let { className, weekPlanList,onCheckChange } = props;
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const onCheck = checkedKeysValue => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
    onCheckChange(checkedKeysValue);
  };
  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };
  return (
    <div className={`${className} h-full rounded-[15px] bg-[#fff] flex flex-col`}>
      <div className="w-full h-51px p-15px font-600 text-15px border-b-[1px] border-[#eee]">
        请选择本周学习任务
      </div>
      <div className="w-full h-full overflow-hidden overflow-y-auto px-4px custom-bar-style">
        <Tree
        fieldNames={{ title: 'activityThemeModuleName',key:'activityThemeModuleId' }}
        checkable treeData={weekPlanList}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
      />
      </div>
    </div>
  );
}
