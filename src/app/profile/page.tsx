'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import '../perfume.css';

interface UserProfile {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    joinDate: string;
  };
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
  addresses: {
    id: string;
    type: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    isDefault: boolean;
  }[];
}

function ProfilePageContent() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const searchParams = useSearchParams();
  
  const userEmail = searchParams?.get('email') || 'user@example.com';
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    personalInfo: {
      name: 'Priya Sharma',
      email: userEmail,
      phone: '+91 98765 43210',
      joinDate: 'June 2024'
    },
    orders: [
      {
        orderId: 'MF-2024-0085',
        date: 'August 15, 2025',
        status: 'Delivered',
        total: 8500,
        items: [
          { name: 'Midnight Rose - 100ml', quantity: 1, price: 6500 },
          { name: 'Ocean Breeze - 50ml', quantity: 1, price: 2000 }
        ]
      },
      {
        orderId: 'MF-2024-0072',
        date: 'July 28, 2025',
        status: 'Delivered',
        total: 12500,
        items: [
          { name: 'Royal Oud - 100ml', quantity: 1, price: 12500 }
        ]
      }
    ],
    addresses: [
      {
        id: '1',
        type: 'Home',
        street: '123 Marina Drive, Bandra West',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400050',
        isDefault: true
      },
      {
        id: '2',
        type: 'Office',
        street: '456 Corporate Plaza, Andheri East',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400069',
        isDefault: false
      }
    ]
  });

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'orders', label: 'Orders' },
    { id: 'addresses', label: 'Addresses' }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Simple Header */}
      <div className="pt-24 pb-8 px-4 border-b border-[var(--gold-light)]/20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Account</h1>
          <p className="text-[var(--navy-medium)]">Manage your profile and view your orders</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-[var(--gold-light)]/20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-[var(--gold-medium)] text-[var(--gold-medium)]'
                    : 'border-transparent text-[var(--navy-medium)] hover:text-[var(--foreground)] hover:border-[var(--gold-light)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {activeTab === 'profile' && (
          <div className="space-y-8">
            {/* Personal Information */}
            <section className="bg-white dark:bg-[var(--navy-dark)] rounded-lg border border-[var(--gold-light)]/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[var(--foreground)]">Personal Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-[var(--gold-medium)] hover:text-[var(--gold-dark)] font-medium text-sm"
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--navy-medium)] mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userProfile.personalInfo.name}
                      onChange={(e) => setUserProfile({
                        ...userProfile,
                        personalInfo: { ...userProfile.personalInfo, name: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-[var(--gold-light)]/30 rounded-md bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)] focus:border-transparent"
                    />
                  ) : (
                    <p className="text-[var(--foreground)]">{userProfile.personalInfo.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--navy-medium)] mb-2">
                    Email Address
                  </label>
                  <p className="text-[var(--foreground)]">{userProfile.personalInfo.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--navy-medium)] mb-2">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={userProfile.personalInfo.phone}
                      onChange={(e) => setUserProfile({
                        ...userProfile,
                        personalInfo: { ...userProfile.personalInfo, phone: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-[var(--gold-light)]/30 rounded-md bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)] focus:border-transparent"
                    />
                  ) : (
                    <p className="text-[var(--foreground)]">{userProfile.personalInfo.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--navy-medium)] mb-2">
                    Member Since
                  </label>
                  <p className="text-[var(--foreground)]">{userProfile.personalInfo.joinDate}</p>
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 pt-6 border-t border-[var(--gold-light)]/20">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-[var(--gold-medium)] text-[var(--navy-darkest)] rounded-md font-medium hover:bg-[var(--gold-light)] transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </section>

            {/* Account Summary */}
            <section className="bg-white dark:bg-[var(--navy-dark)] rounded-lg border border-[var(--gold-light)]/20 p-6">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-6">Account Summary</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-[var(--gold-light)]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[var(--foreground)] mb-1">
                    {userProfile.orders.length}
                  </div>
                  <div className="text-sm text-[var(--navy-medium)]">Total Orders</div>
                </div>
                
                <div className="text-center p-4 bg-[var(--gold-light)]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[var(--foreground)] mb-1">
                    ₹{userProfile.orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-[var(--navy-medium)]">Total Spent</div>
                </div>
                
                <div className="text-center p-4 bg-[var(--gold-light)]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[var(--foreground)] mb-1">
                    {userProfile.addresses.length}
                  </div>
                  <div className="text-sm text-[var(--navy-medium)]">Saved Addresses</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[var(--foreground)]">Order History</h2>
              <p className="text-sm text-[var(--navy-medium)]">{userProfile.orders.length} orders</p>
            </div>

            {userProfile.orders.map((order) => (
              <div key={order.orderId} className="bg-white dark:bg-[var(--navy-dark)] rounded-lg border border-[var(--gold-light)]/20 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Order #{order.orderId}</h3>
                    <p className="text-sm text-[var(--navy-medium)]">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {order.status}
                    </span>
                    <span className="font-semibold text-[var(--foreground)]">₹{order.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 text-sm">
                      <span className="text-[var(--foreground)]">{item.name} × {item.quantity}</span>
                      <span className="text-[var(--navy-medium)]">₹{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-[var(--gold-light)]/20 flex justify-between items-center">
                  <button className="text-[var(--gold-medium)] hover:text-[var(--gold-dark)] font-medium text-sm">
                    View Details
                  </button>
                  <button className="text-[var(--gold-medium)] hover:text-[var(--gold-dark)] font-medium text-sm">
                    Reorder
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'addresses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[var(--foreground)]">Saved Addresses</h2>
              <button className="px-4 py-2 bg-[var(--gold-medium)] text-[var(--navy-darkest)] rounded-md font-medium hover:bg-[var(--gold-light)] transition-colors text-sm">
                Add New Address
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {userProfile.addresses.map((address) => (
                <div key={address.id} className="bg-white dark:bg-[var(--navy-dark)] rounded-lg border border-[var(--gold-light)]/20 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] mb-1">{address.type}</h3>
                      {address.isDefault && (
                        <span className="inline-block px-2 py-1 bg-[var(--gold-light)]/20 text-[var(--gold-medium)] text-xs rounded-md font-medium">
                          Default
                        </span>
                      )}
                    </div>
                    <button className="text-[var(--gold-medium)] hover:text-[var(--gold-dark)] text-sm font-medium">
                      Edit
                    </button>
                  </div>
                  
                  <div className="text-sm text-[var(--navy-medium)] space-y-1">
                    <p>{address.street}</p>
                    <p>{address.city}, {address.state} {address.zipCode}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ThemeWrapper>
      <ProfilePageContent />
    </ThemeWrapper>
  );
}
