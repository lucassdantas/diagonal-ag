import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface SocialNetworkProps{
  icon:IconType|ReactNode;
  url:string;
}