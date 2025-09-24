import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { School, Users, Building, MapPin } from 'lucide-react';
import { collegeMentorsData } from '../data/collegeMentors';

const CollegePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Cross-College Mentor Pool</h1>
            <p className="text-lg text-gray-600">
              Support for Tier 2/3 institutions included - Access mentors across different colleges
            </p>
          </div>

          {/* College Tabs */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-5 w-5 text-blue-600" />
                Select College
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="College A" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="College A">College A</TabsTrigger>
                  <TabsTrigger value="College B">College B</TabsTrigger>
                  <TabsTrigger value="College C">College C</TabsTrigger>
                </TabsList>

                {Object.entries(collegeMentorsData).map(([college, mentors]) => (
                  <TabsContent key={college} value={college} className="mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mentors.map((mentor, index) => (
                          <motion.div
                            key={mentor.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                          >
                            <Card className="h-full hover:shadow-lg transition-all duration-300">
                              <CardHeader className="pb-3">
                                <div className="flex items-center space-x-3">
                                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Users className="h-6 w-6 text-blue-600" />
                                  </div>
                                  <div>
                                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                                    <Badge variant="outline" className="mt-1">
                                      {college}
                                    </Badge>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  <div>
                                    <h4 className="font-semibold text-blue-600">{mentor.expertise}</h4>
                                    <p className="text-sm text-gray-600">{mentor.experience} years experience</p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Building className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm">{mentor.company}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Users className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">{mentor.mentees} active mentees</span>
                                  </div>
                                  <div className="pt-2">
                                    <Badge className="bg-green-100 text-green-800">
                                      Cross-College Available
                                    </Badge>
                                  </div>
                                </div>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                                      Connect
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Cross-College Connection</DialogTitle>
                                      <DialogDescription>
                                        This feature enables students from different institutions to connect with mentors. 
                                        Connection request has been noted for development.
                                      </DialogDescription>
                                    </DialogHeader>
                                  </DialogContent>
                                </Dialog>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <School className="h-5 w-5" />
                  Cross-College Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Benefits for Tier 2/3 Institutions:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Access to industry experts from premier institutions
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Expanded networking opportunities beyond local alumni
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Diverse perspectives from multiple educational backgrounds
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Equal access to career development resources
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Platform Features:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Unified mentor pool across all partner institutions
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Smart matching algorithms for optimal mentor-mentee pairs
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Collaborative events and workshops
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Shared resource library and best practices
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollegePage;