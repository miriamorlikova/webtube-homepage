import React, { useState } from "react";
import { Button } from "./Button";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

type LargeSidebarSectionProps = {
  children: React.ReactNode;
  title?: string;
  visibleItemCount?: number;
};

export default function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = React.Children.toArray(children).flat(); //flat for one dimensional array
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? IoChevronDownOutline : IoChevronUpOutline;
  const ButtonText = isExpanded ? "show less" : "show more";

  return (
    <div className="flex flex-col gap-0.5">
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((show) => !show)}
          variant="ghost"
          className="w-full p-3 flex items-center rounded-lg gap-4"
        >
          <ButtonIcon className="w-6 h-6" />
          <div className="capitalize">{ButtonText}</div>
        </Button>
      )}
    </div>
  );
}
