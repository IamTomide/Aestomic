import { Badge } from "@/components/ui/badge";
import Subheading from "@/components/Subheading";
import HeroImg from "/heroImg.webp"

const items = [
  { src: HeroImg, label: "Our Tech4Dev girls", span: "md:col-span-2 md:row-span-2" },
  { src: HeroImg, label: "Children School crest" },
  { src: HeroImg, label: "Secondary School crest" },
  { src: HeroImg, label: "STEM & Robotics", span: "md:col-span-2" },
  { src: HeroImg, label: "One-on-one care" },
  { src: HeroImg, label: "Creative arts" },
  { src: HeroImg, label: "Sports day" },
  { src: HeroImg, label: "Cultural day" },
  { src: HeroImg, label: "Graduation", span: "md:col-span-2" },
  { src: HeroImg, label: "Nursery play" },
  { src: HeroImg, label: "Primary class" },
  { src: HeroImg, label: "Science lab" },
  { src: HeroImg, label: "Our campus", span: "md:col-span-2" },
];

const Gallery = () => {
    return ( 
        <section className="w-full min-h-screen"> 
            <div className="bg-soft-blob">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <Subheading 
                    title={<Badge className="border border-border px-6 py-4 bg-background text-primary uppercase">gallery</Badge>} 
                    heading="A glimpse into school life." 
                    text="Real classrooms, real children, real moments, from quiet lessons to joyful graduations."
                    />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5 lg:px-8 my-20">
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
                    {items.map((it, i) => (
                        <figure
                        key={i}
                        className={`relative overflow-hidden rounded-3xl group ${it.span ?? ""}`}
                        >
                            <img src={it.src} alt={it.label} loading="lazy" className="w-full h-full object-cover brightness-10 group-hover:scale-105 transition duration-700" />
                            <figcaption className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition">
                                <span className="text-white text-sm font-medium">{it.label}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div> 
            </div>  
        </section>
     );
}
 
export default Gallery;