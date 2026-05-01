import { Badge } from "@/components/ui/badge";
import Subheading from "@/components/Subheading";

const Contact = () => {
    return ( 
        <section className="w-full min-h-screen"> 
            <div className="bg-soft-blob">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <Subheading 
                    title={<Badge className="border border-border px-6 py-4 bg-background text-primary uppercase">contact</Badge>} 
                    heading="Come and see us." 
                    text="Visit our campus, meet our teachers, and see the discipline, faith and warmth that make Aestomic Schools home for your child."
                    />
                </div>
            </div>    
        </section>
     );
}
 
export default Contact;