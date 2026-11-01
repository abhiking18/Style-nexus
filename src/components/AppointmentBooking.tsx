import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Scissors, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface AppointmentBookingProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SALON_CONFIG.services[0].title,
    date: '',
    time: '11:00 AM',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  // Update selected service if parent triggers it
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Set default date to tomorrow or today
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, date: prev.date || dateStr }));
  }, []);

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    }

    if (!formData.service) {
      newErrors.service = 'Please choose a service category.';
    }

    if (!formData.date) {
      newErrors.date = 'Please pick a preferred date.';
    }

    if (!formData.time) {
      newErrors.time = 'Please pick a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Construct clean WhatsApp message
    const messageLines = [
      `*APPOINTMENT ENQUIRY — STYLE NEXUS*`,
      ``,
      `*Client Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      `*Requested Service:* ${formData.service}`,
      `*Preferred Date:* ${formData.date}`,
      `*Preferred Time:* ${formData.time}`,
      `*Details / Notes:* ${formData.notes.trim() || 'No special requests'}`,
      ``,
      `_Submitted via Style Nexus Web Studio (Bamunimaidan, Guwahati)_`,
      `_Note: Awaiting salon confirmation._`,
    ];

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodedText}`;

    setSubmittedWhatsAppUrl(whatsappUrl);
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    if (onClearPreselectedService) {
      onClearPreselectedService();
    }
  };

  return (
    <section id="booking" className="py-24 sm:py-28 bg-[#171717] text-[#F3F0E9] border-t border-[#30302E]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold block mb-3">
            RESERVATIONS & ENQUIRIES
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F3F0E9] uppercase leading-[1.05] mb-4">
            READY FOR A <span className="text-[#A97958]">NEW LOOK?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C5] leading-relaxed">
            Tell us what you're looking for and get in touch with our salon.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#1F1F1D] border border-[#A97958]/30 p-6 sm:p-10 lg:p-12 relative shadow-2xl">
          
          {isSubmitted ? (
            /* Confirmation State (Emphasizing salon must confirm) */
            <div className="text-center py-10 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#A97958]/20 border border-[#A97958] flex items-center justify-center text-[#A97958]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold block">
                  ENQUIRY GENERATED
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#F3F0E9]">
                  THANK YOU, {formData.name.toUpperCase()}
                </h3>
              </div>

              {/* Crucial Notice: Salon must confirm */}
              <div className="p-5 bg-[#171717] border border-[#A97958]/40 text-left max-w-xl mx-auto space-y-3">
                <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#A97958] uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>APPOINTMENT CONFIRMATION PENDING</span>
                </div>
                <p className="text-xs text-[#D8D0C5] leading-relaxed">
                  Your appointment enquiry details have been forwarded to our salon via WhatsApp. <strong>Please note that the appointment is not automatically confirmed</strong> until our salon manager reviews stylist availability and confirms your slot with you directly.
                </p>
                <div className="pt-2 border-t border-[#30302E] text-xs text-[#D8D0C5]/70 flex flex-wrap justify-between gap-2">
                  <span>Selected: {formData.service}</span>
                  <span>{formData.date} at {formData.time}</span>
                </div>
              </div>

              {/* Action buttons in confirmation */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={submittedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-[#A97958] text-white hover:bg-[#C49777] transition-colors"
                >
                  RE-OPEN WHATSAPP CHAT
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] border border-[#30302E] text-[#D8D0C5] hover:text-[#F3F0E9] hover:border-[#A97958] transition-colors"
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </div>
            </div>
          ) : (
            /* Active Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Your Name */}
                <div className="space-y-1.5">
                  <label htmlFor="clientName" className="block text-xs font-heading font-semibold uppercase tracking-wider text-[#D8D0C5]">
                    Your Name <span className="text-[#A97958]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="clientName"
                      type="text"
                      placeholder="e.g. Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-[#171717] border px-4 py-3.5 text-sm text-[#F3F0E9] placeholder-[#D8D0C5]/40 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400 focus:border-red-500' : 'border-[#30302E] focus:border-[#A97958]'
                      }`}
                    />
                    <User className="absolute right-3.5 top-3.5 w-4 h-4 text-[#D8D0C5]/40" />
                  </div>
                  {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="clientPhone" className="block text-xs font-heading font-semibold uppercase tracking-wider text-[#D8D0C5]">
                    Phone Number <span className="text-[#A97958]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="clientPhone"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-[#171717] border px-4 py-3.5 text-sm text-[#F3F0E9] placeholder-[#D8D0C5]/40 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#30302E] focus:border-[#A97958]'
                      }`}
                    />
                    <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-[#D8D0C5]/40" />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
                </div>
              </div>

              {/* Select Service */}
              <div className="space-y-1.5">
                <label htmlFor="serviceSelect" className="block text-xs font-heading font-semibold uppercase tracking-wider text-[#D8D0C5]">
                  Select Service <span className="text-[#A97958]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="serviceSelect"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#171717] border border-[#30302E] focus:border-[#A97958] px-4 py-3.5 text-sm text-[#F3F0E9] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {SALON_CONFIG.services.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#171717] text-[#F3F0E9]">
                        {srv.number} — {srv.title} (Contact for Pricing)
                      </option>
                    ))}
                  </select>
                  <Scissors className="absolute right-3.5 top-3.5 w-4 h-4 text-[#A97958] pointer-events-none" />
                </div>
                {errors.service && <p className="text-[11px] text-red-400">{errors.service}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label htmlFor="preferredDate" className="block text-xs font-heading font-semibold uppercase tracking-wider text-[#D8D0C5]">
                    Preferred Date <span className="text-[#A97958]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="preferredDate"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-[#171717] border border-[#30302E] focus:border-[#A97958] px-4 py-3.5 text-sm text-[#F3F0E9] focus:outline-none transition-colors"
                    />
                  </div>
                  {errors.date && <p className="text-[11px] text-red-400">{errors.date}</p>}
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label htmlFor="preferredTime" className="block text-xs font-heading font-semibold uppercase tracking-wider text-[#D8D0C5]">
                    Preferred Time <span className="text-[#A97958]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="preferredTime"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#171717] border border-[#30302E] focus:border-[#A97958] px-4 py-3.5 text-sm text-[#F3F0E9] focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-[#171717] text-[#F3F0E9]">
                          {slot}
                        </option>
                      ))}
                    </select>
                    <Clock className="absolute right-3.5 top-3.5 w-4 h-4 text-[#D8D0C5]/40 pointer-events-none" />
                  </div>
                  {errors.time && <p className="text-[11px] text-red-400">{errors.time}</p>}
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-1.5">
                <label htmlFor="additionalDetails" className="block text-xs font-heading font-semibold uppercase tracking-wider text-[#D8D0C5]">
                  Additional Details / Hair Requests
                </label>
                <div className="relative">
                  <textarea
                    id="additionalDetails"
                    rows={3}
                    placeholder="Tell us about your hair length, texture, desired changes, or any reference looks you like..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#171717] border border-[#30302E] focus:border-[#A97958] px-4 py-3 text-sm text-[#F3F0E9] placeholder-[#D8D0C5]/40 focus:outline-none transition-colors resize-none"
                  />
                  <MessageSquare className="absolute right-3.5 top-3.5 w-4 h-4 text-[#D8D0C5]/40 pointer-events-none" />
                </div>
              </div>

              {/* Protocol Notice */}
              <p className="text-xs text-[#D8D0C5]/70 leading-relaxed border-l-2 border-[#A97958] pl-3 py-0.5">
                Submitting this form prepares your appointment request and connects you directly with our salon team on WhatsApp (+91 60012 35320) for availability verification.
              </p>

              {/* CTA Button */}
              <button
                type="submit"
                className="w-full py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#171717] bg-[#F3F0E9] hover:bg-[#A97958] hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>SEND APPOINTMENT ENQUIRY</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
