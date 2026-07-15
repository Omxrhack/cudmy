import { Hero } from "@/components/hero";
import { StackProof } from "@/components/stack-proof";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <div className="px-6 py-16 sm:px-10 lg:px-16">
        <StackProof />
      </div>
    </main>
  );
}
