import DemoHeader from "@/components/DemoHeader";
import DemoHero from "@/components/DemoHero";
import DemoFeatures from "@/components/DemoFeatures";
import DemoBenefits from "@/components/DemoBenefits";
import DemoCTA from "@/components/DemoCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DemoHeader />
      <main>
        <DemoHero />
        <DemoFeatures />
        <DemoBenefits />
        <DemoCTA />
      </main>
    </div>
  );
};

export default Index;
