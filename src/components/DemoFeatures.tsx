import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  CloudCog, 
  BarChart3, 
  Lock, 
  Workflow, 
  Clock,
  Database,
  Smartphone
} from "lucide-react";

const DemoFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Test Generation",
      description: "Automatically generate comprehensive test cases using machine learning algorithms tailored for Tata Play's streaming infrastructure.",
      badge: "Core Feature",
      benefits: ["90% reduction in manual test creation", "Intelligent edge case detection", "Self-healing test scripts"]
    },
    {
      icon: CloudCog,
      title: "Cloud-Native Architecture",
      description: "Scalable, containerized testing environment that adapts to Tata Play's peak traffic demands and multi-platform requirements.",
      badge: "Infrastructure",
      benefits: ["Auto-scaling capabilities", "Multi-region deployment", "Zero-downtime updates"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics Dashboard",
      description: "Advanced reporting and insights specifically designed for OTT platform metrics and Tata Play's business intelligence needs.",
      badge: "Analytics",
      benefits: ["Custom KPI tracking", "Predictive failure analysis", "Executive-level reporting"]
    },
    {
      icon: Lock,
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security measures ensuring Tata Play's content and user data protection across all testing environments.",
      badge: "Security",
      benefits: ["SOC 2 Type II compliant", "Data encryption at rest", "Role-based access control"]
    },
    {
      icon: Workflow,
      title: "DevOps Integration Suite",
      description: "Seamless integration with Tata Play's existing CI/CD pipelines, supporting Jenkins, GitLab, and custom deployment workflows.",
      badge: "Integration",
      benefits: ["Pre-built connectors", "Custom API endpoints", "Webhook support"]
    },
    {
      icon: Clock,
      title: "24/7 Monitoring & Alerting",
      description: "Continuous monitoring of test environments with intelligent alerting for Tata Play's operations team.",
      badge: "Operations",
      benefits: ["Smart alert routing", "Automated incident response", "SLA monitoring"]
    },
    {
      icon: Database,
      title: "Test Data Management",
      description: "Comprehensive test data provisioning and management specifically for media streaming and subscriber management scenarios.",
      badge: "Data",
      benefits: ["Synthetic data generation", "Data masking & privacy", "Environment synchronization"]
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Testing",
      description: "Native support for Tata Play's multi-device ecosystem including STBs, mobile apps, web platforms, and smart TVs.",
      badge: "Compatibility",
      benefits: ["Device farm integration", "Browser compatibility", "Performance profiling"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="demo-section-title">
            Comprehensive Testing Solutions for Tata Play
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purpose-built features addressing the unique challenges of OTT platform testing, 
            content delivery, and subscriber experience optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="demo-card group hover:shadow-glow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-navy">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4 leading-relaxed">
                  {feature.description}
                </CardDescription>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-xs text-primary font-medium flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoFeatures;