
import { SidebarProvider } from "@/components/ui/sidebar"
import { OtakrewSidebar } from "@/components/OtakrewSidebar"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { TrendingSection } from "@/components/TrendingSection"
import { Layout } from "@/components/Layout"

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <TrendingSection />
    </Layout>
  );
};

export default Index;
