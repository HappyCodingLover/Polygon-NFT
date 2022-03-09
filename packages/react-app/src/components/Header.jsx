import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/polygon-nft" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="polygon-nft"
        subTitle="🖼 NFT example"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
