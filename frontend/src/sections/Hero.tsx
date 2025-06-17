import Image from "next/image";
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';


export const HeroSection = () => {
  return <div className="py-32 md:py-48">

    <div className="container">
      <div className="flex items-center flex-col">
        <Image className="size-[100px]" src={memojiImage} alt="person peeking from behind laptop" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Availabke for new projects</div>
        </div>
      </div>
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional user experiences</h1>
      <p className="mt-4 text-center text-white/60">
        I specialze in transforming designs into functional, high-[erforming web applications, let's discuss your next project.]
      </p>
      <div className="flex flex-col items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl" >
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown className='size-4' />
        </button>
        <button className="inline-flex items-centre gap-2 border border-white bg-white  text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">Let's connect</span>
        </button>
      </div>
    </div>
  </div>;
};
