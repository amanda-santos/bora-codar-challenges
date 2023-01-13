import play from "../assets/play.svg";
import playBack from "../assets/play-back.svg";
import playForward from "../assets/play-forward.svg";

type ControlButtonsProps = {
  className?: string;
};

export const ControlButtons = ({ className = "" }: ControlButtonsProps) => {
  return (
    <div className={`${className} mb-7 flex flex-row`}>
      <img src={playBack} alt="Previous song" />
      <img src={play} alt="Play" />
      <img src={playForward} alt="Next song" />
    </div>
  );
};
