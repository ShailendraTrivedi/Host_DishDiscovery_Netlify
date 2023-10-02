// Spin.jsx

import { Spin } from "antd";
const SpinHelper = () => {
  return (
    <>
      <div className="flex h-full w-full justify-center items-center">
        <Spin tip="Loading..." size="large">
          <div />
        </Spin>
      </div>
    </>
  );
};
export default SpinHelper;
