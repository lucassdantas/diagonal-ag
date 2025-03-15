import { SocialNetworkProps } from "@/app/types/SocialNetworkProps";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export const FacebookIcon = ({className=''}:{className?:string}) => {
  return(
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.90939 0.789551C3.18983 0.789551 0.956177 3.0232 0.956177 5.74277V28.2574C0.956177 30.977 3.18983 33.2106 5.90939 33.2106H28.424C31.1436 33.2106 33.3772 30.977 33.3772 28.2574V5.74277C33.3772 3.0232 31.1436 0.789551 28.424 0.789551H5.90939ZM5.90939 3.49131H28.424C29.6832 3.49131 30.6755 4.48355 30.6755 5.74277V28.2574C30.6755 29.5166 29.6832 30.5088 28.424 30.5088H22.5702V21.503H25.8348C26.2887 21.503 26.6725 21.1635 26.7284 20.7132L27.0661 18.0115C27.0985 17.7557 27.0173 17.4989 26.8462 17.3044C26.676 17.1108 26.431 17.0001 26.1726 17.0001H22.5702V13.848C22.5702 12.8547 23.378 12.0469 24.3714 12.0469H26.1726C26.6697 12.0469 27.0731 11.6443 27.0731 11.1463V8.1068C27.0731 7.6403 26.7173 7.25116 26.2535 7.20974C26.2003 7.20523 24.9297 7.09364 23.3213 7.09364C19.3524 7.09364 17.1667 9.44974 17.1667 13.7284V17.0001H13.5644C13.0672 17.0001 12.6638 17.4026 12.6638 17.9007V20.6024C12.6638 21.1004 13.0672 21.503 13.5644 21.503H17.1667V30.5088H5.90939C4.65017 30.5088 3.65793 29.5166 3.65793 28.2574V5.74277C3.65793 4.48355 4.65017 3.49131 5.90939 3.49131Z" fill="#B581EA"/>
    </svg>
  )
}

export const LinkedinIcon = ({className=''}:{className?:string}) => {
  return(
    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.07602 0.789551C2.35629 0.789551 0.122803 3.02304 0.122803 5.74277V28.2574C0.122803 30.9771 2.35629 33.2106 5.07602 33.2106H27.5906C30.3104 33.2106 32.5439 30.9771 32.5439 28.2574V5.74277C32.5439 3.02304 30.3104 0.789551 27.5906 0.789551H5.07602ZM5.07602 3.49131H27.5906C28.8515 3.49131 29.8421 4.48191 29.8421 5.74277V28.2574C29.8421 29.5182 28.8515 30.5088 27.5906 30.5088H5.07602C3.81516 30.5088 2.82456 29.5182 2.82456 28.2574V5.74277C2.82456 4.48191 3.81516 3.49131 5.07602 3.49131ZM9.46285 7.60726C8.12819 7.60726 7.32748 8.40734 7.32748 9.46823C7.32748 10.5363 8.12788 11.3398 9.32565 11.3398C10.6603 11.3398 11.454 10.5363 11.454 9.46823C11.454 8.40915 10.6606 7.60726 9.46285 7.60726ZM7.44005 13.3309V24.2048H11.3555V13.3309H7.44005ZM14.592 13.3309V24.2048H18.5074V18.256C18.5074 16.4926 19.7702 16.2332 20.1503 16.2332C20.5303 16.2332 21.5434 16.6133 21.5434 18.256V24.2048H25.3392V18.256C25.3392 14.85 23.8163 13.3309 21.9233 13.3309C20.0303 13.3309 19.0171 13.9609 18.5074 14.8506V13.3309H14.592Z" fill="#B581EA"/>
    </svg>
  )
}

export const InstagramIcon = ({className=''}:{className?:string}) => {
  return(
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9.79534 0.789551C4.83778 0.789551 0.78949 4.83784 0.78949 9.7954V24.2048C0.78949 29.1623 4.83778 33.2106 9.79534 33.2106H24.2047C29.1623 33.2106 33.2105 29.1623 33.2105 24.2048V9.7954C33.2105 4.83784 29.1623 0.789551 24.2047 0.789551H9.79534ZM9.79534 3.49131H24.2047C27.7018 3.49131 30.5088 6.29827 30.5088 9.7954V24.2048C30.5088 27.7019 27.7018 30.5088 24.2047 30.5088H9.79534C6.29821 30.5088 3.49124 27.7019 3.49124 24.2048V9.7954C3.49124 6.29827 6.29821 3.49131 9.79534 3.49131ZM26.4562 6.19306C26.0979 6.19306 25.7543 6.33538 25.5009 6.58872C25.2476 6.84206 25.1053 7.18566 25.1053 7.54394C25.1053 7.90221 25.2476 8.24581 25.5009 8.49915C25.7543 8.75249 26.0979 8.89481 26.4562 8.89481C26.8144 8.89481 27.158 8.75249 27.4114 8.49915C27.6647 8.24581 27.807 7.90221 27.807 7.54394C27.807 7.18566 27.6647 6.84206 27.4114 6.58872C27.158 6.33538 26.8144 6.19306 26.4562 6.19306ZM17 7.99423C14.1106 7.99423 11.7726 9.12638 10.2491 10.8402C8.72574 12.5541 7.99417 14.7861 7.99417 17.0001C7.99417 19.214 8.72574 21.4461 10.2491 23.1599C11.7726 24.8738 14.1106 26.0059 17 26.0059C19.8894 26.0059 22.2275 24.8738 23.7509 23.1599C25.2743 21.4461 26.0059 19.214 26.0059 17.0001C26.0059 14.7861 25.2743 12.5541 23.7509 10.8402C22.2275 9.12638 19.8894 7.99423 17 7.99423ZM17 10.696C19.214 10.696 20.7034 11.4776 21.7316 12.6344C22.7599 13.7911 23.3041 15.3865 23.3041 17.0001C23.3041 18.6136 22.7599 20.209 21.7316 21.3658C20.7034 22.5226 19.214 23.3042 17 23.3042C14.7861 23.3042 13.2967 22.5226 12.2684 21.3658C11.2402 20.209 10.6959 18.6136 10.6959 17.0001C10.6959 15.3865 11.2402 13.7911 12.2684 12.6344C13.2967 11.4776 14.7861 10.696 17 10.696Z" fill="#B581EA"/>
    </svg>
  )
}

