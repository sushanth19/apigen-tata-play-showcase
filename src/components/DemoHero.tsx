import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Target } from "lucide-react";

const DemoHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="demo-hero-text mb-6">
            NextGen Testing Platform
            <br />
            <span className="text-navy">for Tata Play</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Revolutionize your testing infrastructure with APIGEN's 
            <br className="hidden md:block" />
            AI-powered automation and intelligent analytics platform
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-navy">99.9%</div>
              <div className="text-muted-foreground">Reliability</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-navy">10x</div>
              <div className="text-muted-foreground">Faster Testing</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-navy">85%</div>
              <div className="text-muted-foreground">Cost Reduction</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="demo-button-primary text-lg px-8 py-4">
              Start Live Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-navy text-navy hover:bg-navy hover:text-white">
              Download Technical Brief
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;