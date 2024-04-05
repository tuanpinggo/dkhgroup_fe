import Image from "next/image";
import Link from "next/link";
export default function DefaultLogo(){
    return(
            <Link href="/">
                <Image
                    src="/assets/doc.svg"
                    width={89}
                    height={60}
                    alt="Dkhgroup logo"
                />
            </Link>
    )
}