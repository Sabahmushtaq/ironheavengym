import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Programs from "@/components/Programs";
import Quiz from "@/components/Quiz";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Programs />
      <Quiz />
      <Transformation />
      <Testimonials />
      <Footer />
    </main>
  );
}