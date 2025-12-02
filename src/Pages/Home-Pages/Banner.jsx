import { ButtonPrimary } from "/src/components/Button";
import { LuMousePointerClick } from "react-icons/lu";
export default function Banner() {
  return (
    <section
      id="home"
      className="bg-[url(/public/roger-starnes-sr-O_Zs64flulU-unsplash.jpg)] w-full bg-cover bg-center h-[650px] relative"
    >
      <div className="absolute inset-0 bg-black/65" /> {/* Overlay for readability */}
      <div className="relative z-10 flex flex-col text-center text-white">
        <div className="mt-[220px] text-black text-lg tracking-wide">
          Your Dream Home Awaits
        </div>
        <div className="flex justify-center">
          <p className="mt-2 text-5xl text-white  font-semibold">
            Find the Perfect Property — Quickly & Easily
          </p>
        </div>
        <div className="flex justify-center my-4">
          <h1 className="text-lg text-gray-200 font-light max-w-2xl leading-relaxed">
            Whether you're buying, selling, or renting, our platform connects you with the best real estate opportunities tailored to your needs.
          </h1>
        </div>
        <div className="flex items-center bg-[FF5B28] justify-center ">
          {/* <ButtonPrimary
            href="#properties"
            label="Find Your Home"
            
          /> */}
           <button className="text-white  font-semibold bg-zinc-900 border-transparent border-2 rounded-lg px-4 py-3">
                      <a href="#contact" className="flex items-center gap-2">
                        Find Your Home{" "}
                        <span>
                          {" "}
                          <LuMousePointerClick/>
                        </span>
                      </a>
                    </button>
        </div>
      </div>
    </section>
  );
}
