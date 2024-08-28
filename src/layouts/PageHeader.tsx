import logo from "../assets/Logo.png";
import { Menu } from "lucide-react";
import { Button } from "../components/Button";
import { RiUser3Line } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import Form from "../components/Form";
import { GoSearch } from "react-icons/go";
import { BiSolidMicrophone } from "react-icons/bi";
import { useState } from "react";

export default function PageHeader() {
  const [showFullWidth, setShowFullWidth] = useState(false);

  return (
    <div className="flex top-0 gap-10 justify-between pt-2 md:pt-2.5 mb-6 mx-4 ">
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidth ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>
      <div className="flex gap-4 flex-grow justify-center">
        <Form
          showFullWidth={showFullWidth}
          setShowFullWidth={setShowFullWidth}
        />
      </div>

      <div
        className={` flex-shrink-0 md:gap-2 ${
          showFullWidth ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidth(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <GoSearch />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <BiSolidMicrophone />
        </Button>
        <Button size="icon" variant="ghost">
          <AiOutlineVideoCameraAdd />
        </Button>
        <Button size="icon" variant="ghost">
          <BsBell />
        </Button>
        <Button size="icon" variant="ghost">
          <RiUser3Line />
        </Button>
      </div>
    </div>
  );
}
