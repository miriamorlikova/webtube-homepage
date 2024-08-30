import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import SmallSidebarItem from "../components/SmallSidebarItem";
import { GoFlame, GoHomeFill, GoLightBulb } from "react-icons/go";
import {
  MdOutlinePodcasts,
  MdSubscriptions,
  MdVideoLibrary,
} from "react-icons/md";
import LargeSidebarSection from "../components/LargeSidebarSection";
import LargeSidebarItem from "../components/LargeSidebarItem";
import { BiSolidUserAccount } from "react-icons/bi";
import { LuHistory, LuShoppingBag } from "react-icons/lu";
import { CgPlayButtonR } from "react-icons/cg";
import { RiPlayList2Fill } from "react-icons/ri";
import { playlists, subscriptions } from "../data/sidebar";
import { PiDressLight, PiFilmSlateBold, PiMusicNote } from "react-icons/pi";
import { HiOutlineSignal } from "react-icons/hi2";
import { ImNewspaper } from "react-icons/im";
import { BsTrophy } from "react-icons/bs";

export default function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={GoHomeFill} url="/" title="home" />
        <SmallSidebarItem Icon={SiYoutubeshorts} url="/" title="shorts" />
        <SmallSidebarItem Icon={MdSubscriptions} url="/" title="subscription" />
        <SmallSidebarItem Icon={MdVideoLibrary} url="/" title="library" />
      </aside>
      <aside className="scrollbar-hidden w-56 lg:sticky absolute top-0 overflow-y-auto pb-4 flex-col gap-2 px-2 flex">
        <LargeSidebarSection>
          <LargeSidebarItem
            IconOrUrl={GoHomeFill}
            url="/"
            title="home"
            isActive
          />
          <LargeSidebarItem
            IconOrUrl={SiYoutubeshorts}
            url="/"
            title="shorts"
          />
          <LargeSidebarItem
            IconOrUrl={MdSubscriptions}
            url="/"
            title="subscription"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrUrl={MdVideoLibrary}
            url="/"
            title="library"
          />
          <LargeSidebarItem
            IconOrUrl={BiSolidUserAccount}
            url="/"
            title="my account"
          />
          <LargeSidebarItem IconOrUrl={LuHistory} url="/" title="history" />
          <LargeSidebarItem
            IconOrUrl={CgPlayButtonR}
            url="/"
            title="watch later"
          />

          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
              IconOrUrl={RiPlayList2Fill}
            />
          ))}
        </LargeSidebarSection>
        <hr />

        <LargeSidebarSection visibleItemCount={5} title="Subscription">
          {subscriptions.map((item) => (
            <LargeSidebarItem
              key={item.id}
              IconOrUrl={item.imgUrl}
              title={item.channelName}
              url={`/@${item.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5} title="Explore">
          <LargeSidebarItem
            IconOrUrl={GoFlame}
            url="/trending"
            title="trending"
          />
          <LargeSidebarItem
            IconOrUrl={LuShoppingBag}
            url="/shopping"
            title="shopping"
          />
          <LargeSidebarItem
            IconOrUrl={PiMusicNote}
            url="/music"
            title="music"
          />
          <LargeSidebarItem
            IconOrUrl={PiFilmSlateBold}
            url="/music"
            title="movies & TV"
          />
          <LargeSidebarItem
            IconOrUrl={HiOutlineSignal}
            url="/live"
            title="live"
          />
          <LargeSidebarItem
            IconOrUrl={SiYoutubegaming}
            url="/gaming"
            title="gaming"
          />
          <LargeSidebarItem IconOrUrl={ImNewspaper} url="/news" title="news" />
          <LargeSidebarItem IconOrUrl={BsTrophy} url="/sports" title="sports" />
          <LargeSidebarItem
            IconOrUrl={GoLightBulb}
            url="/learning"
            title="learning"
          />

          <LargeSidebarItem
            IconOrUrl={MdOutlinePodcasts}
            url="/podcasts"
            title="podcasts"
          />
          <LargeSidebarItem
            IconOrUrl={PiDressLight}
            url="/fashion"
            title="fashion"
          />
        </LargeSidebarSection>
      </aside>
    </>
  );
}
