import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Card, CardBody } from "@heroui/react";

// Mock partner logos - in a real app, these would be actual company logos
const partners = [
  {
    name: "TechCorp",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30",
  },
  {
    name: "AI Labs",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-400/30",
  },
  {
    name: "DevHub",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-400/30",
  },
  {
    name: "CloudNext",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-400/30",
  },
  {
    name: "OpenTech",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-400/30",
  },
  {
    name: "NeuralNet",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-400/30",
  },
];

export function PartnersSection() {
  return (
    <section className="py-24 px-6 bg-gray-950 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-blue-400">Partners</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proud to collaborate with leading organizations in tech innovation
          </p>
        </motion.div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                className={`aspect-square bg-white/5 border ${partner.borderColor} hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 cursor-pointer`}
                isPressable
              >
                <CardBody className="flex items-center justify-center p-6">
                  {/* Logo placeholder - styled text */}
                  <div
                    className={`text-center font-bold text-lg ${partner.color}`}
                  >
                    {partner.name}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Become a partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Interested in partnering with us?
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group font-semibold"
          >
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
