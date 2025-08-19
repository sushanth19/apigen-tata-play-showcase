import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Shield, 
  Zap, 
  Target,
  Users,
  Server,
  AlertTriangle,
  Cloud,
  Building,
  Brain
} from "lucide-react";

const SlideValueProposition = () => {
  const valueProps = [
    {
      feature: "Real-time Test Cases Generation",
      icon: Zap,
      tataPlayValue: "Continuous Testing Coverage",
      details: [
        "Immediate test generation for new DTH features",
        "Auto-adapt to API changes in subscription systems",
        "Reduce manual test creation by 75%",
        "Support for high-volume subscriber scenarios"
      ],
      roi: "$25,000/year in reduced testing effort",
      color: "primary"
    },
    {
      feature: "Infrastructure Estimations",
      icon: Server,
      tataPlayValue: "Optimized Infrastructure Planning",
      details: [
        "Performance-based capacity planning",
        "Cost optimization recommendations",
        "Predictive scaling for peak traffic",
        "Right-sizing for channel delivery systems"
      ],
      roi: "$35,000/year in infrastructure optimization",
      color: "accent"
    },
    {
      feature: "Automated Performance & Security Testing",
      icon: TrendingUp,
      tataPlayValue: "Quality Assurance & Risk Mitigation",
      details: [
        "Comprehensive load testing capabilities",
        "API response time validation",
        "Security vulnerability detection",
        "Performance bottleneck identification"
      ],
      roi: "$20,000/year in issue prevention & resolution",
      color: "green"
    }
  ];

  return (
    <section className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            Value Creation for Tata Play
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Practical business impact through intelligent API testing and infrastructure optimization
          </p>
          
          {/* Deployment Options */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-4 flex items-center space-x-3">
              <Cloud className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <p className="font-semibold text-navy">SaaS Solution</p>
                <p className="text-sm text-muted-foreground">Cloud-hosted with data integrity</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
              <Building className="w-6 h-6 text-gray-600" />
              <div className="text-left">
                <p className="font-semibold text-navy">On-Premise</p>
                <p className="text-sm text-muted-foreground">Complete data control & security</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-12">
          {valueProps.map((prop, index) => (
            <Card key={index} className={`demo-card border-${prop.color}/20 relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-2 h-full bg-${prop.color === 'primary' ? 'primary' : prop.color === 'accent' ? 'accent' : 'green-500'}`}></div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${prop.color === 'primary' ? 'primary' : prop.color === 'accent' ? 'accent' : 'green-500'}/10 rounded-full`}>
                      <prop.icon className={`w-8 h-8 text-${prop.color === 'primary' ? 'primary' : prop.color === 'accent' ? 'accent' : 'green-600'}`} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-navy mb-2">{prop.feature}</CardTitle>
                      <p className="text-xl text-muted-foreground">{prop.tataPlayValue}</p>
                    </div>
                  </div>
                  <Badge className={`bg-${prop.color === 'primary' ? 'primary' : prop.color === 'accent' ? 'accent' : 'green-500'}/10 text-${prop.color === 'primary' ? 'primary' : prop.color === 'accent' ? 'accent' : 'green-700'} text-lg px-4 py-2`}>
                    Core Feature
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-navy mb-4">Implementation Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {prop.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className={`w-2 h-2 bg-${prop.color === 'primary' ? 'primary' : prop.color === 'accent' ? 'accent' : 'green-500'} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <div className="text-center">
                      <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-navy mb-2">Annual Savings</h4>
                      <p className="text-2xl font-bold text-green-600 mb-2">{prop.roi}</p>
                      
                      <div className="space-y-2 mt-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Implementation</span>
                          <span className="text-navy font-semibold">2-3 months</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">ROI Payback</span>
                          <span className="text-navy font-semibold">8-12 months</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Efficiency Gain</span>
                          <span className="text-green-600 font-semibold">60-75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* AI Enhancement Section */}
        <div className="mt-16">
          <Card className="demo-card bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <Badge className="mb-4 text-lg px-4 py-2">Coming in v2.2</Badge>
                <h3 className="text-4xl font-bold text-navy mb-4">Full AI Capabilities</h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Powered by Soil Soft's proprietary cyber-based AI engine - not public AI
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Intelligent Test Generation</h4>
                  <p className="text-sm text-muted-foreground">AI-driven test case creation with business logic understanding</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Predictive Analytics</h4>
                  <p className="text-sm text-muted-foreground">Forecast potential issues before they impact production</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Auto-Remediation</h4>
                  <p className="text-sm text-muted-foreground">Self-healing test scripts with intelligent error recovery</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Summary Section */}
        <div className="mt-16">
          <Card className="demo-card bg-gradient-hero text-white">
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold mb-4">Total Annual Value</h3>
                <p className="text-xl text-white/90">Conservative estimate for Tata Play's DTH operations</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">$80,000</div>
                  <div className="text-white/80">Annual Savings</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">70%</div>
                  <div className="text-white/80">Time Reduction</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <div className="text-white/80">Issue Prevention</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">12 Months</div>
                  <div className="text-white/80">ROI Payback</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SlideValueProposition;