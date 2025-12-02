import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button, Link } from "@heroui/react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Future of <span className="text-blue-400">Tech</span>
            </h3>
            <p className="text-gray-500">Building tomorrow's world today.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#speakers"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="#agenda"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  Agenda
                </Link>
              </li>
              <li>
                <Link
                  href="#partners"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">
              Get in Touch
            </h4>
            <Link
              href="mailto:hello@futureoftech.com"
              className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors mb-4"
            >
              <Mail className="h-4 w-4" />
              hello@futureoftech.com
            </Link>

            {/* Social Media */}
            <div className="flex gap-3">
              <Button
                isIconOnly
                variant="bordered"
                className="border-gray-800 hover:border-blue-500 hover:bg-gray-800 transition-all"
                as="a"
                href="#"
              >
                <Twitter className="h-4 w-4 text-gray-500 hover:text-blue-400" />
              </Button>
              <Button
                isIconOnly
                variant="bordered"
                className="border-gray-800 hover:border-blue-500 hover:bg-gray-800 transition-all"
                as="a"
                href="#"
              >
                <Linkedin className="h-4 w-4 text-gray-500 hover:text-blue-400" />
              </Button>
              <Button
                isIconOnly
                variant="bordered"
                className="border-gray-800 hover:border-blue-500 hover:bg-gray-800 transition-all"
                as="a"
                href="#"
              >
                <Github className="h-4 w-4 text-gray-500 hover:text-blue-400" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Future of Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
