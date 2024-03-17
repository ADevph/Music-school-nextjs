import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Scroll from "@/components/Scroll";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-while (/[0.02]) ">
      <Hero />
      <FeaturedCourses />
      <Scroll />
      <TestimonialCards />
      <UpcomingEvents />
      <Instructors />
      <Footer />
    </main>
  );
}
