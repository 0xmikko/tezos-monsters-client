/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState } from "react";
import { StoryPage } from "../../core/storyPage";

interface PicturePageProps {
  data: StoryPage;
}
export const PicturePage: React.FC<PicturePageProps> = ({ data }) => {
  return (
    <div
      className={"picture_page"}
      style={{ backgroundImage: `url(${data.image})` }}
    >&nbsp;</div>
  );
};
