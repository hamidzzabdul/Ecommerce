import {
  Heart,
  LucideChevronDown,
  LucideShoppingBasket,
  User,
} from "lucide-react";
import Link from "next/link";

const NavPrimaryItems = () => {
  return (
    <ul className="flex items-center gap-8 text-white text-md">
      <li className="flex items-center gap-2">
        <p>English</p>
        <LucideChevronDown className="w-5 h-5 cursor-pointer" />
      </li>
      <li className="flex items-center gap-1">
        <p>USD</p>
        <LucideChevronDown className="w-5 h-5 cursor-pointer" />
      </li>
      <li className="flex items-center gap-1">
        <Link href={"/login"}>Login</Link>
        <User className="w-5 h-5 cursor-pointer" />
      </li>
      <li className="flex items-center gap-1">
        Wishlist
        <Heart className="w-5 h-5 cursor-pointer" />
      </li>
      <li className="">
        <LucideShoppingBasket className="w-6 h-6 cursor-pointer" />
      </li>
    </ul>
  );
};

export default NavPrimaryItems;
