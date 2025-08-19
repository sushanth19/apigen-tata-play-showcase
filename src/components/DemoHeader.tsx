import { Button } from "@/components/ui/button";

const DemoHeader = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Soil Soft Technologies Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/557c02e8-75a6-4e39-b111-f4e3f80cf79b.png" 
                alt="Soil Soft Technologies" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* APIGEN Logo */}
            <div className="flex items-center space-x-3 border-l border-gray-200 pl-8">
              <img 
                src="/lovable-uploads/7814459c-190e-4124-934d-b97c24411d2a.png" 
                alt="APIGEN - NextGen Testing Platform" 
                className="h-10 w-auto"
              />
            </div>
          </div>
          
          {/* Tata Play Logo */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground font-medium">Demonstration for</span>
            <img 
              src="/lovable-uploads/61013ed1-368c-48de-b9e6-473371d02e74.png" 
              alt="Tata Play" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;