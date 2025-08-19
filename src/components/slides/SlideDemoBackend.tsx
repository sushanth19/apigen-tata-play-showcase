import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Zap, 
  BarChart3, 
  Bug, 
  Database, 
  Shield, 
  GitBranch,
  Bot,
  Workflow,
  Play,
  Settings,
  UserCheck,
  TestTube
} from "lucide-react";

const SlideDemoBackend = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
            <Play className="mr-2 w-5 h-5" />
            Live Demo Walkthrough
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Live Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Watch as we demonstrate the complete API Gen workflow from sign-in to comprehensive 
            testing results, including authorization, performance testing, and security scanning.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center bg-background border rounded-lg px-4 py-2">
              <span className="text-sm text-muted-foreground mr-2">Demo Backend:</span>
              <code className="text-sm font-mono">dthsetup.soilsoft.ai/docs</code>
            </div>
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 w-4 h-4" />
              Visit API Docs
            </Button>
            <Badge variant="secondary">Swagger Backend</Badge>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Demo Flow Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Demo Flow</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle className="text-lg">Sign In & Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sign in to API Gen platform and create a new project for DTH testing
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle className="text-lg">Generate Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Upload Swagger spec and automatically generate comprehensive test cases
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle className="text-lg">Execute with Auth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Run tests with authorization tokens and authentication handling
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <CardTitle className="text-lg">Analyze Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Review bugs, performance metrics, and security scan results
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What We'll Demonstrate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center text-green-800 dark:text-green-200">
                  <TestTube className="mr-3 w-6 h-6" />
                  Core Testing Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Bot, text: "Auto test case generation from Swagger" },
                  { icon: UserCheck, text: "Authorization & token handling" },
                  { icon: Bug, text: "Automated bug detection & reporting" },
                  { icon: BarChart3, text: "Performance testing & metrics" },
                  { icon: Shield, text: "Security vulnerability scanning" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <Icon className="w-4 h-4 text-green-600 dark:text-green-400 mr-3" />
                      <span className="text-green-700 dark:text-green-300 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center text-blue-800 dark:text-blue-200">
                  <Settings className="mr-3 w-6 h-6" />
                  Live Demo Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Database, text: "Complete DTH API endpoint coverage" },
                  { icon: Zap, text: "Real-time test execution & results" },
                  { icon: GitBranch, text: "CI/CD pipeline integration demo" },
                  { icon: Workflow, text: "Test workflow automation" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3" />
                      <span className="text-blue-700 dark:text-blue-300 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideDemoBackend;