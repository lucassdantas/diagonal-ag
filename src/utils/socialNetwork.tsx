import { SocialNetworkProps } from "@/app/types/SocialNetworkProps";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";

export const facebook:SocialNetworkProps = {
    icon:FaFacebookSquare, 
    url:'https://www.facebook.com/diagonal.ag'
}
export const instagram:SocialNetworkProps = {
    icon:BsInstagram, 
    url:'https://www.instagram.com/diagonal.ag/'
}
export const linkedin:SocialNetworkProps = {
    icon:FaLinkedinIn, 
    url:'https://www.linkedin.com/company/diagonal-ag'
}
export const whatsApp:SocialNetworkProps = {
    icon:BsWhatsapp, 
    url:'https://api.whatsapp.com/send/?phone=5511914811646'
}

export const allSocialNetworksList = [
  instagram,
  facebook,
  linkedin,
  whatsApp
]