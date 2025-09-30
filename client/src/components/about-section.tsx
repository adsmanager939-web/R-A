import { ShieldIcon, ScaleIcon, UsersIcon } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">A Team of Seasoned Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team includes over 1,300 skilled lawyers and fraud investigators, each bringing specialized expertise to every case. With deep industry knowledge and advanced investigative tools, we handle even the most complex fraud cases with precision and dedication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team of fraud investigators" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-team"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <ShieldIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground">Our globally distributed and multilingual team provides round-the-clock support across multiple continents, allowing for swift and effective responses no matter where an incident occurs.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <ScaleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Blockchain Forensics</h3>
                <p className="text-muted-foreground">Our veteran team brings together professionals with law enforcement, military, and crypto industry backgrounds, utilizing advanced tools like Chainalysis and proprietary AI technology.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <UsersIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">Our relentless pursuit of justice has led to the closure of numerous fraud operations, arrest of key perpetrators, and substantial financial recoveries with an 86% success rate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
