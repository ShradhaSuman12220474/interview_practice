"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mic, BarChart2, Zap, MessageSquare, FileText } from 'lucide-react';

const features = [
  {
    icon: <Mic className="w-8 h-8 text-primary-200" />,
    title: "Voice-Enabled Practice",
    description: "Practice with our AI interviewer that understands and responds to your voice, just like a real interview."
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary-200" />,
    title: "Personalized Feedback",
    description: "Get detailed insights on your performance, including communication skills and technical knowledge."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary-200" />,
    title: "Custom Interviews",
    description: "Tailor your interview practice with topics and difficulty levels that match your goals."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary-200" />,
    title: "Real-time Interaction",
    description: "Experience natural, flowing conversations with our advanced AI interviewer."
  },
  {
    icon: <FileText className="w-8 h-8 text-primary-200" />,
    title: "Comprehensive Reports",
    description: "Receive detailed feedback reports to track your progress over time."
  }
];

const HomePage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    console.log("clicked");
    router.push(isAuthenticated ? '/dashboard' : '/sign-up');
  };

  return (
    <div className="min-h-screen bg-dark-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-200 to-dark-300 text-white pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ace Your Next Interview with <span className="text-primary-200">AI-Powered</span> Practice
            </h1>
            <p className="text-xl text-light-100 max-w-3xl mx-auto mb-10">
              Build confidence and sharpen your skills with realistic voice-enabled mock interviews. Get personalized feedback to excel in your job search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button  
                onClick={handleGetStarted}
                className="btn-primary text-lg px-8 py-6 z-10 flex items-center gap-2 group"
              >
                Start Practicing Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleGetStarted}
                variant="outline" 
                className="text-lg px-8 py-6 border-primary-200 z-10 text-primary-200 hover:bg-primary-200/10"
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </section>

      {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetStarted}
                className="btn-primary text-lg px-8 py-6 flex items-center gap-2 group"
              >
                Start Practicing Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleGetStarted}
                variant="outline" 
                className="text-lg px-8 py-6 border-primary-200 text-primary-200 hover:bg-primary-200/10"
              >
                See How It Works
              </Button>
            </div> */}

      {/* Features Section */}
      <section className="py-20 bg-dark-200 pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PrepWise?</h2>
            <p className="text-light-100 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with expert interview techniques to give you the best preparation possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-dark-300 p-8 rounded-2xl hover:bg-dark-200/50 transition-all duration-300 border border-dark-100/20"
              >
                <div className="bg-dark-100/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-light-100/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-200/10 to-primary-100/10 pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to ace your next interview?</h2>
          <p className="text-lg text-light-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have improved their interview skills with PrepWise.
          </p>
          <Button 
            onClick={handleGetStarted}
            className="btn-primary text-lg px-8 py-6 flex items-center gap-2 mx-auto group"
          >
            Get Started for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
// export default page