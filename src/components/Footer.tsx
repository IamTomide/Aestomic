import primaryLogo from "@/assets/primaryLogo.svg";
import secondaryLogo from "@/assets/secondaryLogo.svg";
import { NavItems } from "@/constants/navItems";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="bg-cream"> 
            <div className="flex flex-col md:flex-row max-w-7xl md:mx-auto gap-12 py-12 px-4 justify-between items-start md:items-center">
                <div className="flex flex-col gap-3 md:max-w-sm">
                    <div className="flex gap-1 items-center">
                        <img src={primaryLogo} alt="Primary Logo" className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-background shadow-md group-hover:scale-105 transition-transform"/>
                        <img src={secondaryLogo} alt="Secondary Logo" className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-background shadow-md group-hover:scale-105 transition-transform" />
                        <h1 className="text-xl">Aestomic Schools</h1>
                    </div>
                    <p className="text-muted-foreground text-sm">A disciplined, faith-rooted learning community raising children who excel academically, lead with character, and stand out wherever life takes them</p>
                    <p className="text-muted-foreground italic text-xs">"Determined to Excel" · "Able to stand out with God's might"</p>
                </div>
                <div>
                    <h2 >Explore</h2>
                    <ul>
                        {NavItems.map((item) => (
                            <li key={item.name}> 
                                <Link to={item.to} className="text-muted-foreground text-sm hover:text-foreground">
                                    {item.name}
                                </Link> 
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:max-w-sm flex flex-col gap-2">
                    <h2>Contact Us</h2>
                    <p className="text-muted-foreground text-sm">Have questions? Reach out to us!</p>
                    <a href="tel:+2348001234567" className="flex items-center gap-2 hover:text-foreground text-muted-foreground text-sm">
                        <Phone className="w-3.5 h-3.5 text-primary" /> +234 802 883 6547
                    </a>
                    <a href="mailto:aestomic@gmail.com" className="flex items-center gap-2 hover:text-foreground text-muted-foreground text-sm">
                        <Mail className="w-3.5 h-3.5 text-primary" /> aestomic@gmail.com
                    </a>
                </div>
            </div>                
            <p className="p-4 text-muted-foreground border-t border-border text-xs text-center">&copy; 2026 Aestomic Schools. All rights reserved.</p>
        </footer>
     );
}
 
export default Footer;