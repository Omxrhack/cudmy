import { Hero } from "@/components/hero";
import { BrandMarquee } from "@/components/brand-marquee";
import { PromoBanners } from "@/components/promo-banners";
import { TrendingCourses } from "@/components/trending-courses";
import { CareerAccelerators } from "@/components/career-accelerators";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <BrandMarquee />
      <PromoBanners />
      <TrendingCourses />
      <CareerAccelerators />
      <Testimonials />
    </main>
  );
}
