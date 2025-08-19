import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, Globe } from "lucide-react";

const SlideIntro = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-navy to-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/557c02e8-75a6-4e39-b111-f4e3f80cf79b.png" 
                alt="Soil Soft Technologies" 
                className="h-16 w-auto filter brightness-0 invert mb-6"
              />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Passionate Startup
                <br />
                <span className="text-accent">Started in 2019</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Soil Soft Technologies emerged with a vision to revolutionize enterprise software testing. 
                Founded by industry veterans with deep expertise in API testing, automation, and enterprise solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/80">Expert Engineers</div>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-white/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/80">Countries Served</div>
              </div>
            </div>
            
            <Button className="demo-button-accent text-lg px-8 py-4">
              Our Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                "To empower enterprises with intelligent testing solutions that ensure robust, 
                scalable, and secure software delivery at the speed of business."
              </p>
              
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Core Values</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Innovation-driven approach
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Customer-centric solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Excellence in delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideIntro;