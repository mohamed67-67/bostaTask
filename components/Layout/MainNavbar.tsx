import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import ButtonComp from "../Button";
import NavBarDetails from "../views/NavBarDetails";

export default async function MainNavbar() {
  const user = (await cookies()).get("user");
  return (
    <div className="flex sticky top-0 bg-white w-full px-5 py-2 justify-between items-center shadow border-b border-b-bcolor">
      <Link href="/" className="w-14 rounded-full overflow-hidden">
        <Image
          alt="bosta"
          src="/logo.png"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </Link>
      <div className="flex items-center">
        {user ? (
          <NavBarDetails user={user.value} />
        ) : (
          <ButtonComp
            className="px-3 py-1 text-sm"
            link="/login"
            title="Login"
            dark
          />
        )}
      </div>
    </div>
  );
}
