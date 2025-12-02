import { motion } from "motion/react";
import { Clock, Coffee, Lightbulb, Users, Wrench } from "lucide-react";
import { Card, CardBody, Chip } from "@heroui/react";

const schedule = [
  {
    time: "08:00 - 09:00",
    title: "Registration & Breakfast",
    description: "Check-in, networking, and morning refreshments",
    icon: Coffee,
    type: "break",
    color: "bg-gray-600",
    borderColor: "border-gray-400/30",
  },
  {
    time: "09:00 - 10:30",
    title: "Opening Keynote",
    description: "The Future of AI: Opportunities and Challenges",
    icon: Lightbulb,
    type: "keynote",
    color: "bg-blue-600",
    borderColor: "border-blue-400/30",
  },
  {
    time: "10:45 - 12:00",
    title: "Panel Discussion",
    description: "Building Full-Stack AI Applications at Scale",
    icon: Users,
    type: "panel",
    color: "bg-violet-600",
    borderColor: "border-violet-400/30",
  },
  {
    time: "12:00 - 13:00",
    title: "Lunch Break",
    description: "Networking lunch with speakers and attendees",
    icon: Coffee,
    type: "break",
    color: "bg-gray-600",
    borderColor: "border-gray-400/30",
  },
  {
    time: "13:00 - 15:00",
    title: "Afternoon Workshops",
    description: "Hands-on sessions on AI integration and open source tools",
    icon: Wrench,
    type: "workshop",
    color: "bg-indigo-600",
    borderColor: "border-indigo-400/30",
  },
  {
    time: "15:15 - 16:30",
    title: "Lightning Talks",
    description: "Quick insights from community leaders and innovators",
    icon: Lightbulb,
    type: "talks",
    color: "bg-blue-600",
    borderColor: "border-blue-400/30",
  },
  {
    time: "16:30 - 18:00",
    title: "Evening Networking",
    description: "Cocktails, conversations, and connections",
    icon: Users,
    type: "networking",
    color: "bg-violet-600",
    borderColor: "border-violet-400/30",
  },
];

export function AgendaSection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Event <span className="text-blue-400">Agenda</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A full day of inspiration, learning, and networking
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-500/30 transform md:-translate-x-1/2"></div>

          {/* Schedule items */}
          <div className="space-y-12">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:text-left md:pl-8"
                  } mb-4 md:mb-0`}
                >
                  <Card
                    className={`inline-block bg-white/5 border ${item.borderColor} hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300`}
                  >
                    <CardBody className="p-6">
                      <Chip
                        startContent={<Clock className="h-4 w-4" />}
                        variant="flat"
                        className="bg-blue-500/10 border border-blue-400/30 text-blue-400 mb-3"
                        size="sm"
                      >
                        {item.time}
                      </Chip>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </CardBody>
                  </Card>
                </div>

                {/* Icon in center */}
                <div
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full ${item.color} flex items-center justify-center border-4 border-black z-10`}
                >
                  <item.icon className="h-5 w-5 text-white" />
                </div>

                {/* Spacer for the other half on desktop */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
