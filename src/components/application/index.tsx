import { MinusCircleFilled } from "@ant-design/icons";
import React, {MouseEventHandler, useCallback, useState} from "react";
import './style.scss'
export type PropsType = {
  icon: JSX.Element;
  title: string;
  shake: boolean;
  remove: () => void;
}
export const Applicatin: React.FC<PropsType> = (props) => {
  const { icon, title, shake, remove } = props;
  const shortTitle = () => {
    if (title.length > 5) {
      return title.slice(0,4) + '…';
    }
    return title;
  }
  const getTitle = useCallback(shortTitle, [title]);
  return (
    <div className={shake ? 'application shake-animation' : 'application'}
    >
      {shake && <MinusCircleFilled className="minus" onClick={remove}/>}
      <span className="application-icon">{icon}</span>
      <span className="application-title">{getTitle()}</span>
    </div>
  )
}