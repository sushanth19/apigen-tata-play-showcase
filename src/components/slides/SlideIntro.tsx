import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase, Users } from "lucide-react";

const SlideIntro = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-navy to-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/557c02e8-75a6-4e39-b111-f4e3f80cf79b.png" 
                alt="Soil Soft Technologies Pvt Ltd" 
                className="h-16 w-auto filter brightness-0 invert mb-6"
              />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Soil Soft Technologies
                <br />
                <span className="text-accent">Pvt Ltd</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Started with a passion for developing enterprise-level products from the land of India. 
                Creating an ecosystem for employment from our hometown, building world-class solutions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-bold text-white">Founder & Vision</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                <strong>Vamsi Krishna</strong> - 15+ years of experience in both product-based 
                and service-based companies, leading the vision to revolutionize API testing.
              </p>
            </div>
            
            <Button className="demo-button-accent text-lg px-8 py-4">
              Our Innovation Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Made in India 🇮🇳</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                "Building enterprise-grade solutions from India for the world, 
                creating opportunities and driving innovation in API testing technology."
              </p>
              
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Our Impact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-lg font-bold">India</div>
                    <div className="text-sm text-white/80">Hometown Base</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-lg font-bold">Employment</div>
                    <div className="text-sm text-white/80">Ecosystem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideIntro;