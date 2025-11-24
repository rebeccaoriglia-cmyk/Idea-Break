import { useState } from "react";
import { Sparkles, Users, Pencil, RotateCcw, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import CategoryButton from "@/components/CategoryButton";
import ActivityCard from "@/components/ActivityCard";
import { getRandomActivity } from "@/lib/activities";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: "creativo", title: "Creativo", icon: Sparkles, color: "purple" },
  { id: "teatrale", title: "Teatrale", icon: Users, color: "pink" },
  { id: "disegno", title: "Disegno", icon: Pencil, color: "cyan" },
  { id: "mentale", title: "Reset Mentale", icon: RotateCcw, color: "orange" },
  { id: "sorpresa", title: "Sorpresa", icon: Gift, color: "emerald" },
];

const floatingShapes = [
  { color: "from-purple-400/20 to-pink-400/20", delay: 0, duration: 20 },
  { color: "from-cyan-400/20 to-blue-400/20", delay: 5, duration: 25 },
  { color: "from-orange-400/20 to-amber-400/20", delay: 10, duration: 22 },
  { color: "from-emerald-400/20 to-teal-400/20", delay: 15, duration: 18 },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentActivity, setCurrentActivity] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const activity = getRandomActivity(categoryId);
    setCurrentActivity(activity.text);
  };

  const handleNewActivity = () => {
    if (selectedCategory) {
      const activity = getRandomActivity(selectedCategory);
      setCurrentActivity(activity.text);
    }
  };

  const handleShare = () => {
    if (currentActivity) {
      navigator.clipboard.writeText(currentActivity);
      toast({
        title: "Copiato!",
        description: "L'attività è stata copiata negli appunti.",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute h-96 w-96 rounded-full bg-gradient-to-br ${shape.color} blur-3xl`}
          style={{
            left: `${(index * 25) % 100}%`,
            top: `${(index * 30) % 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto flex flex-1 flex-col items-center px-6 py-12 md:px-12 md:py-20">
          <motion.div 
            className="mb-12 max-w-4xl text-center md:mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Scegli il Tipo di Pausa
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Prenditi un momento per ricaricare la tua creatività
            </motion.p>
          </motion.div>

          <div className="mb-12 grid w-full max-w-4xl grid-cols-2 gap-4 md:mb-20 md:grid-cols-5 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <CategoryButton
                  icon={category.icon}
                  title={category.title}
                  category={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  selected={selectedCategory === category.id}
                  color={category.color}
                />
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {currentActivity && (
              <ActivityCard
                key={currentActivity}
                activity={currentActivity}
                onNewActivity={handleNewActivity}
                onShare={handleShare}
              />
            )}
          </AnimatePresence>

          {!currentActivity && (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-muted-foreground">
                Seleziona una categoria per iniziare
              </p>
            </motion.div>
          )}
        </main>

        <footer className="relative mt-20 border-t py-8">
          <div className="container px-6 text-center md:px-12">
            <p className="text-sm text-muted-foreground">
              Idea Break · Pause creative per la tua mente
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
