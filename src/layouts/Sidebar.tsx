import { SiYoutubeshorts } from "react-icons/si";
import SmallSidebarItem from "../components/SmallSidebarItem";
import { GoHomeFill } from "react-icons/go";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import LargeSidebarSection from "../components/LargeSidebarSection";
import LargeSidebarItem from "../components/LargeSidebarItem";
import { BiSolidUserAccount } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { CgPlayButtonR } from "react-icons/cg";
import { RiPlayList2Fill, RiPlayList2Line } from "react-icons/ri";
import { playlists } from "../data/sidebar";

export default function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={GoHomeFill} url="/" title="home" />
        <SmallSidebarItem Icon={SiYoutubeshorts} url="/" title="shorts" />
        <SmallSidebarItem Icon={MdSubscriptions} url="/" title="subscription" />
        <SmallSidebarItem Icon={MdVideoLibrary} url="/" title="library" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">
        <LargeSidebarSection>
          <LargeSidebarItem Icon={GoHomeFill} url="/" title="home" isActive />
          <LargeSidebarItem Icon={SiYoutubeshorts} url="/" title="shorts" />
          <LargeSidebarItem
            Icon={MdSubscriptions}
            url="/"
            title="subscription"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem Icon={MdVideoLibrary} url="/" title="library" />
          <LargeSidebarItem
            Icon={BiSolidUserAccount}
            url="/"
            title="my account"
          />
          <LargeSidebarItem Icon={LuHistory} url="/" title="history" />
          <LargeSidebarItem Icon={CgPlayButtonR} url="/" title="watch later" />

          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
              Icon={RiPlayList2Fill}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <p>placeholder</p>
        </LargeSidebarSection>
      </aside>
    </>
  );
}
