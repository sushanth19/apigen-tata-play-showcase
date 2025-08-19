import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DemoHeaderProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  slideTitle: string;
}

const DemoHeader = ({ currentSlide, totalSlides, onPrevious, onNext, slideTitle }: DemoHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img 
              src="/lovable-uploads/557c02e8-75a6-4e39-b111-f4e3f80cf79b.png" 
              alt="Soil Soft Technologies" 
              className="h-10 w-auto"
            />
            <div className="h-8 w-px bg-gray-300"></div>
            <img 
              src="/lovable-uploads/7814459c-190e-4124-934d-b97c24411d2a.png" 
              alt="APIGEN" 
              className="h-8 w-auto"
            />
            <div className="h-8 w-px bg-gray-300"></div>
            <span className="text-lg font-semibold text-navy">{slideTitle}</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onPrevious}
                disabled={currentSlide === 0}
                className="h-10 w-10 p-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <span className="text-sm text-muted-foreground font-medium px-4">
                {currentSlide + 1} / {totalSlides}
              </span>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onNext}
                disabled={currentSlide === totalSlides - 1}
                className="h-10 w-10 p-0"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <img 
              src="/lovable-uploads/61013ed1-368c-48de-b9e6-473371d02e74.png" 
              alt="Tata Play" 
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;