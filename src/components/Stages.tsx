import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImg from "/heroImg.webp"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import Subheading from "./subheading";

const stages = [
  {
    to: "/programs" as const,
    name: "Nursery",
    age: "Ages 2 – 5",
    blurb: "A loving, structured start where little ones learn routines, manners and the joy of discovery.",
    img: HeroImg,
    bg: "bg-nursery-soft",
    chip: "bg-nursery text-nursery-foreground",
    ring: "ring-nursery",
  },
  {
    to: "/programs" as const,
    name: "Primary",
    age: "Ages 6 – 11",
    blurb: "Strong foundation in literacy, numeracy and character. Building well-rounded, confident learners.",
    img: HeroImg,
    bg: "bg-primary-stage-soft",
    chip: "bg-primary-stage text-primary-stage-foreground",
    ring: "ring-primary-stage",
  },
  {
    to: "/programs" as const,
    name: "Secondary",
    age: "Ages 12 – 17",
    blurb: "Rigorous academics, leadership, and STEM - preparing confident, capable learners.",
    img: HeroImg,
    bg: "bg-secondary-stage-soft",
    chip: "bg-secondary-stage text-secondary-stage-foreground",
    ring: "ring-secondary-stage",
  },
];

const Stages = () => {
    return ( 
        <section className="w-full">
            <Subheading 
                title="welcome"
                heading="A school that takes your child seriously."
                text="From Nursery to Secondary, we raise children with strong academics, real discipline, godly values and exposure to the world — through inter-school competitions, leadership summits, sports and the arts."
            />
            <section className="mx-auto max-w-7xl px-5 lg:px-8">
                <Subheading variant="action" ctaLabel="See all Programs" ctaHref="/programs"
                    title="our school"
                    heading="Three stages, one journey."
                />
                <div className="grid md:grid-cols-3 gap-6 py-8">
                {
                    stages.map((s) => (
                        <Link to={s.to} key={s.name} className={`group rounded-3xl transition hover:-translate-y-1`}>
                                <Card className={`mx-auto w-full ${s.bg} rounded-2xl mb-5 ${s.ring}`}>
                                    <img
                                        src={s.img}
                                        alt={`${s.name} stage`}
                                        className="relative aspect-video w-full object-cover group-hover:scale-105 transition border-0 duration-200"
                                    />
                                    <CardHeader className="py-5">
                                        <Badge className={`px-3 text-xs font-medium ${s.chip}`}>{s.age}</Badge>
                                        <CardTitle className="mt-3 font-display text-2xl font-semibold">{s.name}</CardTitle>
                                        <CardDescription className="mt-2 text-foreground/70 leading-relaxed">
                                        {s.blurb}
                                        </CardDescription>
                                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                                            Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                                        </span>
                                    </CardHeader>
                                        
                                    </Card>
                        </Link>
                    ))
                }
                </div>
            </section>
        </section>
     );
}
 
export default Stages;