export const WhatsappIcon = ({className=''}:{className?:string}) => {
  return(
    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16.5583 0.789551C7.64732 0.789551 0.405973 7.98994 0.405973 16.8505C0.405973 20.0549 1.44461 22.9891 3.06566 25.4987L0.28949 33.2106L8.92863 30.788C11.2195 32.0331 13.7627 32.9114 16.5583 32.9114C25.4692 32.9114 32.7105 25.711 32.7105 16.8505C32.7105 7.98994 25.4692 0.789551 16.5583 0.789551ZM16.5583 3.26046C24.1199 3.26046 30.2256 9.33157 30.2256 16.8505C30.2256 24.3694 24.1199 30.4405 16.5583 30.4405C13.9665 30.4405 11.5689 29.7166 9.49163 28.4715L9.03541 28.1916L4.24991 29.5235L5.80301 25.2381L5.42444 24.7168C3.83251 22.4872 2.89094 19.7847 2.89094 16.8505C2.89094 9.33157 8.99658 3.26046 16.5583 3.26046ZM10.5012 8.20228C10.2197 8.20228 9.75372 8.31811 9.35574 8.7814C8.96746 9.23505 7.86087 10.345 7.86087 12.6036C7.86087 14.8525 9.39456 17.0339 9.60812 17.3427C9.82167 17.6516 12.627 22.2749 16.9174 24.2632C17.9366 24.7362 18.7326 25.0161 19.3538 25.2284C20.3828 25.5759 21.3146 25.5276 22.0524 25.4118C22.8775 25.2767 24.5859 24.3018 24.945 23.2304C25.2945 22.1591 25.3042 21.2421 25.1877 21.0491C25.0906 20.856 24.7994 20.7402 24.3723 20.5182C23.9452 20.2866 21.8388 19.1766 21.4505 19.0318C21.0623 18.8677 20.7711 18.8002 20.4798 19.2538C20.1983 19.7171 19.383 20.7499 19.1306 21.0491C18.8782 21.358 18.6355 21.3966 18.2084 21.1649C17.7716 20.9333 16.3932 20.4507 14.7625 18.887C13.4909 17.6709 12.627 16.1748 12.3843 15.7115C12.1319 15.2482 12.3552 15.0069 12.5687 14.7849C12.7629 14.5726 12.9958 14.2444 13.2094 13.9742C13.4229 13.7136 13.4909 13.5109 13.6365 13.2117C13.7821 12.9028 13.7141 12.6325 13.6074 12.4106C13.4909 12.1789 12.6367 9.92034 12.2872 9.0034C11.9378 8.11542 11.5786 8.23124 11.3165 8.22159C11.0739 8.20228 10.7826 8.20228 10.5012 8.20228Z" fill="#B581EA"/>
    </svg>
  )
}



export const facebook:SocialNetworkProps = {
    icon:FacebookIcon, 
    url:'https://www.facebook.com/diagonal.ag'
}
export const instagram:SocialNetworkProps = {
    icon:InstagramIcon, 
    url:'https://www.instagram.com/diagonal.ag/'
}
export const linkedin:SocialNetworkProps = {
    icon:LinkedinIcon, 
    url:'https://www.linkedin.com/company/diagonal-ag'
}
export const whatsApp:SocialNetworkProps = {
    icon:WhatsappIcon, 
    url:'https://api.whatsapp.com/send/?phone=5511914811646'
}
export const whatsAppAlternativeIcon:SocialNetworkProps = {
    icon:BsWhatsapp, 
    url:'https://api.whatsapp.com/send/?phone=5511914811646'
}

export const allSocialNetworksList = [
  instagram,
  facebook,
  linkedin,
  whatsApp
]


