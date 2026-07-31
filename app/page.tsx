import { Hero } from "@/components/hero";
import { CategoryChips } from "@/components/category-chips";
import { BrandMarquee } from "@/components/brand-marquee";
import { StatsBand } from "@/components/stats-band";
import { PromoBanners } from "@/components/promo-banners";
import { TrendingCourses } from "@/components/trending-courses";
import { CareerAccelerators } from "@/components/career-accelerators";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <CategoryChips />
      <BrandMarquee />
      <StatsBand />
      <TrendingCourses />
      <PromoBanners />
      <CareerAccelerators />
      <Testimonials />
    </main>
  );
}
