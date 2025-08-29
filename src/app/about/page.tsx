"use client";

import LiquidOverlayNav from "../components/LiquidOverlayNav";

export default function AboutPage() {
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
              About Us
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-[-0.02em] mb-12 leading-[0.85]">
              Transforming <span className="text-gray-400 font-extralight">Ideas</span>
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light">
              Into digital reality with cutting-edge technology solutions and innovative approaches that drive success.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="bg-white text-gray-900 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-gray-900/5 to-gray-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-gray-600/5 to-gray-900/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.02em] mb-8 leading-[0.9]">
                Our <span className="text-gray-400 font-extralight">Story</span>
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-600 mb-8 font-light">
                Based in <span className="font-semibold text-gray-800">Binbrook, Ontario, Canada</span>, KHODITECH was founded with a vision to bridge the gap between innovative ideas and digital reality.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                We provide professional IT support services with a primary focus on web development solutions for individuals and corporate clients. Our team combines technical expertise with creative vision to deliver exceptional results.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Our mission is to deliver reliable, scalable, and innovative IT services that empower clients to achieve their technology goals and drive their business forward.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl transform rotate-3"></div>
              <div className="relative p-12 bg-white rounded-3xl border border-gray-100 shadow-2xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-gray-900 mb-2">50+</div>
                    <div className="text-sm uppercase tracking-wide text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-gray-900 mb-2">5+</div>
                    <div className="text-sm uppercase tracking-wide text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
                    <div className="text-sm uppercase tracking-wide text-gray-600">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-gray-900 mb-2">100%</div>
                    <div className="text-sm uppercase tracking-wide text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gray-400 font-extralight">Values</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light">
              The principles that guide everything we do and shape our approach to technology solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 group-hover:-translate-y-3">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-6 text-white">Quality</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  We never compromise on quality, delivering solutions that exceed expectations and stand the test of time.
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
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-6 text-white">Innovation</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  We embrace cutting-edge technologies and creative approaches to solve complex challenges.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 group-hover:-translate-y-3">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-6 text-white">Partnership</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  We build lasting relationships with our clients, working as true partners in their success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white text-gray-900 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.02em] mb-8 leading-[0.9]">
            Ready to Work <span className="text-gray-400 font-extralight">Together?</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Let's discuss how we can help transform your ideas into powerful digital solutions.
          </p>
          
          <div className="group relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <a 
              href="/contact" 
              className="relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-black uppercase tracking-[0.1em] rounded-3xl hover:from-gray-800 hover:to-gray-600 transition-all duration-500 shadow-2xl hover:shadow-gray-900/30 group-hover:-translate-y-1 backdrop-blur-sm"
            >
              <span>Get In Touch</span>
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