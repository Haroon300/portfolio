import { Info } from "./component/contan";
import { Education } from "./component/education";
import { Navbar } from "./component/navbar";
import Skills from "./component/skills";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Navbar />
      <header className="h-1/2 w-full relative overflow-hidden">
        <VideoPlayer />
        <div className="absolute top-24 right-28 p-2">
          <Info />
        </div>
      </header>
      <div className="mt-8 px-4 md:px-8">
        <div className="md:flex flex-col bg-white rounded-lg p-4">
          <Education />
        </div>
        <div className="p-4  rounded-md">
          <Skills/>        
        </div>
      </div>
    </div>
  );
}

const VideoPlayer = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};


