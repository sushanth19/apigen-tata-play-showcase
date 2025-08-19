import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GitBranch, 
  Workflow, 
  Bot, 
  Plug, 
  BarChart3, 
  RefreshCw,
  Link,
  TrendingUp,
  Zap
} from "lucide-react";

const SlideFeatures2 = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
            <Bot className="mr-2 w-5 h-5" />
            Version 2.0 Features
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Next Generation Capabilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Advanced features including CI/CD integration, workflow automation, and bi-directional 
            tool integration specifically designed to add value for Tata Play's development ecosystem.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* CI/CD Integration */}
          <Card className="mb-12 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <GitBranch className="mr-3 w-6 h-6 text-primary" />
                CI/CD Pipeline Integration
              </CardTitle>
              <CardDescription className="text-lg">
                Seamless integration with your development workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Automated Testing Triggers</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-primary mr-2" />
                      Trigger API tests on every commit
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-primary mr-2" />
                      Automated test execution in build pipeline
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-primary mr-2" />
                      Real-time results integration
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Pipeline Support</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-background rounded-lg text-center">
                      <GitBranch className="w-6 h-6 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium">Jenkins</span>
                    </div>
                    <div className="p-3 bg-background rounded-lg text-center">
                      <GitBranch className="w-6 h-6 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium">Azure DevOps</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bi-directional Integration */}
          <Card className="mb-12 border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <RefreshCw className="mr-3 w-6 h-6 text-accent" />
                Bi-directional Tool Integration
              </CardTitle>
              <CardDescription className="text-lg">
                Intelligent workflow automation with development tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center border border-accent/20">
                  <Plug className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Jira Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic bug ticket creation and status synchronization
                  </p>
                </Card>
                
                <Card className="p-6 text-center border border-accent/20">
                  <GitBranch className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Azure DevOps</h3>
                  <p className="text-sm text-muted-foreground">
                    Work item tracking and pipeline integration
                  </p>
                </Card>
                
                <Card className="p-6 text-center border border-accent/20">
                  <Bot className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Auto Re-execution</h3>
                  <p className="text-sm text-muted-foreground">
                    Failed tests re-run automatically when bugs are fixed
                  </p>
                </Card>
              </div>
              
              <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                <h3 className="font-semibold mb-4 flex items-center">
                  <RefreshCw className="w-5 h-5 text-accent mr-2" />
                  Smart Workflow Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                    <span>Bug Detected</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                    <span>Ticket Created</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                    <span>Developer Fixes</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">4</div>
                    <span>Auto Re-test</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Workflow Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <Workflow className="mr-3 w-6 h-6 text-blue-600 dark:text-blue-400" />
                  Workflow Creation
                </CardTitle>
                <CardDescription>
                  Intelligent API sequence orchestration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Workflow className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Automated Workflows</h4>
                    <p className="text-sm text-muted-foreground">Create sequences of API calls that mirror real user journeys</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Link className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">API Chaining</h4>
                    <p className="text-sm text-muted-foreground">Intelligent dependency management between API endpoints</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <TrendingUp className="mr-3 w-6 h-6 text-green-600 dark:text-green-400" />
                  Tata Play Value
                </CardTitle>
                <CardDescription>
                  Specific benefits for DTH operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">DTH Workflow Testing</h4>
                    <p className="text-sm text-muted-foreground">End-to-end subscription and service management testing</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Reduced Development Cycles</h4>
                    <p className="text-sm text-muted-foreground">Faster integration with existing Tata Play development tools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideFeatures2;