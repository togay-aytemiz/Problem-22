import { useRef, useState } from "react";

export default function VideoPlayer() {
  const ref = useRef();

  console.log(ref.current);

  const [videoStatus, setVideoStatus] = useState(false);

  const togglePlayback = (e) => {
    let name = e.target.innerHTML;
    if (name === "Oynat") {
      ref.current.play();
      setVideoStatus(true);
    } else if (name === "Duraklat") {
      ref.current.pause();
      setVideoStatus(false);
    }
  };

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 className="text-center font-bold text-3xl">Video Oynatıcı</h1>
      <video
        ref={ref}
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      />
      <div className="flex justify-between">
        {videoStatus && (
          <button
            className="text-orange-500 font-semibold"
            onClick={togglePlayback}
          >
            Duraklat
          </button>
        )}

        {!videoStatus && <div>Duraklatıldı</div>}

        {!videoStatus && (
          <button
            className="text-indigo-500 font-semibold"
            onClick={togglePlayback}
          >
            Oynat
          </button>
        )}
      </div>
    </div>
  );
}
