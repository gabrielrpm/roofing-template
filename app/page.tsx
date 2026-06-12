'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Award,
  Star,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Home,
  Wrench,
  Search,
  Cloud,
  Droplets,
  Building2,
  Clock,
  DollarSign,
  Users,
  FileCheck,
  Zap,
  TrendingUp,
} from 'lucide-react';

export default function RoofingHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Apex Roofing</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Services
              </a>
              <a href="#gallery" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Gallery
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-1 px-6 py-4">
              {['Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full text-sm font-semibold text-slate-700 shadow-sm border border-slate-200/50">
                <div className="w-2 h-2 rounded-full bg-[var(--brand)] animate-pulse" />
                Tulsa's Premier Roofing Company
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                  Protect Your Home with Expert Roofing
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed">
                  Premium roofing installations, repairs, and maintenance backed by 15+ years of excellence and a lifetime warranty on all work.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--brand)] text-white rounded-xl font-semibold text-lg hover:bg-[var(--brand-dark)] transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </a>

                <a
                  href="tel:918-555-0123"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  (918) 555-0123
                </a>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--brand)]" strokeWidth={2} />
                  <span className="font-semibold text-slate-700">Licensed & Insured</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-400" />
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[var(--brand)]" strokeWidth={2} />
                  <span className="font-semibold text-slate-700">15+ Years</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-400" />
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-700 ml-1">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/modern-home-roof/1200/1200"
                  alt="Premium roofing installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-5xl font-black text-[var(--brand)] mb-2">500+</div>
                <div className="text-slate-700 font-semibold">Roofs Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: 'Licensed & Insured', desc: 'Fully Protected' },
              { icon: Award, label: 'BBB A+ Rated', desc: 'Accredited Business' },
              { icon: CheckCircle2, label: '500+ Roofs', desc: 'Completed Projects' },
              { icon: Star, label: '5.0 Stars', desc: '200+ Reviews' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <item.icon className="w-12 h-12 text-[var(--brand-light)] mx-auto mb-4" strokeWidth={2} />
                <p className="text-white font-bold text-lg mb-1">{item.label}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-[var(--brand)]">
              Our Services
            </div>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Expert Roofing Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive roofing services for residential and commercial properties throughout Tulsa and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Roof Replacement',
                description: 'Complete roof replacement with premium materials. We handle everything from tear-off to final cleanup, ensuring your home gets the protection it deserves.',
                image: 'roof-replacement',
              },
              {
                icon: Wrench,
                title: 'Roof Repair',
                description: 'Fast, reliable repairs for leaks, storm damage, and wear. Our expert team can fix any roofing issue, big or small, to prevent further damage.',
                image: 'roof-repair',
              },
              {
                icon: Cloud,
                title: 'Storm Damage',
                description: 'Emergency storm damage assessment and repair. We work directly with insurance companies to make your claim process smooth and stress-free.',
                image: 'storm-damage',
              },
              {
                icon: Search,
                title: 'Roof Inspections',
                description: 'Thorough roof inspections with detailed reports. We identify potential issues early, saving you money on costly repairs down the road.',
                image: 'roof-inspection',
              },
              {
                icon: Droplets,
                title: 'Gutter Services',
                description: 'Complete gutter installation, repair, and cleaning. Proper drainage is essential to protect your roof and foundation from water damage.',
                image: 'gutter-service',
              },
              {
                icon: Building2,
                title: 'Commercial Roofing',
                description: 'Specialized commercial roofing solutions. We understand the unique needs of businesses and deliver minimal-disruption installations.',
                image: 'commercial-roof',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={`https://picsum.photos/seed/${service.image}/800/600`}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-[var(--brand)]" strokeWidth={2} />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold hover:gap-3 transition-all group/link pt-2"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Why Choose Apex Roofing?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine experience, quality materials, and exceptional service to deliver roofing solutions that last
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Expert Craftsmen',
                description: '15+ years of roofing excellence with certified professionals trained on the latest techniques.',
              },
              {
                icon: CheckCircle2,
                title: 'Lifetime Warranty',
                description: 'Industry-leading warranties on all installations. Your investment is protected for life.',
              },
              {
                icon: Clock,
                title: '24/7 Emergency',
                description: 'Round-the-clock emergency services. We respond quickly to protect your home from damage.',
              },
              {
                icon: DollarSign,
                title: 'Fair Pricing',
                description: 'Transparent pricing with no hidden fees. Get exceptional value without compromising quality.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-[var(--brand)]">
              Our Work
            </div>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Recent Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See the quality craftsmanship that has made us Tulsa's most trusted roofing company
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'project-1',
              'project-2',
              'project-3',
              'project-4',
              'project-5',
              'project-6',
            ].map((seed, idx) => (
              <div
                key={idx}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-slate-200/80"
              >
                <Image
                  src={`https://picsum.photos/seed/${seed}/800/800`}
                  alt={`Roofing project ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-bold text-xl mb-1">Residential Project</p>
                  <p className="text-white/90">Premium Roof Installation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Our Simple Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From consultation to completion, we make getting a new roof easy and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                icon: Phone,
                title: 'Free Consultation',
                description: 'Schedule a free inspection and receive a detailed, no-obligation estimate with transparent pricing.',
              },
              {
                number: '02',
                icon: FileCheck,
                title: 'Custom Proposal',
                description: 'We create a tailored solution with premium material options and a clear timeline for your project.',
              },
              {
                number: '03',
                icon: Zap,
                title: 'Expert Installation',
                description: 'Our certified team completes the work efficiently with minimal disruption to your daily routine.',
              },
              {
                number: '04',
                icon: CheckCircle2,
                title: 'Final Inspection',
                description: 'We conduct a thorough walkthrough and ensure you are completely satisfied with the results.',
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <step.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="text-4xl font-black text-slate-200">{step.number}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-[var(--brand)]">
              Testimonials
            </div>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight">What Our Clients Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from satisfied homeowners across Tulsa and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                location: 'Tulsa, OK',
                text: 'Apex Roofing replaced our entire roof in just three days. The crew was professional, the quality is outstanding, and they cleaned up perfectly. Our home looks amazing and we have complete peace of mind.',
                rating: 5,
              },
              {
                name: 'Michael Torres',
                location: 'Broken Arrow, OK',
                text: 'After hail damage, Apex handled everything from the insurance claim to the final installation. Their communication was excellent and the new roof exceeded our expectations. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Jennifer Lee',
                location: 'Jenks, OK',
                text: 'Best roofing company in the area! They were upfront about costs, finished ahead of schedule, and the craftsmanship is top-notch. Our neighbors have been asking who did our roof.',
                rating: 5,
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 text-lg">{review.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-600">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-white leading-tight tracking-tight">
                Flexible Financing & Insurance Help
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                We make quality roofing affordable with flexible payment options and expert insurance claim assistance. Our team works directly with all major insurance providers to streamline your claim.
              </p>
              <ul className="space-y-4">
                {[
                  'Multiple financing options available',
                  'Work with all major insurance companies',
                  'Free insurance claim assistance',
                  'Competitive rates with approved credit',
                  'No hidden fees or surprise charges',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[var(--brand-light)] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-slate-200 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand)] text-white rounded-xl font-semibold text-lg hover:bg-[var(--brand-dark)] transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/financing-options/1000/1000"
                alt="Financing options"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Areas We Serve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proudly serving Tulsa and surrounding communities with expert roofing services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              'Tulsa',
              'Broken Arrow',
              'Owasso',
              'Bixby',
              'Jenks',
              'Sand Springs',
              'Sapulpa',
              'Glenpool',
              'Collinsville',
              'Claremore',
              'Catoosa',
              'Coweta',
              'Skiatook',
              'Okmulgee',
              'Muskogee',
            ].map((city, idx) => (
              <div
                key={idx}
                className="group bg-slate-50 rounded-xl px-6 py-4 text-center border border-slate-200/80 hover:border-[var(--brand)] hover:bg-white hover:shadow-lg transition-all"
              >
                <MapPin className="w-5 h-5 mx-auto mb-2 text-[var(--brand)] group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-slate-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Contact Form */}
      <section id="quote" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="mb-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-[var(--brand)] shadow-sm border border-slate-200/50">
                  Get Started
                </div>
                <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Request Your Free Quote</h2>
                <p className="text-lg text-slate-600">
                  Fill out the form and our team will contact you within 24 hours with a detailed estimate
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[var(--brand)] focus:outline-none text-slate-900 transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[var(--brand)] focus:outline-none text-slate-900 transition-colors"
                      placeholder="(918) 555-0123"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[var(--brand)] focus:outline-none text-slate-900 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Service Needed *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[var(--brand)] focus:outline-none text-slate-900 transition-colors appearance-none bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="replacement">Roof Replacement</option>
                    <option value="repair">Roof Repair</option>
                    <option value="inspection">Roof Inspection</option>
                    <option value="storm">Storm Damage</option>
                    <option value="gutters">Gutter Services</option>
                    <option value="commercial">Commercial Roofing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[var(--brand)] focus:outline-none text-slate-900 transition-colors resize-none"
                    placeholder="Tell us about your roofing needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all"
                >
                  Get My Free Quote
                </button>

                <p className="text-center text-sm text-slate-600">
                  By submitting this form, you agree to be contacted by Apex Roofing
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl p-10 border border-slate-200/80 shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[var(--brand)]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-600 mb-1">Call Us</p>
                      <a href="tel:918-555-0123" className="text-xl font-bold text-slate-900 hover:text-[var(--brand)] transition-colors">
                        (918) 555-0123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[var(--brand)]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-600 mb-1">Email</p>
                      <a href="mailto:info@apexroofing.com" className="text-xl font-bold text-slate-900 hover:text-[var(--brand)] transition-colors">
                        info@apexroofing.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[var(--brand)]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-600 mb-1">Address</p>
                      <p className="text-xl font-bold text-slate-900">
                        1234 S Main Street<br />
                        Tulsa, OK 74119
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[var(--brand)]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-600 mb-1">Business Hours</p>
                      <p className="text-lg font-semibold text-slate-900">
                        Mon-Fri: 7:00 AM - 6:00 PM<br />
                        Sat: 8:00 AM - 4:00 PM<br />
                        Sun: Emergency Only
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-sm font-semibold text-slate-700 mb-4">Emergency Service Available 24/7</p>
                  <a
                    href="tel:918-555-0911"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg"
                  >
                    <Phone className="w-5 h-5" strokeWidth={2} />
                    Emergency: (918) 555-0911
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold">Apex Roofing</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Premium roofing solutions for residential and commercial properties. Licensed, insured, and trusted by homeowners across Oklahoma.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['Services', 'Gallery', 'Testimonials', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-[var(--brand-light)] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Our Services</h3>
              <ul className="space-y-3">
                {['Roof Replacement', 'Roof Repair', 'Storm Damage', 'Inspections', 'Gutter Services', 'Commercial'].map((service) => (
                  <li key={service}>
                    <a href="#quote" className="text-slate-400 hover:text-[var(--brand-light)] transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-slate-400 text-sm mb-1">Phone</p>
                  <a href="tel:918-555-0123" className="font-semibold hover:text-[var(--brand-light)] transition-colors">
                    (918) 555-0123
                  </a>
                </li>
                <li>
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <a href="mailto:info@apexroofing.com" className="font-semibold hover:text-[var(--brand-light)] transition-colors">
                    info@apexroofing.com
                  </a>
                </li>
                <li>
                  <p className="text-slate-400 text-sm mb-1">Address</p>
                  <p className="font-semibold">1234 S Main Street<br />Tulsa, OK 74119</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2024 Apex Roofing. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-[var(--brand-light)] text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-[var(--brand-light)] text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl z-50">
        <div className="grid grid-cols-2 gap-3 p-4">
          <a
            href="tel:918-555-0123"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg"
          >
            <Phone className="w-5 h-5" strokeWidth={2} />
            Call
          </a>
          <a
            href="#quote"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-[var(--brand)] text-white rounded-xl font-bold shadow-lg"
          >
            <Mail className="w-5 h-5" strokeWidth={2} />
            Quote
          </a>
        </div>
      </div>
    </div>
  );
}
