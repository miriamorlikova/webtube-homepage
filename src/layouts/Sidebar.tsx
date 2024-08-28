import { SiYoutubeshorts } from "react-icons/si";
import SmallSidebarItem from "../components/SmallSidebarItem";
import { GoHomeFill } from "react-icons/go";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import LargeSidebarSection from "../components/LargeSidebarSection";
import LargeSidebarItem from "../components/LargeSidebarItem";

export default function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={GoHomeFill} url="/" title="Home" />
        <SmallSidebarItem Icon={SiYoutubeshorts} url="/" title="Reels" />
        <SmallSidebarItem Icon={MdSubscriptions} url="/" title="Subscription" />
        <SmallSidebarItem Icon={MdVideoLibrary} url="/" title="Library" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">
        <LargeSidebarSection>
          <LargeSidebarItem />
        </LargeSidebarSection>
      </aside>
    </>
  );
}
