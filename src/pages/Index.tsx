import Navbar from "@/components/coffee/Navbar";
import Hero from "@/components/coffee/Hero";
import Marquee from "@/components/coffee/Marquee";
import Categories from "@/components/coffee/Categories";
import FeaturedProducts from "@/components/coffee/FeaturedProducts";
import BestSeller from "@/components/coffee/BestSeller";
import About from "@/components/coffee/About";
import Blog from "@/components/coffee/Blog";
import Testimonials from "@/components/coffee/Testimonials";
import Newsletter from "@/components/coffee/Newsletter";
import Footer from "@/components/coffee/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Brewed — Premium Artisan Coffee Beans & Ground Blends";
    const metaDesc = document.querySelector('meta[name="description"]');
    const content =
      "Freshly roasted single-origin coffee beans and perfectly ground blends from artisan roasters. Shipped within 48 hours of roasting.";
    if (metaDesc) metaDesc.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <FeaturedProducts />
      <BestSeller />
      <About />
      <Blog />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
