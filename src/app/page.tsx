import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import TestimonialCards from "@/components/TestimonialCards";



export default function Home() {
  return (
  
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-while (/[0.02]) ">

<Hero />

<FeaturedCourses />
<Scroll />
<TestimonialCards />


    </main>

  );
}
