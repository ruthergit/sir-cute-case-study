import Navbar from "../components/Navbar";

const Footer = () => {
    return (
        <footer className="bg-green-700 text-white py-8">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li>UUNIVERSITY OF CABUYAO</li>
                            <li>Phone: (049) 534 0069 </li>
                            <li>Email: uc.official@universityofcabuyao.edu.ph</li>
                            <li>746J+ 5VM, Manila S Rd, Cabuyao, 4025 Laguna</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-200">About Us</a></li>
                            <li><a href="#" className="hover:text-green-200">Academic Programs</a></li>
                            <li><a href="#" className="hover:text-green-200">Student Life</a></li>
                            <li><a href="#" className="hover:text-green-200">News & Events</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-green-200">
                                <i className="fab fa-facebook text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-green-200">
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-green-200">
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-green-200">
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-green-600 mt-8 pt-4 text-center">
                    <p>&copy; 2024 UNIVERSITY OF CABUYAO(PNC). All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;