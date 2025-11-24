"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star, Utensils, Droplets, Users, Mail, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Luxe Hotel"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "#contact"
          }}
          className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-full shadow-lg"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Luxe Hotel"
          description="Experience ultimate luxury and comfort at our five-star hotel resort"
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "#contact"
            },
            {
              text: "Explore More",
              href: "#rooms"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982226022-zm71ff56.jpg"
          imageAlt="Luxury hotel entrance with elegant architecture"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Experience world-class hospitality with our premium services, luxurious accommodations, and personalized attention to every detail of your stay."
          features={[
            {
              icon: Star,
              title: "Premium Rooms",
              description: "Spacious suites with modern amenities, stunning views, and luxury bedding for your comfort"
            },
            {
              icon: Utensils,
              title: "Fine Dining",
              description: "Award-winning restaurants featuring international and local cuisine prepared by master chefs"
            },
            {
              icon: Droplets,
              title: "Wellness Spa",
              description: "Rejuvenate at our full-service spa with therapeutic treatments and relaxation facilities"
            },
            {
              icon: Users,
              title: "Expert Staff",
              description: "Dedicated concierge and staff providing personalized service and assistance 24/7"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Our Exclusive Room Collection"
          description="Choose from our curated selection of premium accommodations designed for ultimate comfort"
          products={[
            {
              id: "1",
              brand: "Luxe Hotel",
              name: "Deluxe Room",
              price: "$180/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982226808-owqh78fb.jpg",
              imageAlt: "Deluxe hotel room with king bed"
            },
            {
              id: "2",
              brand: "Luxe Hotel",
              name: "Standard Room",
              price: "$120/night",
              rating: 5,
              reviewCount: "892",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982227621-jqb4url9.jpg",
              imageAlt: "Modern standard hotel room"
            },
            {
              id: "3",
              brand: "Luxe Hotel",
              name: "Presidential Suite",
              price: "$450/night",
              rating: 5,
              reviewCount: "563",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982228159-4tailgnm.jpg",
              imageAlt: "Luxury presidential suite"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardNine
          title="Luxury Amenities That Transform Your Stay"
          description="Immerse yourself in exceptional facilities designed to elevate your experience with unparalleled comfort and recreation"
          buttons={[
            {
              text: "Book Pool Experience",
              href: "#contact"
            },
            {
              text: "Reserve Spa Treatment",
              href: "#contact"
            }
          ]}
          features={[
            {
              id: 1,
              title: "Olympic Pool & Spa",
              description: "Dive into luxury with our heated Olympic-size pool and rejuvenating spa treatments that melt away stress. Book your poolside cabana or therapeutic massage to complete your perfect day.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982228948-8leu4yfl.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982229721-49m493p2.jpg"
              }
            },
            {
              id: 2,
              title: "Fine Dining & Fitness",
              description: "Savor gourmet cuisine at our award-winning restaurants and maintain your wellness routine in our state-of-the-art fitness center. Reserve your table for an unforgettable culinary journey or book a personal training session.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982230404-ah4bgmtc.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982231181-zw5n6697.jpg"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="split-actions"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Guests Say"
          description="Read reviews from travelers who have experienced our world-class hospitality. Average rating: 4.9/5 from 2,700+ verified reviews"
          tag="Testimonials"
          tagIcon={Award}
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson",
              role: "CEO",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982232028-46wfv0zm.jpg",
              imageAlt: "Michael Johnson"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Travel Designer",
              company: "Wanderlust Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982234457-q4xvbjmu.jpg",
              imageAlt: "Sarah Williams"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Business Consultant",
              company: "Global Solutions Ltd",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982233370-l4bu0eiv.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              role: "Events Coordinator",
              company: "Celebration Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763982234457-q4xvbjmu.jpg",
              imageAlt: "Emma Rodriguez"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Plan Your Perfect Getaway"
          description="Subscribe to our newsletter for exclusive offers, room packages, and special promotions. We'll keep you updated on the latest amenities and events."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime from our mailing list."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Rooms",
              items: [
                { label: "Deluxe Rooms", href: "#rooms" },
                { label: "Standard Rooms", href: "#rooms" },
                { label: "Presidential Suite", href: "#rooms" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Restaurant", href: "#amenities" },
                { label: "Spa & Wellness", href: "#amenities" },
                { label: "Fitness Center", href: "#amenities" },
                { label: "Events & Meetings", href: "#contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "About", href: "#about" },
                { label: "Terms & Conditions", href: "/" },
                { label: "Privacy Policy", href: "/" }
              ]
            }
          ]}
          copyrightText="© 2025 Luxe Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}