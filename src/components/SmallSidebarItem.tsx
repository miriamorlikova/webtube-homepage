import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";
import { ElementType } from "react";

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

export default function SmallSidebarItem({
  Icon,
  title,
  url,
}: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "px-1 py-4 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon clasName="w-6 h-6" />
      <div className="text-xs">{title}</div>
    </a>
  );
}
