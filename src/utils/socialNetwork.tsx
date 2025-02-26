import { SocialNetworkProps } from "@/app/types/SocialNetworkProps";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";

export const facebook:SocialNetworkProps = {
    icon:FaFacebookSquare, 
    url:'#'
}
export const instagram:SocialNetworkProps = {
    icon:BsInstagram, 
    url:'#'
}
export const linkedin:SocialNetworkProps = {
    icon:FaLinkedinIn, 
    url:'#'
}
export const whatsApp:SocialNetworkProps = {
    icon:BsWhatsapp, 
    url:'#'
}

export const allSocialNetworksList = [
  instagram,
  facebook,
  linkedin,
  whatsApp
]