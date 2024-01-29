import { Josefin_Sans, Lato } from "next/font/google";

const josefin_init = {
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-josefin",
};
const lato_init = {
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-lato_regular",
};

export const josefin_sans = josefin_init.variable;
export const lato_regular = lato_init.variable;
