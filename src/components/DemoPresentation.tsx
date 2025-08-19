import { useState, useEffect } from "react";
import DemoHeader from "@/components/DemoHeader";
import SlideIntro from "@/components/slides/SlideIntro";
import SlideApigen from "@/components/slides/SlideApigen";
import SlideTataPlay from "@/components/slides/SlideTataPlay";
import SlideTechnical from "@/components/slides/SlideTechnical";
import SlideCTA from "@/components/slides/SlideCTA";

const DemoPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { component: SlideIntro, title: "Soil Soft Technologies" },
    { component: SlideApigen, title: "APIGEN Platform" },
    { component: SlideTataPlay, title: "DTH API Solutions" },
    { component: SlideTechnical, title: "Technical Capabilities" },
    { component: SlideCTA, title: "Proof of Concept" }
  ];

  const handlePrevious = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-background">
      <DemoHeader
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        slideTitle={slides[currentSlide].title}
      />
      
      <main className="relative">
        <div className="slide-container">
          <CurrentSlideComponent />
        </div>
        
        {/* Slide Indicators */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DemoPresentation;