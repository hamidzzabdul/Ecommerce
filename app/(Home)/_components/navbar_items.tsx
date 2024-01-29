import { LucideChevronDown } from "lucide-react";
import Link from "next/link";

const Navitems = [
  {
    label: "Home",
    href: "/",
    icon: <LucideChevronDown className="w-4 h-4 cursor" />,
  },
  {
    label: "pages",
    href: "/",
  },
  {
    label: "Products",
    href: "/shop",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];

const NavBarItems = () => {
  const items = Navitems.map((item) => (
    <li key={item.label}>
      <Link
        href={item.href}
        className=" flex items-center gap-1 font-semibold hover:text-pink transition-all ease-in  duration-300 capitalize"
      >
        {item.label}
        {item?.icon}
      </Link>
    </li>
  ));
  return (
    <ul className="flex items-center gap-5 text-lg cursor-pointer">{items}</ul>
  );
};

export default NavBarItems;
