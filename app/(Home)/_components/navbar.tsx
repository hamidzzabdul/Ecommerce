import { Search } from "lucide-react";
import NavBarItems from "./navbar_items";

const NavBar = () => {
  return (
    <div className="h-full w-3/4 m-auto flex justify-between items-center">
      <div className="flex items-baseline gap-20">
        <h1 className="font-josefin text-3xl font-extrabold">Hekto</h1>
        <div>
          <NavBarItems />
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-input_border pt-1 pl-2 text-sm outline-none"
        />
        <div className="bg-pink flex items-center justify-center w-full h-full p-2">
          <Search className="text-white w-4 h-4 " />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
