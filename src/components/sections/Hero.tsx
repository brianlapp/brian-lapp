
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-950 to-gray-900">
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="md:col-span-8 lg:col-span-7 space-y-8">
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
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
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
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg border-white hover:bg-white/10 text-slate-50">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 lg:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] group perspective">
            <div className="relative w-full h-full transform-gpu transition-all duration-500 group-hover:rotate-y-12">
              <img src="/lovable-uploads/1d279200-b1bc-4eab-acd3-f509a876f64e.png" alt="Brian Lapp" className="rounded-2xl object-cover w-full h-full brightness-90" />
              {/* Code pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl mix-blend-multiply" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20 rounded-2xl animate-subtle-drift" />
              
              {/* Animated code lines */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="code-line" />
                <div className="code-line" style={{
                  animationDelay: '2s'
                }} />
                <div className="code-line" style={{
                  animationDelay: '4s'
                }} />
              </div>
              
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/30 to-purple-300/30 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
