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
    { id: 'addresses', label: 'Addresses' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-isabelline dark:bg-navy-darkest">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-20 pb-20 px-4 bg-gradient-to-br from-[var(--navy-darkest)] via-[var(--navy-dark)] to-[var(--ultra-violet)] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[var(--gold-light)] rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--pale-dogwood)] rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[var(--isabelline)] rounded-full blur-lg"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <svg className="w-12 h-12 text-[var(--gold-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Welcome Back, <span className="text-[var(--gold-light)]">{userProfile.personalInfo.name.split(' ')[0]}</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Manage your fragrance journey and discover your scent preferences
          </p>
          
          {/* Quick stats in banner */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--gold-light)] mb-1">{userProfile.orders.length}</div>
              <div className="text-sm text-white/70">Orders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--gold-light)] mb-1">
                ₹{(userProfile.orders.reduce((sum, order) => sum + order.total, 0) / 1000).toFixed(0)}K
              </div>
              <div className="text-sm text-white/70">Total Spent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--gold-light)] mb-1">{userProfile.addresses.length}</div>
              <div className="text-sm text-white/70">Addresses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white/50 dark:bg-navy-dark/50 backdrop-blur-sm border-b border-rose-quartz/20 dark:border-gold-light/20   z-40">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 font-medium text-sm transition-all duration-300 rounded-t-lg border-b-3 relative ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-navy-darkest border-ultra-violet dark:border-gold-medium text-ultra-violet dark:text-gold-medium shadow-sm'
                    : 'border-transparent text-space-cadet dark:text-pale-dogwood hover:text-ultra-violet dark:hover:text-isabelline hover:bg-white/50 dark:hover:bg-navy-darkest/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab.id === 'profile' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  {tab.id === 'orders' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  )}
                  {tab.id === 'addresses' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {tab.id === 'settings' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {tab.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
        
        {activeTab === 'profile' && (
          <div className="space-y-8">
            {/* Personal Information */}
            <section className="bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-rose-quartz/20 dark:border-gold-light/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ultra-violet to-space-cadet dark:from-gold-medium dark:to-gold-dark rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline">Personal Information</h2>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                    isEditing
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30'
                      : 'bg-ultra-violet dark:bg-gold-medium text-white dark:text-navy-darkest hover:bg-space-cadet dark:hover:bg-gold-dark'
                  }`}
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-ultra-violet dark:text-pale-dogwood mb-3">
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
                        className="w-full px-4 py-3 border border-rose-quartz/30 dark:border-gold-light/30 rounded-xl bg-white dark:bg-navy-darkest text-space-cadet dark:text-isabelline focus:outline-none focus:ring-2 focus:ring-ultra-violet dark:focus:ring-gold-medium focus:border-transparent transition-all"
                      />
                    ) : (
                      <p className="text-lg font-medium text-space-cadet dark:text-isabelline bg-gray-50 dark:bg-navy-darkest/50 p-3 rounded-xl">
                        {userProfile.personalInfo.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ultra-violet dark:text-pale-dogwood mb-3">
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
                        className="w-full px-4 py-3 border border-rose-quartz/30 dark:border-gold-light/30 rounded-xl bg-white dark:bg-navy-darkest text-space-cadet dark:text-isabelline focus:outline-none focus:ring-2 focus:ring-ultra-violet dark:focus:ring-gold-medium focus:border-transparent transition-all"
                      />
                    ) : (
                      <p className="text-lg font-medium text-space-cadet dark:text-isabelline bg-gray-50 dark:bg-navy-darkest/50 p-3 rounded-xl">
                        {userProfile.personalInfo.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-ultra-violet dark:text-pale-dogwood mb-3">
                      Email Address
                    </label>
                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-navy-darkest/50 p-3 rounded-xl">
                      <svg className="w-5 h-5 text-ultra-violet dark:text-gold-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-lg font-medium text-space-cadet dark:text-isabelline">{userProfile.personalInfo.email}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ultra-violet dark:text-pale-dogwood mb-3">
                      Member Since
                    </label>
                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-navy-darkest/50 p-3 rounded-xl">
                      <svg className="w-5 h-5 text-ultra-violet dark:text-gold-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-lg font-medium text-space-cadet dark:text-isabelline">{userProfile.personalInfo.joinDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="mt-8 pt-6 border-t border-rose-quartz/20 dark:border-gold-light/20 flex gap-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-8 py-3 bg-ultra-violet dark:bg-gold-medium text-white dark:text-navy-darkest rounded-xl font-semibold hover:bg-space-cadet dark:hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-8 py-3 bg-gray-100 dark:bg-navy-darkest text-space-cadet dark:text-pale-dogwood rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-navy-dark transition-all duration-300"
                  >
                    Discard
                  </button>
                </div>
              )}
            </section>

            {/* Preferences Section */}
            <section className="bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-rose-quartz/20 dark:border-gold-light/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-quartz to-pale-dogwood dark:from-gold-light dark:to-gold-medium rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-navy-darkest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline">Fragrance Preferences</h2>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-rose-quartz/10 to-pale-dogwood/10 dark:from-gold-light/10 dark:to-gold-medium/10 rounded-xl border border-rose-quartz/20 dark:border-gold-light/20">
                  <div className="text-3xl font-bold text-space-cadet dark:text-isabelline mb-2">Floral</div>
                  <div className="text-sm text-ultra-violet dark:text-pale-dogwood mb-4">Preferred Category</div>
                  <div className="w-full bg-gray-200 dark:bg-navy-darkest rounded-full h-2">
                    <div className="bg-ultra-violet dark:bg-gold-medium h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-rose-quartz/10 to-pale-dogwood/10 dark:from-gold-light/10 dark:to-gold-medium/10 rounded-xl border border-rose-quartz/20 dark:border-gold-light/20">
                  <div className="text-3xl font-bold text-space-cadet dark:text-isabelline mb-2">Evening</div>
                  <div className="text-sm text-ultra-violet dark:text-pale-dogwood mb-4">Preferred Time</div>
                  <div className="w-full bg-gray-200 dark:bg-navy-darkest rounded-full h-2">
                    <div className="bg-ultra-violet dark:bg-gold-medium h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-rose-quartz/10 to-pale-dogwood/10 dark:from-gold-light/10 dark:to-gold-medium/10 rounded-xl border border-rose-quartz/20 dark:border-gold-light/20">
                  <div className="text-3xl font-bold text-space-cadet dark:text-isabelline mb-2">Strong</div>
                  <div className="text-sm text-ultra-violet dark:text-pale-dogwood mb-4">Intensity Level</div>
                  <div className="w-full bg-gray-200 dark:bg-navy-darkest rounded-full h-2">
                    <div className="bg-ultra-violet dark:bg-gold-medium h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ultra-violet to-space-cadet dark:from-gold-medium dark:to-gold-dark rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 6H6l-1-6z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline">Order History</h2>
              </div>
              <div className="text-sm text-ultra-violet dark:text-pale-dogwood">
                Total Orders: <span className="font-semibold text-space-cadet dark:text-isabelline">{userProfile.orders.length}</span>
              </div>
            </div>

            {userProfile.orders.map((order) => (
              <div key={order.orderId} className="bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-rose-quartz/20 dark:border-gold-light/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-quartz/20 to-pale-dogwood/20 dark:from-gold-light/20 dark:to-gold-medium/20 rounded-xl flex items-center justify-center border border-rose-quartz/30 dark:border-gold-light/30">
                      <svg className="w-8 h-8 text-ultra-violet dark:text-gold-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-space-cadet dark:text-isabelline">Order #{order.orderId}</h3>
                      <p className="text-ultra-violet dark:text-pale-dogwood font-medium">{order.date}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-space-cadet dark:text-isabelline">₹{order.total.toLocaleString()}</div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : order.status === 'Processing'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          order.status === 'Delivered' 
                            ? 'bg-green-500'
                            : order.status === 'Processing'
                            ? 'bg-blue-500'
                            : 'bg-yellow-500'
                        }`}></div>
                        {order.status}
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-ultra-violet dark:bg-gold-medium text-white dark:text-navy-darkest rounded-xl font-medium hover:bg-space-cadet dark:hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                      View Details
                    </button>
                  </div>
                </div>

                <div className="border-t border-rose-quartz/20 dark:border-gold-light/20 pt-6">
                  <h4 className="font-semibold text-space-cadet dark:text-isabelline mb-4">Order Items</h4>
                  <div className="grid gap-4">
                    {order.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-navy-darkest/50 rounded-xl">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-space-cadet dark:text-isabelline">{item.name}</h5>
                          <p className="text-sm text-ultra-violet dark:text-pale-dogwood">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-space-cadet dark:text-isabelline">₹{item.price.toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {userProfile.orders.length === 0 && (
              <div className="text-center py-16 bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-rose-quartz/20 dark:border-gold-light/20">
                <div className="w-24 h-24 bg-gray-100 dark:bg-navy-darkest rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 6H6l-1-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-space-cadet dark:text-isabelline mb-2">No Orders Yet</h3>
                <p className="text-ultra-violet dark:text-pale-dogwood mb-6">Start shopping to see your orders here!</p>
                <button className="px-8 py-3 bg-ultra-violet dark:bg-gold-medium text-white dark:text-navy-darkest rounded-xl font-semibold hover:bg-space-cadet dark:hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                  Browse Products
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'addresses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ultra-violet to-space-cadet dark:from-gold-medium dark:to-gold-dark rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline">Saved Addresses</h2>
              </div>
              <button className="px-6 py-3 bg-ultra-violet dark:bg-gold-medium text-white dark:text-navy-darkest rounded-xl font-semibold hover:bg-space-cadet dark:hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                Add New Address
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {userProfile.addresses.map((address) => (
                <div key={address.id} className="bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-rose-quartz/20 dark:border-gold-light/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          address.type === 'Home' 
                            ? 'bg-green-100 dark:bg-green-900/30' 
                            : address.type === 'Office'
                            ? 'bg-blue-100 dark:bg-blue-900/30'
                            : 'bg-purple-100 dark:bg-purple-900/30'
                        }`}>
                          <svg className={`w-5 h-5 ${
                            address.type === 'Home' 
                              ? 'text-green-600 dark:text-green-400' 
                              : address.type === 'Office'
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-purple-600 dark:text-purple-400'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {address.type === 'Home' ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            ) : address.type === 'Office' ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            )}
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-space-cadet dark:text-isabelline text-lg">{address.type}</h3>
                          {address.isDefault && (
                            <span className="inline-flex items-center px-2 py-1 bg-ultra-violet/10 dark:bg-gold-medium/10 text-ultra-violet dark:text-gold-medium text-xs rounded-md font-medium">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-ultra-violet dark:text-gold-medium hover:bg-ultra-violet/10 dark:hover:bg-gold-medium/10 rounded-lg font-medium text-sm transition-all duration-300">
                        Edit
                      </button>
                      <button className="px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg font-medium text-sm transition-all duration-300">
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 text-space-cadet dark:text-pale-dogwood">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-ultra-violet dark:text-gold-medium mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <p className="font-medium">{userProfile.personalInfo.name}</p>
                        <p className="text-sm">{userProfile.personalInfo.phone || '+91 98765 43210'}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-ultra-violet dark:text-gold-medium mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <div className="leading-relaxed">
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} {address.zipCode}</p>
                        <p>India</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {userProfile.addresses.length === 0 && (
              <div className="text-center py-16 bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-rose-quartz/20 dark:border-gold-light/20">
                <div className="w-24 h-24 bg-gray-100 dark:bg-navy-darkest rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-space-cadet dark:text-isabelline mb-2">No Addresses Saved</h3>
                <p className="text-ultra-violet dark:text-pale-dogwood mb-6">Add your first address for faster checkout!</p>
                <button className="px-8 py-3 bg-ultra-violet dark:bg-gold-medium text-white dark:text-navy-darkest rounded-xl font-semibold hover:bg-space-cadet dark:hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                  Add Address
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-ultra-violet to-space-cadet dark:from-gold-medium dark:to-gold-dark rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline">Account Settings</h2>
            </div>

            {/* Notification Preferences */}
            <section className="bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-rose-quartz/20 dark:border-gold-light/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.33 12.83A7 7 0 0112.5 5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 2.5-2 4.5-4.5 4.5H9.17a7 7 0 01-4.84 3.33z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-space-cadet dark:text-isabelline">Notifications</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-space-cadet dark:text-isabelline">Email Notifications</p>
                    <p className="text-sm text-ultra-violet dark:text-pale-dogwood">Receive updates about orders and promotions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ultra-violet/20 dark:peer-focus:ring-gold-medium/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-ultra-violet dark:peer-checked:bg-gold-medium"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-space-cadet dark:text-isabelline">SMS Notifications</p>
                    <p className="text-sm text-ultra-violet dark:text-pale-dogwood">Get order updates via text message</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ultra-violet/20 dark:peer-focus:ring-gold-medium/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-ultra-violet dark:peer-checked:bg-gold-medium"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-space-cadet dark:text-isabelline">Marketing Communications</p>
                    <p className="text-sm text-ultra-violet dark:text-pale-dogwood">Receive special offers and product recommendations</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ultra-violet/20 dark:peer-focus:ring-gold-medium/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-ultra-violet dark:peer-checked:bg-gold-medium"></div>
                  </label>
                </div>
              </div>
            </section>

            {/* Privacy & Security */}
            <section className="bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-rose-quartz/20 dark:border-gold-light/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-space-cadet dark:text-isabelline">Privacy & Security</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-navy-darkest/50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-ultra-violet dark:text-gold-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    <div>
                      <p className="font-medium text-space-cadet dark:text-isabelline">Change Password</p>
                      <p className="text-sm text-ultra-violet dark:text-pale-dogwood">Update your account password</p>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-ultra-violet dark:bg-gold-medium text-white dark:text-navy-darkest rounded-lg font-medium hover:bg-space-cadet dark:hover:bg-gold-dark transition-all duration-300">
                    Update
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-navy-darkest/50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-ultra-violet dark:text-gold-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="font-medium text-space-cadet dark:text-isabelline">Two-Factor Authentication</p>
                      <p className="text-sm text-ultra-violet dark:text-pale-dogwood">Add an extra layer of security</p>
                    </div>
                  </div>
                  <button className="px-6 py-2 border border-ultra-violet dark:border-gold-medium text-ultra-violet dark:text-gold-medium rounded-lg font-medium hover:bg-ultra-violet/10 dark:hover:bg-gold-medium/10 transition-all duration-300">
                    Enable
                  </button>
                </div>
              </div>
            </section>

            {/* Account Actions */}
            <section className="bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-rose-quartz/20 dark:border-gold-light/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-space-cadet dark:text-isabelline">Account Actions</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-navy-darkest/50 rounded-xl">
                  <div>
                    <p className="font-medium text-space-cadet dark:text-isabelline">Download Account Data</p>
                    <p className="text-sm text-ultra-violet dark:text-pale-dogwood">Export your account information and order history</p>
                  </div>
                  <button className="px-6 py-2 border border-ultra-violet dark:border-gold-medium text-ultra-violet dark:text-gold-medium rounded-lg font-medium hover:bg-ultra-violet/10 dark:hover:bg-gold-medium/10 transition-all duration-300">
                    Download
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                  <div>
                    <p className="font-medium text-red-800 dark:text-red-400">Delete Account</p>
                    <p className="text-sm text-red-600 dark:text-red-500">Permanently remove your account and all data</p>
                  </div>
                  <button className="px-6 py-2 bg-red-600 dark:bg-red-700 text-white rounded-lg font-medium hover:bg-red-700 dark:hover:bg-red-800 transition-all duration-300">
                    Delete
                  </button>
                </div>
              </div>
            </section>
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
