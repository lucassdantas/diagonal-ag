import { SocialNetworkProps } from "@/app/types/SocialNetworkProps";
import { BiLinkExternal } from "react-icons/bi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export const facebook:SocialNetworkProps = {
    icon:FaFacebook, 
    url:'#'
}
export const instagram:SocialNetworkProps = {
    icon:BsInstagram, 
    url:'#'
}
export const linkedin:SocialNetworkProps = {
    icon:BiLinkExternal, 
    url:'#'
}
export const whatsApp:SocialNetworkProps = {
    icon:BsWhatsapp, 
    url:'#'
}

export const allSocialNetworksList = [
  facebook,
  instagram,
  linkedin,
  whatsApp
]