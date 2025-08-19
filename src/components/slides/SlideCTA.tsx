import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Download, Phone, Users, CheckCircle } from "lucide-react";

const SlideCTA = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ready for POC Implementation?
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Let's demonstrate APIGEN's capabilities with Tata Play's actual API specifications 
            and create a proof of concept tailored to your DTH service requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-lg">30-Day POC</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-lg">No Upfront Cost</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-lg">Dedicated Support</span>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="demo-card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="pt-6 text-center text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule POC Demo</h3>
              <p className="text-sm text-white/80">
                Live demonstration with your APIs
              </p>
            </CardContent>
          </Card>

          <Card className="demo-card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="pt-6 text-center text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Proposal</h3>
              <p className="text-sm text-white/80">
                Detailed implementation roadmap
              </p>
            </CardContent>
          </Card>

          <Card className="demo-card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="pt-6 text-center text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Architecture Review</h3>
              <p className="text-sm text-white/80">
                API infrastructure assessment
              </p>
            </CardContent>
          </Card>

          <Card className="demo-card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="pt-6 text-center text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Team Training</h3>
              <p className="text-sm text-white/80">
                Knowledge transfer sessions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-10 max-w-5xl mx-auto shadow-elegant">
            <h2 className="text-4xl font-bold text-navy mb-6">
              Start Your APIGEN POC Journey Today
            </h2>
            <p className="text-muted-foreground text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Our team will work directly with Tata Play's engineering team to implement 
              a comprehensive API testing solution tailored to your DTH service ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Button className="demo-button-primary text-xl px-12 py-6">
                Schedule POC Demo
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button className="demo-button-accent text-xl px-12 py-6">
                Download Proposal
              </Button>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-8">
              <div className="text-center md:text-left">
                <h4 className="font-semibold text-navy text-lg mb-2">Direct Contact</h4>
                <p className="text-muted-foreground mb-1">solutions@soilsoft.ai</p>
                <p className="text-muted-foreground">+91 (0) 123-456-7890</p>
              </div>
              <div className="text-center md:text-right">
                <h4 className="font-semibold text-navy text-lg mb-2">POC Timeline</h4>
                <p className="text-muted-foreground mb-1">Week 1-2: Setup & Integration</p>
                <p className="text-muted-foreground">Week 3-4: Testing & Validation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-lg mb-8">Powering API Testing Excellence</p>
          <div className="flex items-center justify-center space-x-16 opacity-80">
            <img 
              src="/lovable-uploads/557c02e8-75a6-4e39-b111-f4e3f80cf79b.png" 
              alt="Soil Soft Technologies" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <div className="text-4xl text-white font-bold">×</div>
            <img 
              src="/lovable-uploads/7814459c-190e-4124-934d-b97c24411d2a.png" 
              alt="APIGEN" 
              className="h-10 w-auto filter brightness-0 invert"
            />
            <div className="text-4xl text-white font-bold">×</div>
            <img 
              src="/lovable-uploads/61013ed1-368c-48de-b9e6-473371d02e74.png" 
              alt="Tata Play" 
              className="h-10 w-auto filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideCTA;