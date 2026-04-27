import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import primaryLogo from "@/assets/primaryLogo.svg";
import secondaryLogo from "@/assets/secondaryLogo.svg";
import { NavItems } from "@/constants/navItems";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

      useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

    return (
        <>
            <header className={`w-full sticky top-0 z-50 ${
            scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/60 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.15)]" : "bg-transparent"}`}>
                <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="inline-flex -space-x-2">
                            <img src={primaryLogo} alt="Primary Logo" className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-background shadow-md group-hover:scale-105 transition-transform"/>
                            <img src={secondaryLogo} alt="Secondary Logo" className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-background shadow-md group-hover:scale-105 transition-transform" /> 
                        </span>
                        <h1 className="text-2xl font-bold">Aestomic <span className="text-primary">Schools</span></h1>
                    </Link>
                    <nav className="hidden md:flex items-center gap-1.5">
                        {NavItems.map((item) => (
                            <Link key={item.name} to={item.to} className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary/10 hover:rounded-2xl">{item.name}</Link>
                        ))}
                    </nav>
                    <Link to="/contact"> <Button className="hidden md:flex p-5">Enroll now </Button></Link>
                    <Button 
                        className="md:hidden p-2 border-0" 
                        variant={"outline"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </header>

            
            <div className={` fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div 
                className="absolute inset-0 bg-foreground/20 backdrop-blur-md" 
                onClick={() => setIsMenuOpen(false)} 
                ></div>
                <div className={`absolute inset-x-3 top-18 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl transition-all duration-700 
                    ${isMenuOpen ? " opacity-100" : "opacity-0"}`}
                >
                    <div className="bg-soft-blob">
                        <nav className="px-3 pb-4 pt-3 flex flex-col gap-1.5 backdrop-blur-2xl rounded-2xl">
                            {NavItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="flex items-center justify-between p-4 bg-background shadow-xs rounded-xl text-base font-medium hover:bg-primary/10 hover:rounded-2xl"
                            >
                                <span>{item.name} </span>
                                <ArrowRight className="w-4 h-4 opacity-60"/>
                            </Link>
                            ))}
                            <Link
                            to="/contact"
                            className="mt-2 text-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
                            >
                            Enroll Now
                            </Link>
                        </nav>
                    </div>
                    <div className="border-t border-border/60 bg-card/50 px-5 py-4 grid gap-2 text-xs rounded-2xl text-muted-foreground">
                        <a href="tel:+2348001234567" className="flex items-center gap-2 hover:text-foreground">
                            <Phone className="w-3.5 h-3.5 text-primary" /> +234 802 883 6547
                        </a>
                        <a href="mailto:hello@aestomicschools.com" className="flex items-center gap-2 hover:text-foreground">
                            <Mail className="w-3.5 h-3.5 text-primary" /> aestomic@gmail.com
                        </a>
                        <span className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-primary" /> Lagos, Nigeria
                        </span>
                    </div>
 
                </div>
            </div>
         </>   

     );
}
 
export default Navigation;