"use client";

import LiquidOverlayNav from "../components/LiquidOverlayNav";

export default function ServicesPage() {
  return (
    <>
      <LiquidOverlayNav />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-20 pb-24 lg:pb-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium uppercase tracking-[0.2em] text-gray-300 mb-12 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white/40 rounded-full mr-3 animate-pulse"></div>
              Our Services
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-[-0.02em] mb-12 leading-[0.85]">
              Digital <span className="text-gray-400 font-extralight">Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light">
              Comprehensive IT services designed to drive your business forward with cutting-edge technology and innovative approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="bg-white text-gray-900 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-gray-900/5 to-gray-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-gray-600/5 to-gray-900/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative p-12 rounded-3xl bg-white border border-gray-100/50 shadow-2xl hover:shadow-gray-900/10 transition-all duration-700 group-hover:-translate-y-2">
                <div className="w-20 h-20 mb-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-[0.1em] mb-6 text-gray-900">Web Development</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
                  Custom websites and web applications built with modern technologies, responsive design, and optimized performance.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Responsive Web Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Content Management Systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Progressive Web Apps
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
              <div className="relative p-12 rounded-3xl bg-white border border-gray-100/50 shadow-2xl hover:shadow-gray-900/10 transition-all duration-700 group-hover:-translate-y-2">
                <div className="w-20 h-20 mb-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-[0.1em] mb-6 text-gray-900">Mobile Applications</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
                  Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android devices.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    iOS & Android Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Cross-Platform Solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    UI/UX Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    App Store Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-3 h-3 bg-white/10 rounded-full"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.02em] mb-8 leading-[0.9]">
              Additional <span className="text-gray-400 font-extralight">Services</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light">
              Comprehensive IT solutions to support your entire technology ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 group-hover:-translate-y-3">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-6 text-white">Custom Development</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Tailored software solutions built from the ground up to meet your specific business requirements and objectives.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 group-hover:-translate-y-3">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-6 text-white">Performance Optimization</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Speed up your applications and websites with advanced optimization techniques for better user experience and SEO.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 group-hover:-translate-y-3">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-6 text-white">Security & Maintenance</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Comprehensive security audits, ongoing maintenance, and 24/7 support to keep your systems safe and running smoothly.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 group-hover:-translate-y-3">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-6 text-white">Cloud Solutions</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Cloud migration, deployment, and management services to scale your infrastructure and reduce operational costs.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 group-hover:-translate-y-3">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M11 7l-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-6 text-white">UI/UX Design</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  User-centered design solutions that create intuitive and engaging experiences across all digital platforms.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 group-hover:-translate-y-3">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-6 text-white">IT Support</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Comprehensive technical support and troubleshooting services to keep your business operations running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white text-gray-900 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.02em] mb-8 leading-[0.9]">
              Our <span className="text-gray-400 font-extralight">Process</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-light">
              A streamlined approach that ensures successful project delivery from concept to completion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                1
              </div>
              <h3 className="text-xl font-black uppercase tracking-wide mb-4">Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                Understanding your needs and project requirements through detailed discussions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                2
              </div>
              <h3 className="text-xl font-black uppercase tracking-wide mb-4">Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating detailed project plans, timelines, and technical specifications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                3
              </div>
              <h3 className="text-xl font-black uppercase tracking-wide mb-4">Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Building your solution using best practices and cutting-edge technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                4
              </div>
              <h3 className="text-xl font-black uppercase tracking-wide mb-4">Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Testing, deployment, and ongoing support to ensure project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.02em] mb-8 leading-[0.9]">
            Start Your <span className="text-gray-400 font-extralight">Project</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-300 mb-12 max-w-3xl mx-auto font-light">
            Ready to transform your ideas into digital reality? Let's discuss your project requirements.
          </p>
          
          <div className="group relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <a 
              href="/contact" 
              className="relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-white/20 to-white/10 text-white font-black uppercase tracking-[0.1em] rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 shadow-2xl hover:shadow-white/10 group-hover:-translate-y-1 backdrop-blur-sm"
            >
              <span>Get Started Today</span>
              <svg className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}