import React from "react";

import "./sectionContainer.scss";

export default function SectionContainer({
  children,
}: React.PropsWithChildren<{}>) {
  return <div className="section-container light">{children}</div>;
}
