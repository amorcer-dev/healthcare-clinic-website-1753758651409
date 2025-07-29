import React from 'react';
import { ClinicHero } from '../components/HeroSection'
import { ClinicFeaturesGrid } from '../components/FeaturesGrid'
import { ClinicAppointmentBooking } from '../components/AppointmentBooking'
import { ClinicFooter } from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClinicHero
        title="HealthCare Clinic"
        subtitle="Professional healthcare services for you and your family"
        ctaText="Book Appointment"
        ctaLink="#contact"
        className=""
      />
      <ClinicFeaturesGrid
        features={[
        {
                "icon": "🩺",
                "title": "Telemedicine",
                "description": "Virtual doctor visits"
        },
        {
                "icon": "🧪",
                "title": "Lab Tests",
                "description": "On-site diagnostics"
        },
        {
                "icon": "📅",
                "title": "Easy Booking",
                "description": "Online appointments"
        }
]}
        className=""
      />
      <ClinicAppointmentBooking
        className=""
      />
      <ClinicFooter
        clinicName="HealthCare Clinic"
        address="123 Medical Center Dr, Healthcare City, HC 12345"
        links={[
        {
                "label": "Privacy Policy",
                "href": "/privacy"
        },
        {
                "label": "Terms of Service",
                "href": "/terms"
        },
        {
                "label": "Contact",
                "href": "/contact"
        }
]}
        social={[
        {
                "icon": "📧",
                "href": "mailto:contact@clinic.com",
                "label": "Email"
        },
        {
                "icon": "📞",
                "href": "tel:+1234567890",
                "label": "Phone"
        }
]}
        className=""
      />
    </main>
  );
}