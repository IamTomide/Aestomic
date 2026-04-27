import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImg from "@/assets/heroImg.webp"

const stats = [
                        { n: "3", l: "School stages" },
                        { n: "Faith", l: "At our core" },
                        { n: "100%", l: "Care & attention" },
                    ]


const HeroSection = () => {
    return ( 
        <div className="flex flex-col lg:flex-row lg:gap-16 max-w-7xl mx-auto px-5 lg:px-8 pt-10 pb-14 md:pt-20 md:pb-24 lg:items-center">
            <div className="flex flex-col lg:gap-4 max-w-xl min-w-xs">
                <span className="bg-background rounded-lg px-6 py-2 text-primary inline-flex gap-2 items-center w-max">
                    <Sparkles className="w-3.5 h-3.5" /> Nursery . Primary .Secondary
                </span>
                <h2 className="mt-5 font-display text-[2.5rem] leading-[1.05] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">Welcome to Aestomic <span className="text-primary">Schools</span></h2>
                <p className="mt-5 text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">Aestomic Schools is a disciplined, faith-rooted learning community where children grow academically, spiritually and personally, through strong teaching, leadership exposure, sports and the arts.</p>
                <div className="flex mt-7 flex-wrap gap-3">
                    <Link to="/contact">
                        <Button className="flex rounded-full px-8 py-6 text-sm font-medium text-primary-foreground shadow-lg hover:scale-[1.03] transition">Enroll your child
                            <ArrowRight />
                        </Button>
                    </Link>
                    <Link to="/programs">
                        <Button className="rounded-full bg-card border border-border px-8 py-6 text-sm font-medium hover:bg-secondary text-muted-foreground transition">Explore Programs
                        </Button>
                    </Link>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-6">
                    {stats.map((s) => (
                        <div key={s.l}>
                        <div className="font-display text-base md:text-xl lg:text-2xl font-semibold text-primary">{s.n}</div>
                        <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative lg:max-w-xl mt-16 lg:mt-0 aspect-video">
                <div className="relative rounded-3xl shadow-2xl ring-1 ring-border">
                    <img src={HeroImg} alt="School Image" className="w-full h-full object-cover rounded-3xl aspect-video" fetchPriority="high" loading="eager" />
                
                    <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 bg-card rounded-2xl shadow-xl border border-border p-4 animate-[float_3s_ease-in-out_infinite]">
                        <span className="grid place-items-center w-11 h-11 rounded-xl bg-nursery text-nursery-foreground">
                            <ShieldCheck className="w-5 h-5" />
                        </span>
                        <div>
                            <div className="font-display font-semibold text-sm">Discipline & care</div>
                            <div className="text-xs text-muted-foreground">The foundation we build on</div>
                        </div>
                    </div> 
                    <div className="absolute -top-5 -right-5 hidden md:flex items-center gap-3 bg-card rounded-2xl shadow-xl border border-border p-4 animate-float" style={{ animationDelay: "1.5s" }}>
                        <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary-stage text-primary-stage-foreground">
                            <Trophy className="w-5 h-5" />
                        </span>
                        <div>
                            <div className="font-display font-semibold text-sm">Competitions</div>
                            <div className="text-xs text-muted-foreground">Our students represent us</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeroSection;