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

const Avatar = ({ name, imageUrl }: { name: string, imageUrl?: string }) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="w-24 h-24 rounded-full bg-gold-medium flex items-center justify-center text-navy-darkest text-5xl font-bold ring-4 ring-gold-light/50">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-full rounded-full object-cover" />
      ) : (
        <span>{initial}</span>
      )}
    </div>
  );
};

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
    orders: [],
    preferences: {
      fragranceTypes: ['Floral', 'Oriental', 'Woody'],
      notifications: true,
      newsletter: true
    }
  });

  return (
    <div data-theme={theme} className="min-h-screen bg-gradient-to-b from-navy-darkest to-navy-dark">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gold-lightest mb-2 tracking-tight">My Profile</h1>
          <p className="text-lg text-gold-light/80">Manage your account preferences and view your orders</p>
        </div>

        {/* Profile Navigation */}
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="md:w-64">
            <nav className="space-y-2">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'orders', label: 'Orders' },
                { id: 'addresses', label: 'Addresses' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    activeTab === item.id
                      ? 'bg-gold-medium/20 text-gold-lightest shadow-lg'
                      : 'text-gold-light/70 hover:bg-gold-medium/10 hover:text-gold-light'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <div key={activeTab} className="flex-1 min-h-[600px] fade-in">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <section className="bg-navy-dark/50 border border-gold-light/10 rounded-2xl p-8 shadow-2xl">
                  <h2 className="text-3xl font-bold text-gold-light mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gold-light/70 mb-1">Name</label>
                      <p className="text-lg text-gold-lightest">{userProfile.personalInfo.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gold-light/70 mb-1">Email</label>
                      <p className="text-lg text-gold-lightest">{userProfile.personalInfo.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gold-light/70 mb-1">Phone</label>
                      <p className="text-lg text-gold-lightest">{userProfile.personalInfo.phone}</p>
                    </div>
                  </div>
                </section>

                <section className="bg-navy-dark/50 border border-gold-light/10 rounded-2xl p-8 shadow-2xl">
                  <h2 className="text-3xl font-bold text-gold-light mb-6">Recent Orders</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-gold-light/70 border-b-2 border-gold-light/10">
                          <th className="text-left py-4 px-2">Order ID</th>
                          <th className="text-left py-4 px-2">Date</th>
                          <th className="text-left py-4 px-2">Status</th>
                          <th className="text-right py-4 px-2">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userProfile.orders.length > 0 ? userProfile.orders.map((order) => (
                          <tr key={order.orderId} className="border-b border-gold-light/10 hover:bg-navy-dark/30">
                            <td className="py-4 px-2 text-gold-lightest">{order.orderId}</td>
                            <td className="py-4 px-2 text-gold-lightest">{order.date}</td>
                            <td className="py-4 px-2">
                              <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' : 'bg-gold-medium/20 text-gold-medium'}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4 px-2 text-right text-gold-lightest">
                              ${order.total.toFixed(2)}
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan="4" className="text-center py-12 text-gold-light/50">No recent orders</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="bg-navy-dark/50 border border-gold-light/10 rounded-2xl p-8 shadow-2xl">
                  <h2 className="text-3xl font-bold text-gold-light mb-6">Fragrance Preferences</h2>
                  <div className="flex flex-wrap gap-3">
                    {userProfile.preferences.fragranceTypes.map((type) => (
                      <span
                        key={type}
                        className="px-4 py-2 rounded-full bg-gold-medium/10 text-gold-medium text-sm transition-transform transform hover:scale-110"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-navy-dark/50 border border-gold-light/10 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-gold-light mb-8">Order History</h2>
                <div className="space-y-8">
                  {userProfile.orders.length > 0 ? userProfile.orders.map((order) => (
                    <div key={order.orderId} className="border-b-2 border-gold-light/10 pb-8 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-xl text-gold-lightest font-semibold">Order {order.orderId}</p>
                          <p className="text-gold-light/70">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' : 'bg-gold-medium/20 text-gold-medium'}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="space-y-4 mt-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div>
                              <p className="text-gold-lightest">{item.name}</p>
                              <p className="text-gold-light/70">Quantity: {item.quantity}</p>
                            </div>
                            <p className="text-gold-lightest">${item.price.toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gold-light/10 flex justify-between font-semibold">
                        <span className="text-gold-light">Total</span>
                        <span className="text-gold-lightest text-lg">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-12 text-gold-light/50">
                      <p>You have no past orders.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-navy-dark/50 border border-gold-light/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gold-light">Shipping Addresses</h2>
                  <button className="px-5 py-2 rounded-lg bg-gold-medium text-navy-darkest hover:bg-gold-light transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Add New Address
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {userProfile.shippingAddresses.map((address, index) => (
                    <div key={index} className="border-2 border-gold-light/10 rounded-xl p-6 hover:border-gold-light/30 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          {address.isDefault && (
                            <span className="inline-block px-3 py-1 rounded-full text-xs bg-gold-medium/20 text-gold-medium mb-2">
                              Default
                            </span>
                          )}
                        </div>
                        <button className="text-gold-light/70 hover:text-gold-lightest transition-colors">Edit</button>
                      </div>
                      <div className="space-y-2 text-gold-lightest">
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} {address.zipCode}</p>
                        <p>{address.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}