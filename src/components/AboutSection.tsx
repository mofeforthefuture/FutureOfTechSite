import { motion } from "motion/react";
import { Calendar, MapPin, Play, Mic, Wrench, Users } from "lucide-react";
import { Card, CardBody, Chip } from "@heroui/react";

const highlights = [
  {
    title: "Expert Speakers",
    description: "Learn from industry leaders",
    icon: Mic,
    color: "text-blue-400",
  },
  {
    title: "Hands-on Workshops",
    description: "Build real-world projects",
    icon: Wrench,
    color: "text-violet-400",
  },
  {
    title: "Networking",
    description: "Connect with innovators",
    icon: Users,
    color: "text-blue-400",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About the <span className="text-blue-400">Conference</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Future of Tech is a conference uniting developers, innovators, and
            dreamers building tomorrow's world today. Join us for an inspiring
            journey through the latest advancements in AI, full-stack
            development, and open-source collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Chip
              startContent={<Calendar className="h-4 w-4" />}
              variant="flat"
              className="bg-blue-500/10 border border-blue-400/30 text-gray-200 px-4 py-5"
            >
              March 15, 2026
            </Chip>
            <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
            <Chip
              startContent={<MapPin className="h-4 w-4" />}
              variant="flat"
              className="bg-violet-500/10 border border-violet-400/30 text-gray-200 px-4 py-5"
            >
              San Francisco, CA
            </Chip>
          </div>
        </motion.div>

        {/* Video Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card
            className="bg-transparent border border-white/10 hover:border-blue-400/30 transition-all duration-300 cursor-pointer group"
            isPressable
          >
            <CardBody className="p-0 overflow-hidden">
              <div
                className="aspect-video w-full relative"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1761223976241-e9068813774b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3klMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2MjgwNjU2Mnww&ixlib=rb-4.1.0&q=80&w=1080)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-blue-600 group-hover:bg-blue-500 flex items-center justify-center transition-colors duration-300"
                  >
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-blue-400/30 group-hover:border-blue-400/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-violet-400/30 group-hover:border-violet-400/50 transition-colors duration-300" />
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-white/5 border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300"
              isPressable
            >
              <CardBody className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <item.icon className={`h-12 w-12 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </CardBody>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
