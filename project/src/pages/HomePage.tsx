import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, Database, Shield, School, BookOpen } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Users,
      title: "Alumni Directory & Verification",
      description: "Comprehensive database of verified alumni profiles with professional details"
    },
    {
      icon: UserCheck,
      title: "Smart Mentor–Mentee Matching",
      description: "AI-powered matching system connecting mentors and mentees based on goals and expertise"
    },
    {
      icon: Database,
      title: "Centralized Data Hub",
      description: "Analytics dashboard with insights on alumni engagement and career progression"
    },
    {
      icon: Shield,
      title: "Secure & Transparent System",
      description: "Advanced fraud detection and verification processes for authentic connections"
    },
    {
      icon: School,
      title: "Cross-College Mentor Pool",
      description: "Access mentors from multiple institutions, supporting Tier 2/3 colleges"
    },
    {
      icon: BookOpen,
      title: "Integrated Free Resources",
      description: "Comprehensive library of career resources, guides, and learning materials"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mentor Bridge
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
              A Digital Platform for Alumni Data & Mentorship
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect. Collaborate. Grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/alumni">Explore Alumni</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg">
                  <Link to="/events">Join an Event</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools for alumni engagement, mentorship, and career development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Alumni Engagement?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of alumni and students building meaningful professional connections
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;