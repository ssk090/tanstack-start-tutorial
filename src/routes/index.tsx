import { createFileRoute } from "@tanstack/react-router";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-10";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<>
			<HeroSection />
			<Features />
			<Pricing />
			<ContentSection />
			<FooterSection />
		</>
	);
}
