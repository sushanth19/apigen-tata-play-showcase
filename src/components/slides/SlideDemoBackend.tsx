import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Play, 
  BarChart3, 
  Bug, 
  Database, 
  Shield, 
  Zap,
  ExternalLink,
  GitBranch,
  Clock
} from "lucide-react";

const SlideDemoBackend = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-subtle py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            Live DTH Backend Demo
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive API testing demonstration using Tata Play's DTH service endpoints
          </p>
          
          <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto shadow-elegant mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <span className="text-lg font-mono text-navy">dthsetup.soilsoft.ai/docs</span>
              <Button variant="outline" size="sm" className="h-8">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
            <Badge className="bg-primary/10 text-primary">Hypothetical Swagger Backend for Demo</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="demo-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-navy">
                <Zap className="w-8 h-8 text-primary mr-3" />
                Core Testing Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                <Play className="w-5 h-5 text-primary" />
                <div>
                  <span className="font-semibold">Auto Test Generation</span>
                  <p className="text-sm text-muted-foreground">From Swagger specs to 500+ test cases</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-accent/5 rounded-lg">
                <BarChart3 className="w-5 h-5 text-accent" />
                <div>
                  <span className="font-semibold">Execute & Analyze</span>
                  <p className="text-sm text-muted-foreground">Real-time execution with detailed analysis</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                <Bug className="w-5 h-5 text-orange-600" />
                <div>
                  <span className="font-semibold">Bug Reporting</span>
                  <p className="text-sm text-muted-foreground">Automated defect detection & reporting</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Database className="w-5 h-5 text-blue-600" />
                <div>
                  <span className="font-semibold">Test Data Management</span>
                  <p className="text-sm text-muted-foreground">Dynamic test data generation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <Shield className="w-5 h-5 text-red-600" />
                <div>
                  <span className="font-semibold">Security Scanning</span>
                  <p className="text-sm text-muted-foreground">Comprehensive security validation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <GitBranch className="w-5 h-5 text-green-600" />
                <div>
                  <span className="font-semibold">CI/CD Integration</span>
                  <p className="text-sm text-muted-foreground">API-driven pipeline triggers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="demo-card border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-navy">
                <Badge variant="secondary" className="mr-3">v2.0</Badge>
                Advanced Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
                <h4 className="font-semibold text-navy mb-2 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Real-time Test Generation
                </h4>
                <p className="text-sm text-muted-foreground">
                  Generate test cases dynamically as APIs evolve with intelligent change detection
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-navy mb-2">Workflow Generation & Execution</h4>
                <p className="text-sm text-muted-foreground">
                  Create complex testing workflows with dependency management and orchestration
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-navy mb-2">Jenkins Plugin Integration</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Native Jenkins pipeline integration</li>
                  <li>• Jira ticket auto-creation for bugs</li>
                  <li>• Azure DevOps work item sync</li>
                  <li>• Slack/Teams notifications</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-navy mb-2">Infrastructure Estimations</h4>
                <p className="text-sm text-muted-foreground">
                  AI-powered production infrastructure recommendations based on performance testing results
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-elegant">
            <h3 className="text-3xl font-bold text-navy mb-6">
              Demo Flow: DTH Subscription API Testing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">1</div>
                <p className="text-sm font-semibold">Import Swagger</p>
                <p className="text-xs text-muted-foreground">dthsetup.soilsoft.ai/docs</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">2</div>
                <p className="text-sm font-semibold">Generate Tests</p>
                <p className="text-xs text-muted-foreground">500+ test cases auto-created</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">3</div>
                <p className="text-sm font-semibold">Execute Suite</p>
                <p className="text-xs text-muted-foreground">Performance + Security scan</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
                <p className="text-sm font-semibold">Analyze Results</p>
                <p className="text-xs text-muted-foreground">Reports + Infrastructure sizing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideDemoBackend;