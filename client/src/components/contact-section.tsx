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
import { PhoneIcon, MailIcon, ClockIcon, LockIcon, CheckCircle, ArrowRight } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ContactSection() {
  const { toast } = useToast();
  const [formKey, setFormKey] = useState(0);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
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
      setShowSuccessDialog(true);
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">Get Your Free Consultation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards recovering your funds. Our experts are ready to help you 24/7.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-white p-3 rounded-lg flex-shrink-0">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3a52] text-lg mb-1">24/7 Helpline</h4>
                  <p className="text-[#1a3a52] font-semibold text-lg" data-testid="phone-number">+1 (226) 479-6091</p>
                  <p className="text-sm text-gray-500 mt-1">Available 24 hours for urgent cases</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-white p-3 rounded-lg flex-shrink-0">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3a52] text-lg mb-1">Email Support</h4>
                  <p className="text-[#1a3a52] font-semibold" data-testid="email-address">inquiry@trueclaim.associates</p>
                  <p className="text-sm text-gray-500 mt-1">Secure encrypted communications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-white p-3 rounded-lg flex-shrink-0">
                  <ClockIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3a52] text-lg mb-1">Response Time</h4>
                  <p className="text-[#1a3a52] font-semibold text-lg">Within 2 hours</p>
                  <p className="text-sm text-gray-500 mt-1">For all case inquiries</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-xl text-white shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <LockIcon className="text-[#d4af37] w-7 h-7" />
                <h4 className="font-bold text-xl">100% Confidential</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">All communications are protected by attorney-client privilege and encrypted for your security. Your information is never shared with third parties.</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a3a52] font-semibold">Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field}
                            className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
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
                        <FormLabel className="text-[#1a3a52] font-semibold">Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(555) 123-4567" 
                            {...field}
                            className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
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
                      <FormLabel className="text-[#1a3a52] font-semibold">Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@example.com" 
                          {...field}
                          className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
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
                        <FormLabel className="text-[#1a3a52] font-semibold">Type of Scam *</FormLabel>
                        <Select key={formKey} onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]" data-testid="select-scam-type">
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
                        <FormLabel className="text-[#1a3a52] font-semibold">Amount Lost</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="$50,000" 
                            {...field}
                            value={field.value ?? ""}
                            className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
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
                      <FormLabel className="text-[#1a3a52] font-semibold">Brief Description of Your Case</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Please provide a brief overview of what happened..."
                          {...field}
                          value={field.value ?? ""}
                          className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
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
                          className="border-gray-300 data-[state=checked]:bg-[#d4af37] data-[state=checked]:border-[#d4af37]"
                          data-testid="checkbox-agree-terms"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-600 font-normal">
                          I agree to the{" "}
                          <button
                            type="button"
                            onClick={() => {
                              const element = document.getElementById("legal");
                              if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-[#d4af37] hover:underline font-semibold"
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
                            className="text-[#d4af37] hover:underline font-semibold"
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
                  className="w-full py-6 text-lg font-bold bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  disabled={submitMutation.isPending}
                  data-testid="button-submit-consultation"
                >
                  {submitMutation.isPending ? (
                    "Submitting..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Get My Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full p-3">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <AlertDialogTitle className="text-center text-2xl text-[#1a3a52]">
              Inquiry Sent Successfully!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-gray-600 text-base">
              Thank you for reaching out to TrueClaim & Associates. A fraud recovery specialist will contact you within 2 hours to discuss your case.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white font-semibold"
            >
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
