import React from "react";
import "./WarningBox.css";

export const WarningBox: React.FC = () => (
  <div className="warning-box">
    <div className="warning-box-text">
      warning 위젯 제목이 길어진 경우 이렇게 표현해야하는가?
    </div>
    <div className="warning-box-close">
      <span className="material-icons-outlined !text-sm cursor-pointer">
        close
      </span>
    </div>
  </div>
);
