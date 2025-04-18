export default function Footer() {
  return (
    <footer className="bg-[#1e2a63] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/logo.png" alt="Native Teams Logo" className="h-8 w-auto" />
        </div>
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
        {/* <div className="flex gap-2 flex-wrap justify-center alighn-center">
        <a href="#" className="hover:text-white">Cookie Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-white">Terms & Conditions</a>
      </div> */}
      </div>
    </footer>
  );
}
