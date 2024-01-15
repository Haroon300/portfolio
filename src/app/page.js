import { Info } from "./component/contan";
import { Navbar } from "./component/navbar";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Navbar />
      <header className="h-1/2 w-full relative overflow-hidden">
        <VideoPlayer />
        <div className="absolute top-24 left-10 p-2">
          <Info />
        </div>
      </header>
      <div className="mt-8 px-4 md:px-8">
        <div className="md:flex flex-col bg-white rounded-lg p-4">
          <div className="w-full flex items-center justify-center h-10 bg-black text-white">
            Education
          </div>
          <div className="md:w-2/3">
            <EducationItem
              title="Bachelor"
              degree="Computer Science"
              institution="University Of Karachi UBIT"
            />
            <EducationItem
              title="Diploma of Associate Engineer"
              degree="Software Technology"
              institution="Aligarh Institute of Technology"
            />
            <EducationItem
              title="Intermediate"
              degree="Pre Engineering"
              institution="Govt.Degree College Gulzar-E-Hijri"
            />
            <EducationItem
              title="Matric"
              degree="Computer Science"
              institution="Gulf Schooling System"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const EducationItem = ({ title, degree, institution }) => {
  return (
    <div className="h-32 mt-4">
      <h1 className="text-xl font-semibold">{title}</h1>
      <h2 className="text-lg">{degree}</h2>
      <p>{institution}</p>
    </div>
  );
};

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
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
