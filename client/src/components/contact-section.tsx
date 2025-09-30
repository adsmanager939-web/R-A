import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { PhoneIcon, MailIcon, ClockIcon, LockIcon } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formKey, setFormKey] = useState(0);
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      scamType: undefined,
      amountLost: undefined,
      description: undefined,
      agreeToTerms: undefined,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your inquiry",
        description: "A fraud specialist will contact you within 2 hours.",
      });
      form.reset();
      setFormKey(prev => prev + 1);
    },
    onError: (error: any) => {
      toast({
        title: "Submission failed",
        description: error.message || "Please try again or call our helpline.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Started Today</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fill out our secure form for a free consultation. All information is kept strictly confidential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">24/7 Helpline</h4>
                  <p className="text-muted-foreground" data-testid="phone-number">+1 (226) 479-6091</p>
                  <p className="text-sm text-muted-foreground">Available 24 hours for urgent cases</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Support</h4>
                  <p className="text-muted-foreground" data-testid="email-address">contact@trueclaim.com</p>
                  <p className="text-sm text-muted-foreground">Secure encrypted communications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <ClockIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Response Time</h4>
                  <p className="text-muted-foreground">Within 2 hours</p>
                  <p className="text-sm text-muted-foreground">For all case inquiries</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <LockIcon className="text-primary w-6 h-6" />
                <h4 className="font-semibold text-foreground">100% Confidential</h4>
              </div>
              <p className="text-muted-foreground text-sm">All communications are protected by attorney-client privilege and encrypted for your security.</p>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(555) 123-4567" 
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@example.com" 
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="scamType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Scam *</FormLabel>
                        <Select key={formKey} onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-scam-type">
                              <SelectValue placeholder="Select scam type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="romance">Romance Scam</SelectItem>
                            <SelectItem value="crypto">Cryptocurrency Scam</SelectItem>
                            <SelectItem value="investment">Investment Fraud</SelectItem>
                            <SelectItem value="business">Business Email Compromise</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amountLost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount Lost</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="$50,000" 
                            {...field}
                            value={field.value ?? ""}
                            data-testid="input-amount-lost"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brief Description of Your Case</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Please provide a brief overview of what happened..."
                          {...field}
                          value={field.value ?? ""}
                          data-testid="textarea-description"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value === "true"}
                          onCheckedChange={(checked) => field.onChange(checked ? "true" : "false")}
                          data-testid="checkbox-agree-terms"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-muted-foreground">
                          I agree to the{" "}
                          <button
                            type="button"
                            onClick={() => {
                              const element = document.getElementById("legal");
                              if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </button>{" "}
                          and{" "}
                          <button
                            type="button"
                            onClick={() => {
                              const element = document.getElementById("legal");
                              if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-primary hover:underline"
                          >
                            Legal Disclaimer
                          </button>
                          , and consent to being contacted about my case.
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full py-4 text-lg font-semibold"
                  disabled={submitMutation.isPending}
                  data-testid="button-submit-consultation"
                >
                  {submitMutation.isPending ? "Submitting..." : "Get My Free Consultation"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
