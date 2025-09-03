
import { Playwrite_CA } from "next/font/google";

const playwrite = Playwrite_CA({ subsets: ["latin"], weight: "400"});

const Logo = () => {
  return <h1 className={`${playwrite.className}`}>Jay'skicks</h1>;
};
export default Logo;
