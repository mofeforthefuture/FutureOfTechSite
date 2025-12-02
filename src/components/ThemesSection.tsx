import { motion } from "motion/react";
import { Brain, Code2, GitBranch, Rocket } from "lucide-react";
import { Card, CardBody } from "@heroui/react";

const themes = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Explore the latest breakthroughs in machine learning, neural networks, and AI-powered solutions shaping our future.",
    color: "blue",
    borderColor: "border-blue-400/30",
    bgColor: "bg-blue-500/10",
    iconColor: "bg-blue-600",
    accentColor: "bg-blue-400",
  },
  {
    icon: Code2,
    title: "Full-Stack AI Applications",
    description:
      "Discover how to build end-to-end intelligent applications that seamlessly integrate AI across the entire stack.",
    color: "violet",
    borderColor: "border-violet-400/30",
    bgColor: "bg-violet-500/10",
    iconColor: "bg-violet-600",
    accentColor: "bg-violet-400",
  },
  {
    icon: GitBranch,
    title: "Open Source",
    description:
      "Celebrate the power of community-driven innovation and learn how open collaboration accelerates technological progress.",
    color: "pink",
    borderColor: "border-pink-400/30",
    bgColor: "bg-pink-500/10",
    iconColor: "bg-pink-600",
    accentColor: "bg-pink-400",
  },
  {
    icon: Rocket,
    title: "The Way Forward",
    description:
      "Chart the course for tomorrow with insights on emerging trends, ethical AI, and sustainable tech innovation.",
    color: "indigo",
    borderColor: "border-indigo-400/30",
    bgColor: "bg-indigo-500/10",
    iconColor: "bg-indigo-600",
    accentColor: "bg-indigo-400",
  },
];

export function ThemesSection() {
  return (
    <section className="py-24 px-6 bg-black relative">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Conference <span className="text-blue-400">Themes</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Four pillars driving the future of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full bg-white/5 border ${theme.borderColor} hover:border-${theme.color}-400/50 hover:bg-white/10 transition-all duration-300 group`}
                isPressable
              >
                <CardBody className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg ${theme.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <theme.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {theme.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 grow text-sm leading-relaxed">
                    {theme.description}
                  </p>

                  {/* Decorative line */}
                  <div
                    className={`h-1 w-0 ${theme.accentColor} group-hover:w-full transition-all duration-500 mt-4 rounded-full`}
                  ></div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
