import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Award,
  Gauge,
  CheckCircle
} from "lucide-react";

const DemoBenefits = () => {
  const businessBenefits = [
    {
      icon: DollarSign,
      title: "85% Cost Reduction",
      description: "Significant reduction in testing costs through automation and intelligent resource allocation",
      metrics: ["₹2.5Cr annual savings", "50% faster time-to-market", "Reduced manual effort by 90%"]
    },
    {
      icon: TrendingUp,
      title: "Revenue Impact",
      description: "Direct positive impact on subscriber experience and retention rates",
      metrics: ["15% reduction in churn", "25% faster issue resolution", "99.9% platform uptime"]
    },
    {
      icon: Users,
      title: "Team Productivity",
      description: "Enhanced team efficiency and focus on strategic initiatives rather than repetitive testing",
      metrics: ["300% productivity increase", "70% reduction in testing cycles", "24/7 automated coverage"]
    }
  ];

  const technicalBenefits = [
    {
      icon: Gauge,
      title: "Performance Excellence",
      value: "10x",
      description: "Faster test execution with parallel processing and intelligent test selection"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      value: "99.9%",
      description: "Test coverage with automated regression and continuous validation"
    },
    {
      icon: CheckCircle,
      title: "Reliability Score",
      value: "98.5%",
      description: "Platform reliability with predictive failure detection and prevention"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="demo-section-title">
            Measurable Business Impact for Tata Play
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your testing strategy into a competitive advantage with quantifiable results 
            and industry-leading performance metrics.
          </p>
        </div>

        {/* Business Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {businessBenefits.map((benefit, index) => (
            <Card key={index} className="demo-card text-center group">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="space-y-2">
                  {benefit.metrics.map((metric, metricIndex) => (
                    <Badge key={metricIndex} variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      {metric}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Performance Metrics */}
        <div className="bg-white rounded-2xl shadow-elegant p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy mb-4">Performance Metrics</h3>
            <p className="text-muted-foreground text-lg">
              Industry-leading performance benchmarks tailored for Tata Play's scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-10 h-10 text-accent" />
                </div>
                <div className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  {benefit.value}
                </div>
                <h4 className="text-xl font-semibold text-navy mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="mt-16 bg-navy rounded-2xl p-8 text-center shadow-elegant">
          <h3 className="text-3xl font-bold text-white mb-4">
            ROI Calculator for Tata Play
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Based on your current testing infrastructure, APIGEN can deliver measurable ROI within 3 months of implementation.
          </p>
          <div className="inline-flex items-center space-x-8 text-white">
            <div>
              <div className="text-2xl font-bold text-primary-glow">6 Months</div>
              <div className="text-sm text-gray-300">Payback Period</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div>
              <div className="text-2xl font-bold text-primary-glow">350%</div>
              <div className="text-sm text-gray-300">3-Year ROI</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div>
              <div className="text-2xl font-bold text-primary-glow">₹15Cr+</div>
              <div className="text-sm text-gray-300">Total Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBenefits;