import React from "react";

type LargeSidebarSectionProps = {
  children: React.ReactNode;
};

export default function LargeSidebarSection({
  children,
}: LargeSidebarSectionProps) {
  return <div>{children}</div>;
}
