import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Magnetic } from "@/components/shared/Magnetic";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        
        <h1 className="text-[20vw] md:text-[15vw] font-heading leading-none tracking-tighter text-white opacity-20 select-none">
          404
        </h1>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <p className="text-xl md:text-3xl font-sans tracking-widest uppercase text-white mb-8">
            Page Not Found
          </p>
          <div className="flex justify-center">
            <Magnetic>
              <Link 
                href="/"
                className="group relative flex items-center justify-center w-40 h-40 rounded-full border border-white/20 overflow-hidden hover:border-accent transition-colors duration-500 shrink-0 bg-background"
              >
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative z-10 flex items-center gap-2 text-white group-hover:text-black transition-colors duration-500">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-sans font-medium">Go Home</span>
                </div>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grain pointer-events-none mix-blend-overlay opacity-30 z-0" />
    </div>
  );
}
