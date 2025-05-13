
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Mail, Phone, User, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';
import SocialLink from "@/components/SocialLink";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

// EmailJS configuration constants
const EMAILJS_SERVICE_ID = "service_wrtc6lp";
const EMAILJS_TEMPLATE_ID = "template_bxssa0o";
const EMAILJS_PUBLIC_KEY = "l7EnEqLT6bLARNO1q";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message
        },
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-enter">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-enter" style={{
            animationDelay: "0.1s"
          }}>
            Feel free to drop a message or connect on social media!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-enter" style={{ animationDelay: "0.2s" }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-background"
                          placeholder="Your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-background"
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-background"
                          placeholder="Your message here..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col gap-8 animate-enter" style={{ animationDelay: "0.3s" }}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@swarnimstha.com.np" 
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="bg-background p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>contact@swarnimstha.com.np</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="bg-background p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span>+977 9804014731</span>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <h3 className="text-2xl font-semibold mb-6 text-center">Let's Connect!</h3>
              <div className="flex justify-center gap-6">
                <SocialLink 
                  icon={Instagram} 
                  href="https://www.instagram.com/sthaswarnim17/" 
                  label="Follow on Instagram"
                  hoverColor="#E1306C"
                />
                <SocialLink 
                  icon={Facebook} 
                  href="https://www.facebook.com/sthaswarnim17/" 
                  label="Connect on Facebook"
                  hoverColor="#1877F2"
                />
                <SocialLink 
                  icon={Linkedin} 
                  href="https://www.linkedin.com/in/sthaswarnim17/" 
                  label="Connect on LinkedIn"
                  hoverColor="#0A66C2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
