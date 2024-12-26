import React from "react";
import logo from '../../assets/icon/222222.avif';

const Footer = () => {
  return (
    <div className="">
    <footer className="footer mt-32 lg:w-9/12 mx-auto py-16 text-neutral-content p-10  border-t">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-52">

        <aside className="mb-8 lg:mb-0 lg:w-1/3">
          <img className="w-24 h-24 rounded-full" src={logo} alt="Pickify Logo" />
          <p className="text-gray-600 text-3xl font-semibold mt-4">Pickify</p>
          <p className="text-gray-500 mt-2 text-sm">
            © {new Date().getFullYear()} Pickify. All rights reserved.
          </p>
        </aside>
  
     
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <h6 className="text-lg font-semibold mb-4 text-gray-600">Contact Us</h6>
          <p className="text-gray-600">1234 Pickify Lane, Tech City, 56789</p>
          <p className="text-gray-600 mt-2">Email: <a href="mailto:support@pickify.com" className="text-blue-600 hover:underline">support@pickify.com</a></p>
          <p className="text-gray-600 mt-2">Phone: <a href="tel:+123456789" className="text-blue-600 hover:underline">+1 234 567 89</a></p>
        </div>
  

        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <h6 className="text-lg font-semibold mb-4 text-gray-600">Quick Links</h6>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
  
   
      <div className="mt-12 flex flex-col">
  <div className="mb-8 lg:mb-0 lg:w-2/3">
    <h6 className="text-lg font-semibold mb-4 text-gray-600 ">Subscribe to our Newsletter</h6>
    <form className="flex flex-col sm:flex-row items-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="input input-bordered w-full max-w-md mb-4 sm:mb-0 sm:mr-4"
      />
      <button type="submit" className="btn bg-[#004581] text-white hover:text-[#004581]">Subscribe</button>
    </form>
    <p className="text-gray-500 mt-2 text-sm">Stay updated with our latest news and promotions.</p>
  </div>

  <nav className="lg:w-1/3">
    <h6 className="text-lg text-gray-600 font-semibold mb-4">Follow Us</h6>
    <div className="flex space-x-4">
      <a href="https://www.facebook.com/groups/missionwebdevelopment10" aria-label="Visit us on Facebook" className="hover:opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current text-blue-600"
        >
          <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.097 1.892-4.785 4.658-4.785 1.325 0 2.464.099 2.795.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.31h3.592l-.467 3.622h-3.125v9.294h6.125c.732 0 1.324-.591 1.324-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com" aria-label="Visit us on LinkedIn" className="hover:opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current text-blue-700"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.251c-.967 0-1.75-.783-1.75-1.749s.783-1.749 1.75-1.749 1.75.783 1.75 1.749-.783 1.749-1.75 1.749zm13.5 11.251h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.154 1.46-2.154 2.967v5.7h-3v-10h2.884v1.362h.041c.401-.759 1.377-1.561 2.835-1.561 3.033 0 3.594 1.996 3.594 4.589v5.61z"></path>
        </svg>
      </a>
    </div>
  </nav>
</div>

    </footer>
  </div>
  
  
  
  );
};

export default Footer;
