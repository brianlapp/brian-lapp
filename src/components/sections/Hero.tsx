
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-950 to-gray-900">
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative group">
              <span className="bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent animate-gradient relative inline-block">
                Hi, I'm Brian Lapp
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-transparent transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </span>
              <span className="block text-gray-400 text-2xl md:text-3xl lg:text-4xl mt-2">
                Frontend Developer & UI Engineer
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              With 15 years of experience crafting beautiful, high-performance web applications. I can build anything you envision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/work">
              <Button size="lg" className="w-full sm:w-auto text-lg bg-white text-gray-900 hover:bg-gray-100">
                View My Work <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg border-white text-white hover:bg-white/10">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
            <img
              src="/lovable-uploads/1d279200-b1bc-4eab-acd3-f509a876f64e.png"
              alt="Brian Lapp"
              className="rounded-2xl object-cover w-full h-full"
            />
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-gray-500 to-gray-600 opacity-20 blur"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
