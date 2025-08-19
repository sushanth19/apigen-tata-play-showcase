import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Download, Phone, Users } from "lucide-react";

const DemoCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Tata Play's Testing Strategy?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join industry leaders who have revolutionized their testing infrastructure 
            with APIGEN's NextGen Testing Platform. Let's discuss your specific requirements.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="demo-card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="pt-6 text-center text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Demo</h3>
              <p className="text-sm text-white/80">
                Book a personalized demo session
              </p>
            </CardContent>
          </Card>

          <Card className="demo-card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="pt-6 text-center text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Brief</h3>
              <p className="text-sm text-white/80">
                Download detailed specifications
              </p>
            </CardContent>
          </Card>

          <Card className="demo-card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="pt-6 text-center text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Consultation</h3>
              <p className="text-sm text-white/80">
                Speak with our solution architects
              </p>
            </CardContent>
          </Card>

          <Card className="demo-card bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="pt-6 text-center text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">POC Planning</h3>
              <p className="text-sm text-white/80">
                Design your proof of concept
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-elegant">
            <h3 className="text-3xl font-bold text-navy mb-4">
              Let's Start Your APIGEN Journey
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our team is ready to demonstrate how APIGEN can specifically address 
              Tata Play's testing challenges and accelerate your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="demo-button-primary text-lg px-10 py-4">
                Schedule Live Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button className="demo-button-accent text-lg px-10 py-4">
                Request Custom POC
              </Button>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6 text-center">
              <p className="text-muted-foreground mb-2">
                <span className="font-semibold text-navy">Direct Contact:</span> solutions@soilsoft.ai
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-navy">Phone:</span> +91 (0) 123-456-7890
              </p>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm mb-6">Trusted by leading enterprises worldwide</p>
          <div className="flex items-center justify-center space-x-12 opacity-70">
            <img 
              src="/lovable-uploads/557c02e8-75a6-4e39-b111-f4e3f80cf79b.png" 
              alt="Soil Soft Technologies" 
              className="h-8 w-auto filter brightness-0 invert"
            />
            <img 
              src="/lovable-uploads/7814459c-190e-4124-934d-b97c24411d2a.png" 
              alt="APIGEN" 
              className="h-6 w-auto filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoCTA;