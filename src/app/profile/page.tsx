'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/components/providers/ThemeProvider';

interface UserProfile {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  shippingAddresses: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    isDefault: boolean;
  }[];
  orders: {
    orderId: string;
    date: string;
    status: string;
    total: number;
    items: {
      name: string;
      quantity: number;
      price: number;
    }[];
  }[];
  preferences: {
    fragranceTypes: string[];
    notifications: boolean;
    newsletter: boolean;
  };
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const { theme } = useTheme();
  
  // Dummy data - replace with actual user data from your backend
  const [userProfile, setUserProfile] = useState<UserProfile>({
    personalInfo: {
      name: 'Alexandra Smith',
      email: 'alexandra.smith@example.com',
      phone: '+1 (555) 123-4567'
    },
    shippingAddresses: [
      {
        street: '123 Luxury Lane',
        city: 'Beverly Hills',
        state: 'CA',
        zipCode: '90210',
        country: 'United States',
        isDefault: true
      }
    ],
    orders: [
      {
        orderId: 'ORD-2025-001',
        date: '2025-08-20',
        status: 'Delivered',
        total: 245.00,
        items: [
          {
            name: 'Midnight Orchid Eau de Parfum',
            quantity: 1,
            price: 245.00
          }
        ]
      }
    ],
    preferences: {
      fragranceTypes: ['Floral', 'Oriental', 'Woody'],
      notifications: true,
      newsletter: true
    }
  });

  // We no longer need this as we're using the global theme context

  return (
    <div data-theme={theme} className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gold-medium mb-2">My Profile</h1>
          <p className="text-gold-light/80">Manage your account preferences and view your orders</p>
        </div>

        {/* Profile Navigation */}
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64">
            <nav className="space-y-1">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'orders', label: 'Orders' },
                { id: 'addresses', label: 'Addresses' },
                { id: 'preferences', label: 'Preferences' },
                { id: 'security', label: 'Security' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-gold-medium/10 text-gold-medium'
                      : 'text-gold-light/70 hover:bg-gold-medium/5 hover:text-gold-light'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-h-[600px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <section className="bg-navy-darkest/30 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-gold-medium mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold-light/70 mb-1">Name</label>
                      <p className="text-gold-light">{userProfile.personalInfo.name}</p>
                    </div>
                    <div>
                      <label className="block text-gold-light/70 mb-1">Email</label>
                      <p className="text-gold-light">{userProfile.personalInfo.email}</p>
                    </div>
                    <div>
                      <label className="block text-gold-light/70 mb-1">Phone</label>
                      <p className="text-gold-light">{userProfile.personalInfo.phone}</p>
                    </div>
                  </div>
                </section>

                <section className="bg-navy-darkest/30 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-gold-medium mb-4">Recent Orders</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-gold-light/70 border-b border-gold-light/10">
                          <th className="text-left py-3">Order ID</th>
                          <th className="text-left py-3">Date</th>
                          <th className="text-left py-3">Status</th>
                          <th className="text-right py-3">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userProfile.orders.map((order) => (
                          <tr key={order.orderId} className="border-b border-gold-light/10">
                            <td className="py-4 text-gold-light">{order.orderId}</td>
                            <td className="py-4 text-gold-light">{order.date}</td>
                            <td className="py-4">
                              <span className="px-3 py-1 rounded-full text-sm bg-gold-medium/20 text-gold-medium">
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4 text-right text-gold-light">
                              ${order.total.toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="bg-navy-darkest/30 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-gold-medium mb-4">Fragrance Preferences</h2>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.preferences.fragranceTypes.map((type) => (
                      <span
                        key={type}
                        className="px-4 py-2 rounded-full bg-gold-medium/10 text-gold-medium text-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-navy-darkest/30 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-gold-medium mb-6">Order History</h2>
                <div className="space-y-6">
                  {userProfile.orders.map((order) => (
                    <div key={order.orderId} className="border-b border-gold-light/10 pb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gold-medium font-medium">Order {order.orderId}</p>
                          <p className="text-gold-light/70">{order.date}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-sm bg-gold-medium/20 text-gold-medium">
                          {order.status}
                        </span>
                      </div>
                      <div className="space-y-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div>
                              <p className="text-gold-light">{item.name}</p>
                              <p className="text-gold-light/70">Quantity: {item.quantity}</p>
                            </div>
                            <p className="text-gold-light">${item.price.toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gold-light/10 flex justify-between">
                        <span className="text-gold-light">Total</span>
                        <span className="text-gold-medium font-medium">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-navy-darkest/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gold-medium">Shipping Addresses</h2>
                  <button className="px-4 py-2 rounded-lg bg-gold-medium text-navy-darkest hover:bg-gold-light transition-colors">
                    Add New Address
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userProfile.shippingAddresses.map((address, index) => (
                    <div key={index} className="border border-gold-light/10 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          {address.isDefault && (
                            <span className="inline-block px-2 py-1 rounded text-xs bg-gold-medium/20 text-gold-medium mb-2">
                              Default
                            </span>
                          )}
                        </div>
                        <button className="text-gold-light/70 hover:text-gold-light">Edit</button>
                      </div>
                      <div className="space-y-1 text-gold-light">
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} {address.zipCode}</p>
                        <p>{address.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <section className="bg-navy-darkest/30 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-gold-medium mb-4">Fragrance Preferences</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gold-light mb-2">Preferred Fragrance Types</label>
                      <div className="flex flex-wrap gap-2">
                        {userProfile.preferences.fragranceTypes.map((type) => (
                          <span
                            key={type}
                            className="px-4 py-2 rounded-full bg-gold-medium/10 text-gold-medium text-sm"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-navy-darkest/30 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-gold-medium mb-4">Communication Preferences</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gold-light">Email Notifications</p>
                        <p className="text-gold-light/70 text-sm">Receive updates about your orders and account</p>
                      </div>
                      <button
                        className={`w-12 h-6 rounded-full transition-colors ${
                          userProfile.preferences.notifications ? 'bg-gold-medium' : 'bg-gold-light/20'
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 rounded-full bg-navy-darkest transition-transform ${
                            userProfile.preferences.notifications ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gold-light">Newsletter Subscription</p>
                        <p className="text-gold-light/70 text-sm">Stay updated with new releases and exclusive offers</p>
                      </div>
                      <button
                        className={`w-12 h-6 rounded-full transition-colors ${
                          userProfile.preferences.newsletter ? 'bg-gold-medium' : 'bg-gold-light/20'
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 rounded-full bg-navy-darkest transition-transform ${
                            userProfile.preferences.newsletter ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <section className="bg-navy-darkest/30 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-gold-medium mb-4">Password & Security</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gold-light mb-2">Change Password</label>
                      <div className="space-y-3">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full px-4 py-2 rounded-lg bg-navy-darkest border border-gold-light/20 text-gold-light focus:border-gold-medium focus:outline-none"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full px-4 py-2 rounded-lg bg-navy-darkest border border-gold-light/20 text-gold-light focus:border-gold-medium focus:outline-none"
                        />
                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          className="w-full px-4 py-2 rounded-lg bg-navy-darkest border border-gold-light/20 text-gold-light focus:border-gold-medium focus:outline-none"
                        />
                        <button className="px-6 py-2 bg-gold-medium text-navy-darkest rounded-lg hover:bg-gold-light transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-navy-darkest/30 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-gold-medium mb-4">Two-Factor Authentication</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gold-light">Enable 2FA</p>
                        <p className="text-gold-light/70 text-sm">Add an extra layer of security to your account</p>
                      </div>
                      <button className="w-12 h-6 rounded-full bg-gold-light/20">
                        <span className="block w-4 h-4 rounded-full bg-navy-darkest translate-x-1" />
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
