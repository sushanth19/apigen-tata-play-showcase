import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tv, Satellite, Smartphone, Wifi, Users, Shield } from "lucide-react";

const SlideTataPlay = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-subtle py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/7814459c-190e-4124-934d-b97c24411d2a.png" 
              alt="APIGEN" 
              className="h-12 w-auto mr-6"
            />
            <div className="text-3xl font-bold text-navy">×</div>
            <img 
              src="/lovable-uploads/61013ed1-368c-48de-b9e6-473371d02e74.png" 
              alt="Tata Play" 
              className="h-12 w-auto ml-6"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            API Testing for DTH Excellence
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Specialized API testing solutions for Tata Play's comprehensive DTH service ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="demo-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-navy">
                <Satellite className="w-8 h-8 text-primary mr-3" />
                DTH Service APIs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-3">Core</Badge>
                  Channel subscription & management APIs
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-3">Billing</Badge>
                  Payment processing & subscription APIs
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-3">Content</Badge>
                  EPG & content delivery APIs
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-3">Customer</Badge>
                  User account & profile APIs
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="demo-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-navy">
                <Smartphone className="w-8 h-8 text-accent mr-3" />
                Multi-Platform Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-3">Mobile</Badge>
                  Tata Play Mobile app APIs
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-3">Web</Badge>
                  Web portal & dashboard APIs
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-3">STB</Badge>
                  Set-top box integration APIs
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-3">OTT</Badge>
                  Streaming service APIs
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-navy mb-2">24M+</h3>
            <p className="text-lg text-muted-foreground">Active Subscribers</p>
            <p className="text-sm text-primary mt-2">API load testing capabilities</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
              <Tv className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-navy mb-2">600+</h3>
            <p className="text-lg text-muted-foreground">TV Channels</p>
            <p className="text-sm text-primary mt-2">Content API validation</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-navy mb-2">99.9%</h3>
            <p className="text-lg text-muted-foreground">Service Uptime</p>
            <p className="text-sm text-primary mt-2">API reliability testing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideTataPlay;