import Subheading from "@/components/Subheading";
import { Badge } from "@/components/ui/badge";

const Programs = () => {
    return ( 
        <section className="w-full h-screen"> 
            <div className="bg-soft-blob">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <Subheading 
                    title={<Badge className="border border-border px-6 py-4 bg-background text-primary uppercase">our programs</Badge>} 
                    heading="A program designed for every stage of growth." 
                    text="From the first songs in Nursery to confident graduation in Secondary, every stage at Aestomic combines discipline, strong academics, faith and real-world exposure."
                    />
                </div>
            </div>    
        </section>
     );
}
 
export default Programs;