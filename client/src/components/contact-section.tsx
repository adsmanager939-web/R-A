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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#7B1418] uppercase tracking-widest font-bold mb-4">Get Started</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000000] uppercase leading-none tracking-tight">
            Free<br />Consultation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Take the first step towards recovering your funds. Our experts are ready to help you 24/7. We reply within 24 hours for an initial review.
            </p>

            <div className="space-y-0">
              {[
                { icon: PhoneIcon, label: "24/7 Helpline", value: "+1 (613) 416-0183", href: "https://wa.me/16134160183", sub: "Available 24 hours for urgent cases" },
                { icon: MailIcon, label: "Email Support", value: "inquiry@refund-associates.com", href: null, sub: "Secure encrypted communications" },
                { icon: ClockIcon, label: "Response Time", value: "Within 24 hours", href: null, sub: "For all case inquiries" },
                { icon: LockIcon, label: "100% Confidential", value: "Attorney-client privilege", href: null, sub: "All communications encrypted for your security" },
              ].map((item, index) => (
                <div key={index} className="border-t border-black/10 py-6 flex items-start gap-6">
                  <item.icon className="w-5 h-5 text-[#7B1418] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-bold text-[#000000] hover:text-[#7B1418] transition-colors" data-testid={`contact-${item.label.toLowerCase().replace(/\s/g, '-')}`}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-bold text-[#000000]" data-testid={`contact-${item.label.toLowerCase().replace(/\s/g, '-')}`}>{item.value}</p>
                    )}
                    <p className="text-sm text-gray-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-black/10"></div>
            </div>
          </div>

          <div className="border border-black/10 p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" key={formKey}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#000000] font-semibold text-sm uppercase tracking-wider">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="border-black/20 focus:border-[#7B1418] rounded-none placeholder:text-gray-300"
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
                        <FormLabel className="text-[#000000] font-semibold text-sm uppercase tracking-wider">Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(555) 123-4567"
                            {...field}
                            className="border-black/20 focus:border-[#7B1418] rounded-none placeholder:text-gray-300"
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
                      <FormLabel className="text-[#000000] font-semibold text-sm uppercase tracking-wider">Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          className="border-black/20 focus:border-[#7B1418] rounded-none placeholder:text-gray-300"
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
                        <FormLabel className="text-[#000000] font-semibold text-sm uppercase tracking-wider">Type of Scam *</FormLabel>
                        <Select key={formKey} onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-black/20 focus:border-[#7B1418] rounded-none" data-testid="select-scam-type">
                              <SelectValue placeholder="Select scam type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white rounded-none">
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
                        <FormLabel className="text-[#000000] font-semibold text-sm uppercase tracking-wider">Amount Lost</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="$50,000"
                            {...field}
                            value={field.value ?? ""}
                            className="border-black/20 focus:border-[#7B1418] rounded-none placeholder:text-gray-300"
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
                      <FormLabel className="text-[#000000] font-semibold text-sm uppercase tracking-wider">Brief Description</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Please provide a brief overview of what happened..."
                          {...field}
                          value={field.value ?? ""}
                          className="border-black/20 focus:border-[#7B1418] rounded-none placeholder:text-gray-300"
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
                          className="border-black/30 data-[state=checked]:bg-[#7B1418] data-[state=checked]:border-[#7B1418] rounded-none"
                          data-testid="checkbox-agree-terms"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-500 font-normal">
                          I agree to the{" "}
                          <button
                            type="button"
                            onClick={() => {
                              const el = document.getElementById("legal");
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-[#7B1418] hover:underline font-semibold"
                          >
                            Privacy Policy
                          </button>{" "}
                          and{" "}
                          <button
                            type="button"
                            onClick={() => {
                              const el = document.getElementById("legal");
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-[#7B1418] hover:underline font-semibold"
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
                  className="w-full py-6 text-base font-bold bg-[#7B1418] hover:bg-[#5E0F12] text-white uppercase tracking-wider rounded-none transition-colors"
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
        <AlertDialogContent className="max-w-md bg-white rounded-none border border-black/10">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-[#7B1418] p-3">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <AlertDialogTitle className="text-center text-2xl text-[#000000] font-black uppercase">
              Inquiry Sent Successfully!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-gray-500 text-base">
              Thank you for reaching out to Refund & Associates. A fraud recovery specialist will contact you within 24 hours to discuss your case.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-[#7B1418] hover:bg-[#5E0F12] text-white font-bold rounded-none uppercase tracking-wider"
            >
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
