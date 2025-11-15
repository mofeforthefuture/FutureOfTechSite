import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Future of Tech
            </h3>
            <p className="text-gray-500">
              Building tomorrow's world today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-500 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#agenda" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Agenda
                </a>
              </li>
              <li>
                <a href="#partners" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-gray-300">Get in Touch</h4>
            <a
              href="mailto:hello@futureoftech.com"
              className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors mb-4"
            >
              <Mail className="h-4 w-4" />
              hello@futureoftech.com
            </a>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-blue-500 hover:bg-gray-800 transition-all group"
              >
                <Twitter className="h-4 w-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-blue-500 hover:bg-gray-800 transition-all group"
              >
                <Linkedin className="h-4 w-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-blue-500 hover:bg-gray-800 transition-all group"
              >
                <Github className="h-4 w-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © 2026 Future of Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
