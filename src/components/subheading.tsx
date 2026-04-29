import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SubheadingProps {
    title: string;
    heading: string;
    text?: string;
    variant?: "default" | "action";
    ctaLabel?: string;
    ctaHref?: string;
}

const Subheading = ({
    title,
    heading,
    text,
    variant = "default",
    ctaLabel = "See all Programs",
    ctaHref = "/programs",
}: SubheadingProps) => {
    if (variant === "action") {
        return (
            <div className="mx-auto text-left max-w-7xl">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">{title}</span><br />
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold capitalize text-balance">
                        {heading}
                    </h2>
                    <Link to={ctaHref} className="hidden lg:inline-flex items-center gap-1 text-sm pt-6 hover:underline">
                        {ctaLabel}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl px-5 lg:px-8 py-16 md:py-28 text-center mx-auto">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{title}</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance">
                {heading}
            </h2>
            {text ? (
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                    {text}
                </p>
            ) : null}
        </div>
    );
}
 
export default Subheading;