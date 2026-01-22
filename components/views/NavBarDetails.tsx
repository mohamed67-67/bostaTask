"use client";

import { clearCart } from "@/state/cartSlice";
import { RootState } from "@/state/store";
import { deleteCookie } from "cookies-next/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function NavBarDetails({ user }: { user: string }) {
  const cartstate = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    localStorage.clear();
    dispatch(clearCart());
    deleteCookie("user");
    router.push("/");
    router.refresh();
  };
  return (
    <div className="flex gap-3 items-center">
      <Link
        className="hover:bg-darkg text-sm px-3 py-1 rounded-md"
        href="/item/create"
        passHref>
        <p className="flex items-center gap-1">
          <span className="text-2xl">&#43;</span>Create Product
        </p>
      </Link>
      <Link className="relative" href="/cart">
        {cartstate.totalCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 rounded-full text-center text-white w-5 h-5 flex justify-center items-center p-2 text-xs">
            {cartstate.totalCount}
          </span>
        )}
        <p className="text-2xl">&#128722;</p>
      </Link>
      <div className="flex gap-1 items-center">
        <Image src="/icons/profile.png" width={20} height={20} alt="profile" />
        <p>{user}</p>
      </div>
      <div
        onClick={handleLogOut}
        className="flex cursor-pointer gap-1 items-center">
        <Image src="/icons/logout.png" width={14} height={14} alt="logout" />
        <p>logout</p>
      </div>
    </div>
  );
}
