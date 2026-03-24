import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import EditorialSection from '@/components/EditorialSection';
import ProofSection from '@/components/ProofSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CategorySection from '@/components/CategorySection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <HeroSection />
        <EditorialSection />
        <HowItWorksSection />
        <ProofSection />
        <FAQSection />
        <CategorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
