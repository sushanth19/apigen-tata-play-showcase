import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock, Users, Eye, Bug, Zap, TrendingUp, BarChart3 } from "lucide-react";

const SlideWhyApigen = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Complex Manual Testing",
      description: "End-to-end backend API testing is difficult and time-consuming when done manually"
    },
    {
      icon: Clock,
      title: "Costly Automation",
      description: "Creating comprehensive automated test cases requires significant time and resources"
    },
    {
      icon: Users,
      title: "Technical Knowledge Gap",
      description: "QA teams may lack deep technical knowledge for thorough API scenario testing"
    },
    {
      icon: Eye,
      title: "No Visibility",
      description: "Lack of consistency and visibility in backend API testing processes"
    }
  ];

  const consequences = [
    "Issues not caught in backend testing",
    "Bugs found during UI integration testing", 
    "Delays as bugs go back to backend developers",
    "Extended release cycles and time-to-market"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="destructive" className="mb-6 text-lg px-6 py-2">
            <AlertTriangle className="mr-2 w-5 h-5" />
            The Problem
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Why API Gen?
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Current backend API testing approaches create bottlenecks and delays in your development cycle
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Current Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card key={index} className="text-center border-red-200 dark:border-red-800">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-red-100 dark:bg-red-900/20 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-6 text-red-800 dark:text-red-200">
              The Domino Effect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {consequences.map((consequence, index) => (
                <div key={index} className="flex items-center">
                  <Bug className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-red-700 dark:text-red-300">{consequence}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-6 text-lg px-6 py-2 bg-green-600 hover:bg-green-700">
              <Zap className="mr-2 w-5 h-5" />
              The API Gen Solution
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-green-800 dark:text-green-200">
              Transform 5-10 Minutes Setup Into Complete Testing
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-green-800 dark:text-green-200">
                  30-40 Minutes
                </CardTitle>
                <CardDescription className="text-lg text-green-700 dark:text-green-300">
                  Complete project testing including:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Test Cases Generation",
                  "Execution & Analysis", 
                  "Bug Reporting",
                  "Performance Testing",
                  "Security Scanning",
                  "Business Insights"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Zap className="w-4 h-4 text-green-600 dark:text-green-400 mr-3" />
                    <span className="text-green-700 dark:text-green-300">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 border-2 border-blue-200 dark:border-blue-800">
                <CardHeader className="pb-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <CardTitle className="text-xl">Business Insights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    New feature providing insights for both technical and non-technical stakeholders, 
                    analyzing marketing strategies and backend API improvements for your domain.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-purple-200 dark:border-purple-800">
                <CardHeader className="pb-4">
                  <div className="flex items-center">
                    <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                    <CardTitle className="text-xl">Stop Bugs Early</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Catch all backend issues before they reach UI testing, eliminating delays 
                    and accelerating your release cycles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideWhyApigen;