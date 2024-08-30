import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

type LargeSidebarItemProps = {
  IconOrUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

export default function LargeSidebarItem({
  IconOrUrl,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full p-3 flex items-center rounded-lg gap-4 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : ""
        }`
      )}
    >
      {typeof IconOrUrl === "string" ? (
        <img src={IconOrUrl} className="rounded-full w-6 h-6" />
      ) : (
        <IconOrUrl className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis capitalize">
        {title}
      </div>
    </a>
  );
}
