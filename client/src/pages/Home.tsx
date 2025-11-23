import { useState } from "react";
import { Sparkles, Users, Pencil, RotateCcw, Gift } from "lucide-react";
import Header from "@/components/Header";
import CategoryButton from "@/components/CategoryButton";
import ActivityCard from "@/components/ActivityCard";
import { getRandomActivity } from "@/lib/activities";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: "creativo", title: "Creativo", icon: Sparkles },
  { id: "teatrale", title: "Teatrale", icon: Users },
  { id: "disegno", title: "Disegno", icon: Pencil },
  { id: "mentale", title: "Reset Mentale", icon: RotateCcw },
  { id: "sorpresa", title: "Sorpresa", icon: Gift },
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto flex flex-1 flex-col items-center px-6 py-12 md:px-12 md:py-20">
        <div className="mb-12 max-w-4xl text-center md:mb-20">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Scegli il Tipo di Pausa
          </h2>
          <p className="text-lg text-muted-foreground">
            Prenditi un momento per ricaricare la tua creatività
          </p>
        </div>

        <div className="mb-12 grid w-full max-w-4xl grid-cols-2 gap-4 md:mb-20 md:grid-cols-5 md:gap-6">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              icon={category.icon}
              title={category.title}
              category={category.id}
              onClick={() => handleCategoryClick(category.id)}
              selected={selectedCategory === category.id}
            />
          ))}
        </div>

        {currentActivity && (
          <ActivityCard
            activity={currentActivity}
            onNewActivity={handleNewActivity}
            onShare={handleShare}
          />
        )}

        {!currentActivity && (
          <div className="text-center">
            <p className="text-muted-foreground">
              Seleziona una categoria per iniziare
            </p>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t py-8">
        <div className="container px-6 text-center md:px-12">
          <p className="text-sm text-muted-foreground">
            Creative Break · Pause creative per la tua mente
          </p>
        </div>
      </footer>
    </div>
  );
}
