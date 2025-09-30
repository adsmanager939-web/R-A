import { ShieldIcon, ScaleIcon, UsersIcon } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About TrueClaim</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a specialized team of fraud investigators and legal professionals dedicated to helping scam victims recover their lost funds.
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
                <h3 className="text-xl font-semibold text-foreground mb-2">Licensed Investigators</h3>
                <p className="text-muted-foreground">Our team includes licensed private investigators with decades of experience in financial fraud cases.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <ScaleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Legal Experts</h3>
                <p className="text-muted-foreground">Qualified attorneys specializing in fraud recovery and financial crimes prosecution.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <UsersIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Victim Advocates</h3>
                <p className="text-muted-foreground">Compassionate support team dedicated to guiding victims through the recovery process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
