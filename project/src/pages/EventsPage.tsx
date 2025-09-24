import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, Clock, Users, User, MapPin } from 'lucide-react';
import { eventsData } from '../data/eventsData';

const EventsPage = () => {
  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Workshop': return 'bg-blue-100 text-blue-800';
      case 'Networking': return 'bg-green-100 text-green-800';
      case 'Competition': return 'bg-orange-100 text-orange-800';
      case 'Panel': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getAvailabilityStatus = (capacity, registered) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90) return { status: 'Almost Full', color: 'text-red-600' };
    if (percentage >= 70) return { status: 'Filling Fast', color: 'text-orange-600' };
    return { status: 'Available', color: 'text-green-600' };
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
            <p className="text-lg text-gray-600">Join workshops, networking sessions, and career development events</p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventsData.map((event, index) => {
              const availability = getAvailabilityStatus(event.capacity, event.registered);
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                        <span className={`text-sm font-medium ${availability.color}`}>
                          {availability.status}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{formatDate(event.date)}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-gray-600">
                          <User className="h-4 w-4" />
                          <span className="text-sm">Instructor: {event.instructor}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>{event.registered}/{event.capacity} registered</span>
                          </div>
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                              disabled={event.registered >= event.capacity}
                            >
                              {event.registered >= event.capacity ? 'Event Full' : 'Register Now'}
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Registration Successful!</DialogTitle>
                              <DialogDescription>
                                Thanks for registering for "{event.title}"! You'll receive a confirmation email shortly with event details and joining instructions.
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Event Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Event Statistics</CardTitle>
                <CardDescription className="text-blue-800">
                  Engagement metrics from our event program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-900 mb-2">Total Events</h4>
                    <p className="text-3xl font-bold text-blue-600">{eventsData.length}</p>
                    <p className="text-sm text-blue-600">This semester</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-900 mb-2">Total Registrations</h4>
                    <p className="text-3xl font-bold text-green-600">
                      {eventsData.reduce((sum, event) => sum + event.registered, 0)}
                    </p>
                    <p className="text-sm text-green-600">Active participants</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-orange-900 mb-2">Average Attendance</h4>
                    <p className="text-3xl font-bold text-orange-600">
                      {Math.round((eventsData.reduce((sum, event) => sum + (event.registered / event.capacity), 0) / eventsData.length) * 100)}%
                    </p>
                    <p className="text-sm text-orange-600">Fill rate</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-900 mb-2">Most Popular</h4>
                    <p className="text-lg font-bold text-purple-600">Networking</p>
                    <p className="text-sm text-purple-600">Event type</p>
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

export default EventsPage;