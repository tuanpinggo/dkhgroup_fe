import Image from "next/image";

export default function LogoMobile(){
    return(
        <Image
            src="/assets/doc-light.svg"
            width={88}
            height={60}
            alt="DKH Group Logo"
        />
    )
}