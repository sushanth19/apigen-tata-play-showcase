import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, FileJson, TestTube, Zap, CheckCircle, AlertTriangle } from "lucide-react";

const SlideTechnical = () => {
  return (
    <section className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            Technical Capabilities
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Advanced API testing features designed for enterprise-grade DTH service validation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="demo-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-navy">
                <FileJson className="w-8 h-8 text-primary mr-3" />
                Swagger/OpenAPI Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Automatic test generation from OpenAPI 3.0 specs</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Schema validation and contract testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>API documentation synchronization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Endpoint discovery and mapping</span>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 mt-4">
                <Badge className="mb-2">Example</Badge>
                <p className="text-sm text-muted-foreground">
                  Import Tata Play's subscription API spec → Auto-generate 200+ test cases → Validate all endpoints
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="demo-card border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-navy">
                <Code2 className="w-8 h-8 text-accent mr-3" />
                Postman Collection Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Import existing Postman collections</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Environment variable management</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Pre/post-request script execution</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Batch collection execution</span>
              </div>
              <div className="bg-accent/5 rounded-lg p-4 mt-4">
                <Badge variant="secondary" className="mb-2">Example</Badge>
                <p className="text-sm text-muted-foreground">
                  Import DTH billing API collection → Execute 500+ tests → Generate compliance reports
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="demo-card text-center">
            <CardContent className="pt-8">
              <TestTube className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Advanced Assertions</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Response time validation</li>
                <li>JSON schema verification</li>
                <li>Custom business logic checks</li>
                <li>Data integrity validation</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="demo-card text-center">
            <CardContent className="pt-8">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Load Testing</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Concurrent user simulation</li>
                <li>Peak traffic handling</li>
                <li>Performance bottleneck detection</li>
                <li>Scalability assessment</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="demo-card text-center">
            <CardContent className="pt-8">
              <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Security Testing</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Authentication testing</li>
                <li>Authorization validation</li>
                <li>SQL injection detection</li>
                <li>Data exposure checks</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SlideTechnical;