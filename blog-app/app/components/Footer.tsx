"use client";
import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="bg-[#1e2a63] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex justify-start">
          <img src="/logo.svg" alt="Native Teams Logo" className="h-8 w-auto" />
        </div>

        <div className="space-y-4 md:hidden">
          {[
            {
              title: "PLATFORM",
              items: [
                "Employer of Record",
                "PEO Services",
                "Company as a Service",
                "Work Payments",
                "Global Payroll",
                "Tax Management",
                "Expenses Management",
              ],
            },
            {
              title: "INFORMATION",
              items: [
                "Legal Entity",
                "Client Invoicing",
                "Payment Requests",
                "Global Mobility",
                "Employees Benefits",
                "For Startups",
              ],
            },
            {
              title: "COMPANY",
              items: [
                "About",
                "Our Countries",
                "Affiliates",
                "Partnerships",
                "Charity",
                "Data & Security",
                "Book a demo",
                "Contact",
              ],
            },
          ].map(({ title, items }) => (
            <div key={title}>
              <button
                onClick={() => toggleSection(title)}
                className="w-full text-left font-semibold flex items-center"
              >
                {title}
                <span className="text-lg pl-2">
                  {openSection === title ? (
                    <img src="down.svg" />
                  ) : (
                    <img src="down.svg" />
                  )}
                </span>
              </button>
              {openSection === title && (
                <ul className="mt-2 space-y-1 text-sm text-gray-300">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-4 gap-8 mt-10">
          <div></div>
          <div>
            <h4 className="font-semibold mb-2">PLATFORM</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Employer of Record</li>
              <li>PEO Services</li>
              <li>Company as a Service</li>
              <li>Work Payments</li>
              <li>Global Payroll</li>
              <li>Tax Management</li>
              <li>Expenses Management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">INFORMATION</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Legal Entity</li>
              <li>Client Invoicing</li>
              <li>Payment Requests</li>
              <li>Global Mobility</li>
              <li>Employees Benefits</li>
              <li>For Startups</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">COMPANY</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>About</li>
              <li>Our Countries</li>
              <li>Affiliates</li>
              <li>Partnerships</li>
              <li>Charity</li>
              <li>Data & Security</li>
              <li>Book a demo</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-700 text-sm text-gray-400  grid grid-cols-1 md:grid-cols-3 gap-8 gap-3">
          <p>© Native Teams Limited</p>
          <ul>
            <li className="flex gap-1 flex-wrap justify-left align-center">
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
