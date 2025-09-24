import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle, Lock, UserCheck, FileCheck } from 'lucide-react';

const SecurityPage = () => {
  const [fraudCheckEnabled, setFraudCheckEnabled] = useState(true);
  const [adminApprovalRequired, setAdminApprovalRequired] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Security & Fraud Prevention</h1>
            <p className="text-lg text-gray-600">Advanced security measures to ensure authentic alumni connections</p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Multi-Layer Verification</CardTitle>
                  <CardDescription>
                    Comprehensive verification process using educational records, professional history, and peer validation
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Admin Approval System</CardTitle>
                  <CardDescription>
                    Manual review by institution administrators to ensure only legitimate alumni gain access
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Data Encryption</CardTitle>
                  <CardDescription>
                    End-to-end encryption of all personal information and communication between users
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>

          {/* Security Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Configure fraud detection and approval workflows
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div 
                    className="flex items-center justify-between"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="space-y-1">
                      <h4 className="font-medium">Enable Fraud Detection</h4>
                      <p className="text-sm text-gray-600">
                        Automatically detect suspicious activity and profiles
                      </p>
                    </div>
                    <Switch
                      checked={fraudCheckEnabled}
                      onCheckedChange={setFraudCheckEnabled}
                    />
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-between"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="space-y-1">
                      <h4 className="font-medium">Require Admin Approval</h4>
                      <p className="text-sm text-gray-600">
                        All new registrations need administrator approval
                      </p>
                    </div>
                    <Switch
                      checked={adminApprovalRequired}
                      onCheckedChange={setAdminApprovalRequired}
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Security Alerts
                  </CardTitle>
                  <CardDescription>
                    Recent security events and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div 
                    className="p-4 bg-orange-50 border border-orange-200 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div className="flex-1">
                        <h5 className="font-medium text-orange-900">Suspicious Activity Detected</h5>
                        <p className="text-sm text-orange-700 mt-1">
                          Multiple login attempts from unusual locations (Demo only)
                        </p>
                        <Badge variant="outline" className="mt-2 border-orange-300 text-orange-800">
                          Demo Alert
                        </Badge>
                      </div>
                    </div>
                  </motion.div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <h5 className="font-medium text-green-900">Security Scan Completed</h5>
                        <p className="text-sm text-green-700 mt-1">
                          Weekly security audit completed successfully
                        </p>
                        <Badge variant="outline" className="mt-2 border-green-300 text-green-800">
                          All Clear
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <h5 className="font-medium text-blue-900">Verification Update</h5>
                        <p className="text-sm text-blue-700 mt-1">
                          12 new profiles verified this week
                        </p>
                        <Badge variant="outline" className="mt-2 border-blue-300 text-blue-800">
                          Processed
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Security Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Security Statistics</CardTitle>
                <CardDescription>
                  Overview of security metrics and fraud prevention effectiveness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Verified Users</h4>
                    <p className="text-3xl font-bold text-green-600">892</p>
                    <p className="text-sm text-green-600">71.5% of total</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Blocked Attempts</h4>
                    <p className="text-3xl font-bold text-red-600">23</p>
                    <p className="text-sm text-red-600">This month</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Pending Reviews</h4>
                    <p className="text-3xl font-bold text-yellow-600">156</p>
                    <p className="text-sm text-yellow-600">Awaiting approval</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Security Score</h4>
                    <p className="text-3xl font-bold text-blue-600">98.5%</p>
                    <p className="text-sm text-blue-600">Excellent</p>
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

export default SecurityPage;