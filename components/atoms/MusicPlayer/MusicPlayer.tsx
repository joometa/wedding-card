import { useEffect, useRef, useState } from "react";
import IconPlay from "public/assets/icons/play.svg";
import IconUnPlay from "public/assets/icons/unplay.svg";
import "./_music-player.scss";

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  const togglePlaying = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current?.pause();
      } else {
        audioRef.current.volume = 0.4;
        audioRef.current?.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div className="music-player-container">
      <button onClick={togglePlaying}>
        {playing ? <IconPlay /> : <IconUnPlay />}
      </button>
      <audio ref={audioRef} src="/assets/audio/bgm.mp3" loop />
    </div>
  );
};
