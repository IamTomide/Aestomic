import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface SubheadingProps {
    title: ReactNode;
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
    ctaLabel,
    ctaHref,
}: SubheadingProps) => {
    const titleContent = typeof title === "string"
        ? <span className="text-sm font-semibold uppercase tracking-widest text-primary">{title}</span>
        : title;
    if (variant === "action") {
        return (
            <div className="mx-auto text-left max-w-7xl">
                {titleContent}<br />
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold capitalize text-balance">
                        {heading}
                    </h2>
                    {ctaHref && (
                        <Link to={ctaHref} className="group hidden lg:inline-flex font-semibold capitalize items-center gap-1 text-base pt-6 hover:underline">
                            {ctaLabel}
                            <ArrowRight className="w-4 h-4 group-hover:scale-125" />
                        </Link>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl px-5 lg:px-8 py-12 md:py-28 text-center mx-auto">
            {titleContent}
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-semibold text-balance">
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