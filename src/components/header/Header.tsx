import Nav from "./Nav";

import Image from "next/image";
import topBanner from "/public/images/banner/topBanner.png";

function Header() {
  return (
    <header>
      <Image src={topBanner} alt={"topBanner"} />
      <Nav />
    </header>
  );
}

export default Header;
