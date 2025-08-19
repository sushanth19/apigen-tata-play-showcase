import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Shield, Target, Database, Settings } from "lucide-react";

const SlideApigen = () => {
  return (
    <section className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <img 
            src="/lovable-uploads/7814459c-190e-4124-934d-b97c24411d2a.png" 
            alt="APIGEN" 
            className="h-20 w-auto mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            APIGEN
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Advanced API Testing & Validation Platform for Enterprise Applications
          </p>
          <Badge className="mt-4 text-lg px-6 py-2">
            Backend API Testing Specialist
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="demo-card group hover:shadow-glow">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Swagger Integration</h3>
              <p className="text-muted-foreground">
                Native support for OpenAPI/Swagger specifications with automatic test case generation
              </p>
            </CardContent>
          </Card>
          
          <Card className="demo-card group hover:shadow-glow">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                <Database className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Postman Collections</h3>
              <p className="text-muted-foreground">
                Import and execute Postman collections with advanced assertion capabilities
              </p>
            </CardContent>
          </Card>
          
          <Card className="demo-card group hover:shadow-glow">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Automated Testing</h3>
              <p className="text-muted-foreground">
                AI-powered test generation with intelligent endpoint discovery and validation
              </p>
            </CardContent>
          </Card>
          
          <Card className="demo-card group hover:shadow-glow">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Security Testing</h3>
              <p className="text-muted-foreground">
                Comprehensive security validation including authentication, authorization, and data protection
              </p>
            </CardContent>
          </Card>
          
          <Card className="demo-card group hover:shadow-glow">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Performance Testing</h3>
              <p className="text-muted-foreground">
                Load testing and performance benchmarking for high-traffic API endpoints
              </p>
            </CardContent>
          </Card>
          
          <Card className="demo-card group hover:shadow-glow">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                <Settings className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">CI/CD Integration</h3>
              <p className="text-muted-foreground">
                Seamless integration with DevOps pipelines and continuous testing workflows
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SlideApigen;