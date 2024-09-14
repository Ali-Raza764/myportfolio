import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";

const Hero = () => {
  return (
    <BackgroundLines className="flex w-full flex-col px-4 md:pt-20 pt-10 h-screen">
      <div className="flex justify-center gap-14 flex-col md:flex-row">
        <div className="md:w-full flex  items-center justify-center">
          <Image
            src={"/images/developer.webp"}
            height={300}
            width={300}
            alt="developer image"
            priority
          />
        </div>
        <div className="right w-full">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-6 relative z-20 font-bold tracking-tight">
            Hi, I'm Ali Raza Khalid <br /> A Web Developer
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-4">
            Converting Ideas into projects and learning new technologies. Let's
            build something amazing together!
          </p>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
