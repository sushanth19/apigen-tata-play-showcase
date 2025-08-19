import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileJson, Upload, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SlideApigen = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
            <Zap className="mr-2 w-5 h-5" />
            Next-Gen Testing Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What is API Gen?
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            A powered next-generation testing platform for backend APIs. Simply provide your 
            Swagger JSON or Postman collection, and watch the magic happen.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Simple Input, Powerful Output</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FileJson className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Swagger JSON</h3>
                    <p className="text-muted-foreground">Import your OpenAPI specifications directly for comprehensive API coverage</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Postman Collections</h3>
                    <p className="text-muted-foreground">Seamlessly integrate with your existing Postman workflows and environments</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">Transform Your Testing</CardTitle>
                  <CardDescription className="text-lg">From specification to comprehensive testing in minutes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="font-medium">Upload API Spec</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="font-medium">Generate Tests</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="font-medium">Execute & Analyze</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <Button className="w-full mt-6">
                    Start Testing Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideApigen;