import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Card, CardBody } from "@heroui/react";

export function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1762279389053-d5a30239ae45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd2F2ZSUyMGFic3RyYWN0fGVufDF8fHx8MTc2Mjg3NjE4N3ww&ixlib=rb-4.1.0&q=80&w=1080)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * 500,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * 500 - 250],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Sparkles className="h-12 w-12 text-violet-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Be Part of the <span className="text-blue-400">Future</span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of developers, innovators, and tech leaders in shaping
            tomorrow's technology landscape. Don't miss this opportunity to
            connect, learn, and grow.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors group px-8"
              endContent={
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              }
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-blue-500/50 text-white hover:bg-blue-500/10 hover:border-blue-400 transition-all font-semibold px-8"
            >
              View Full Schedule
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            <Card className="bg-white/5 border border-blue-400/30 backdrop-blur-sm">
              <CardBody className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  500+
                </div>
                <p className="text-gray-400">Attendees</p>
              </CardBody>
            </Card>
            <Card className="bg-white/5 border border-violet-400/30 backdrop-blur-sm">
              <CardBody className="p-6 text-center">
                <div className="text-4xl font-bold text-violet-400 mb-2">
                  20+
                </div>
                <p className="text-gray-400">Speakers</p>
              </CardBody>
            </Card>
            <Card className="bg-white/5 border border-indigo-400/30 backdrop-blur-sm">
              <CardBody className="p-6 text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">
                  8+
                </div>
                <p className="text-gray-400">Workshops</p>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
