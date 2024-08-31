import { Menu } from "lucide-react";
import { Button } from "../components/Button";
import { useSidebarContext } from "../contexts/SidebarContext";
import logo from "../assets/Logo.png";

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export default function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} className="h-6" />
      </a>
    </div>
  );
}
