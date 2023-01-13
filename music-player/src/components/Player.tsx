import { ControlButtons } from "./ControlButtons";
import { TitleAndArtist } from "./TitleAndArtist";

import albumCover from "../assets/album-cover.png";
import { Time } from "./Time";
import { Range } from "./Range";

type PlayerProps = {
  variant: "lg" | "md" | "sm";
};

export const Player = ({ variant }: PlayerProps) => {
  const LargePlayer = () => (
    <div className="row-span-2 w-full rounded-lg bg-purple-light py-12 px-10">
      <img src={albumCover} alt="" className="mb-7 h-48 w-48" />

      <TitleAndArtist />

      <ControlButtons className="mt-7 justify-evenly" />
      <Range />
      <Time />
    </div>
  );

  const MediumPlayer = () => (
    <div className="w-full rounded-lg bg-purple-light p-7">
      <div className="flex flex-row gap-8">
        <img src={albumCover} alt="" className="mb-7 h-20 w-20" />

        <TitleAndArtist />
      </div>

      <ControlButtons className="justify-evenly" />
      <Range />
      <Time />
    </div>
  );

  const SmallPlayer = () => (
    <div className="flex w-full flex-col rounded-lg bg-purple-light p-7">
      <div className="flex flex-row gap-8">
        <img src={albumCover} alt="" className="mb-7 h-20 w-20" />
        <TitleAndArtist />
      </div>

      <ControlButtons className="justify-evenly" />
    </div>
  );

  switch (variant) {
    case "lg":
      return <LargePlayer />;
    case "md":
      return <MediumPlayer />;
    case "sm":
      return <SmallPlayer />;
  }
};
