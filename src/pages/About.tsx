import Subheading from "@/components/Subheading";
import { Badge } from "@/components/ui/badge";
import HeroImg from "/heroImg.webp"
import { Compass, Eye, Sparkles, Heart, Users, Trophy, Church, ShieldCheck } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Discipline", text: "We believe disciplined habits, punctuality, respect, focus are the foundation of every great learner." },
  { icon: Church, title: "Faith & Character", text: "Spiritual values and godly character shape how our students treat themselves and others." },
  { icon: Trophy, title: "Excellence", text: "We push our students to compete, perform and represent the school with pride." },
  { icon: Users, title: "Leadership", text: "Through summits, conferences and daily responsibility, we raise students who can lead." },
  { icon: Heart, title: "Care", text: "Small classes mean every child is seen, known and supported." },
  { icon: Sparkles, title: "Well-rounded growth", text: "Sports, music, drama, dance and the arts — a full childhood, not just textbooks." },
];

const About = () => {
    
    return ( 
        <>
            <section className="min-h-[85vh] bg-soft-blob backdrop-blur-xs w-full">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <Subheading 
                    title={<Badge className="border border-border px-6 py-4 bg-background text-primary uppercase">About us</Badge>}
                    heading="Determined to excel. Able to stand out with God's might."
                    text="Aestomic Schools is a Nursery, Primary and Secondary school built on discipline, godly values and strong academics — preparing children to thrive in school and in life."
                    />
                    
                    <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
                        <img src={HeroImg} alt="Aestomic Schools campus" loading="lazy" width={1280} height={832} className="w-full h-auto brightness-10 grayscale object-cover"/>
                    </div>        
                </div> 
            </section>
            <section className="mt-16 space-y-12 max-w-7xl mx-auto px-5 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Subheading 
                    variant="action"
                    title="Our story"
                    heading="Founded on faith, discipline and a love for learning."
                    />
                    <div className="mt-6 space-y-3 text-muted-foreground text-base md:text-lg leading-relaxed">
                        <p>
                            Aestomic Schools was built on a simple belief: a child is more than their report card. We focus on discipline first because well-formed habits make strong learners and we surround that discipline with care, faith and exposure to the wider world.
                        </p>
                        <p>
                            Our students don't just sit in class. They participate in inter-school competitions, attend leadership and growth summits, take part in sports, and express themselves through music, drama and dance at our end-of-year celebrations.
                        </p> 
                        <p>
                            We're also steadily growing our hands-on STEM and lab practicals so children can learn by doing.Above all, we raise our children to know God, respect themselves and others, and stand out wherever life takes them.
                        </p>
                    </div>  
                </div>
                <div className="grid md:grid-cols-2 gap-6 px-5 lg:px-8">
                    <div className="h-full rounded-3xl p-8 md:p-10 bg-nursery-soft">
                        <span className="grid place-items-center w-12 h-12 rounded-2xl bg-nursery text-nursery-foreground">
                            <Eye className="w-6 h-6" />
                        </span>
                        <h3 className="mt-5 font-display text-2xl md:text-3xl font-semibold">Our Vision</h3>
                        <p className="mt-3 text-foreground/80 leading-relaxed">
                            To raise disciplined, God-fearing and high-achieving young people who think clearly, work hard, and contribute meaningfully to their families, communities and the world.
                        </p>
                    </div>
                    <div className="h-full rounded-3xl p-8 md:p-10 bg-primary-stage-soft">
                        <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary-stage text-primary-stage-foreground">
                            <Compass className="w-6 h-6" />
                        </span>
                        <h3 className="mt-5 font-display text-2xl md:text-3xl font-semibold">Our Mission</h3>
                        <p className="mt-3 text-foreground/80 leading-relaxed">
                            To provide structured, faith-rooted education that builds strong academics, real character and exposure to leadership, competitions, sports and the arts — so every Aestomic child is ready to stand out.
                        </p>
                    </div>
                </div>
                <div>
                    <Subheading 
                    title="What we believe"
                    heading="Values that shape every day."
                    />
                    <div className="px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {values.map((h) => (
                            <div className="flex flex-col gap-2 border border-border p-4 rounded-2xl" key={h.title}>
                                <span className="h-8 w-8 rounded-full bg-primary/20 inline-flex items-center justify-center"><h.icon className="w-5 h-5 text-primary" /></span>
                                <h3 className="font-semibold text-sm sm:text-bold">{h.title}</h3>
                                <p className="text-sm text-muted-foreground">{h.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 my-18">
                    <div className="aspect-4/3 rounded-3xl overflow-hidden">
                        <img src={HeroImg} alt="Teacher reading with student" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-4/3 rounded-3xl overflow-hidden">
                        <img src={HeroImg} alt="Teacher reading with student" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>
        </>
       
     );
}
 
export default About;