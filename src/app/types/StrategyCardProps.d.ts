import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface StrategyCardProps {
  icon:ReactNode;
  title:string;
  description:string;
  list: {icon:IconType, text:string}[];
  buttonText:string;

}