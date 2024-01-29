import { LucideMail, LucidePhone } from "lucide-react";
import NavPrimaryItems from "./navprimary_items";

const NavPrimary = () => {
  return (
    <div className="w-3/4 h-full m-auto flex justify-between items-center">
      <div className="flex gap-4 text-white">
        <p className="flex items-center gap-2">
          <LucideMail className="w-5 h-5" />
          <span className="text-sm">abdirahimabdul89@gmail.com</span>
        </p>
        <p className="flex items-center gap-2">
          <LucidePhone className="w-5 h-5" />
          <span className="text-sm">(+254)-706-328-544</span>
        </p>
      </div>
      <div>
        <NavPrimaryItems />
      </div>
    </div>
  );
};

export default NavPrimary;
