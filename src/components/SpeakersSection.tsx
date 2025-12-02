import { motion } from "motion/react";
import { Linkedin, Twitter } from "lucide-react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";

const speakers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Scientist",
    company: "TechVision Labs",
    image:
      "https://images.unsplash.com/photo-1624555130882-dcfa8ecb17ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0ZWNoJTIwbGVhZGVyfGVufDF8fHx8MTc2Mjg3NjE4OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Marcus Rodriguez",
    role: "VP of Engineering",
    company: "CloudScale Inc",
    image:
      "https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyNzk3MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Emily Watson",
    role: "Open Source Advocate",
    company: "DevCommunity",
    image:
      "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "David Park",
    role: "Full-Stack Architect",
    company: "Neural Systems",
    image:
      "https://images.unsplash.com/photo-1620216464663-29984da34a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI3ODY0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function SpeakersSection() {
  return (
    <section className="py-24 px-6 bg-gray-950 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-violet-400">Speakers</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Learn from industry leaders and visionaries shaping the future of
            technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="bg-white/5 border border-white/10 hover:border-violet-400/30 hover:bg-white/10 transition-all duration-300 group"
                isPressable
              >
                <CardHeader className="p-0 overflow-hidden">
                  {/* Image container */}
                  <div className="relative aspect-square overflow-hidden w-full">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>

                    {/* Social links - appear on hover */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        isIconOnly
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                        as="a"
                        href="#"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button
                        isIconOnly
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                        as="a"
                        href="#"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </CardHeader>

                {/* Speaker info */}
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-violet-400 mb-1 font-medium">
                    {speaker.role}
                  </p>
                  <p className="text-gray-500 text-sm">{speaker.company}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
