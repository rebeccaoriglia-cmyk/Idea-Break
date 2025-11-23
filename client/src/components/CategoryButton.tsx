import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface CategoryButtonProps {
  icon: LucideIcon;
  title: string;
  category: string;
  onClick: () => void;
  selected: boolean;
}

export default function CategoryButton({ 
  icon: Icon, 
  title, 
  category, 
  onClick,
  selected 
}: CategoryButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      data-testid={`button-category-${category}`}
      className={`
        group flex flex-col items-center justify-center gap-4 rounded-2xl border p-6 md:p-8
        transition-all duration-200 hover-elevate active-elevate-2
        ${selected 
          ? 'border-primary/40 bg-primary/5' 
          : 'border-card-border bg-card'
        }
      `}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`
        rounded-full p-3 transition-colors
        ${selected 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
        }
      `}>
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </div>
      <span className={`
        text-center text-base font-medium tracking-button transition-colors
        ${selected ? 'text-primary' : 'text-foreground'}
      `}>
        {title}
      </span>
    </motion.button>
  );
}
