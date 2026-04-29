import { Link } from "react-router-dom";
import HeroSection from "@/components/Hero";
import Stages from "@/components/Stages";
import { ArrowRight, BookOpen, Trophy, Music, Church, ShieldCheck, Users, Beaker } from "lucide-react";
const highlights = [
  { icon: ShieldCheck, title: "Discipline First", text: "Clear, consistent standards that build character from day one." },
  { icon: BookOpen, title: "Strong Academics", text: "A focused curriculum that prepares students for exams and beyond." },
  { icon: Trophy, title: "Inter-school Competitions", text: "Representing the school in academic, debate and sporting competitions." },
  { icon: Users, title: "Leadership Summits", text: "Students attend summits and conferences on leadership and personal growth." },
  { icon: Church, title: "Spiritual Values", text: "Faith and godly character woven into everyday school life." },
  { icon: Music, title: "Music, Drama & Dance", text: "Creative expression through performance, especially at end-of-year events." },
  { icon: Beaker, title: "Hands-on STEM", text: "Practical lab work where children try, test and build — not just read." },
  { icon: Trophy, title: "Sports & Activity", text: "An active campus where students play, compete and learn teamwork." },
];
import HeroImg from "@/assets/heroImg.webp"
const images = [HeroImg, HeroImg, HeroImg, HeroImg]

const Home = () => {
    return ( 
        <div className="min-h-screen">
            <section className="bg-soft-blob backdrop-blur-2xl w-full">
                <HeroSection />
            </section>
            <Stages />
            <section className="max-w-7xl space-y-16 mx-auto px-5 lg:px-8 py-16 md:py-28">
                <div className="max-w-4xl text-center mx-auto">
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary">What we offer</span>
                    <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance">
                        More than just classroom learning.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                        An honest look at the experiences and values that shape every Aestomic child.
                    </p>
                </div>  
                <div className="px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {highlights.map((h) => (
                        <div className="flex flex-col gap-2 border border-border p-4 rounded-2xl" key={h.title}>
                            <span className="h-8 w-8 rounded-full bg-primary/20 inline-flex items-center justify-center"><h.icon className="w-5 h-5 text-primary" /></span>
                            <h3 className="font-semibold">{h.title}</h3>
                            <p className="text-sm text-muted-foreground">{h.text}</p>
                        </div>
                    ))}
                </div>
                <div className="mx-auto text-left">
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary">school life</span><br />
                    <div className="flex items-center justify-between">
                        <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold capitalize text-balance">
                            Moments from our days
                        </h2> 
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((src, i) => (
                        <div key={i} className="aspect-video md:aspect-4/3 overflow-hidden rounded-2xl">
                            <img src={src} alt={`School life moment ${i + 1}`} className="aspect-video md:aspect-4/3 w-full h-auto object-cover" />
                        </div>
                    ))}
                </div>

                <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-primary text-primary-foreground p-8 md:p-16 text-center">
                    <div className="absolute inset-0 bg-soft-blob opacity-30" />
                    <div className="relative">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-balance">Ready to give your child a strong start?</h2>
                        <p className="mt-4 max-w-xl mx-auto opacity-90 text-sm md:text-base">Visit our campus, meet our teachers, and see what a disciplined, joyful learning community looks like.</p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-card text-foreground px-6 py-3.5 text-sm font-medium hover:scale-[1.03] transition">
                            Book a tour <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium hover:bg-primary-foreground/10 transition">
                            Our story
                        </Link>
                        </div>
                    </div>
                    </div>
            </section>

        </div>
    );
}
 
export default Home;