import React from "react";
import { useState } from "react";
const ZipcodeForm = () => {
  const [inputValue, setInputValue] = useState("66952");

  return (
    <form
      onSubmit={(event) => {
        // 阻止默认的表单提交行为
        event.preventDefault();

        // 在此处处理表单提交事件，例如提交表单数据等
        console.log(inputValue);
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          // 更新状态变量
          setInputValue(event.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ZipcodeForm;
