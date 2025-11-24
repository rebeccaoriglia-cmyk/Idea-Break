import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface CategoryButtonProps {
  icon: LucideIcon;
  title: string;
  category: string;
  onClick: () => void;
  selected: boolean;
  color: string;
}

const colorClasses: Record<string, { bg: string; text: string; border: string; hoverBg: string }> = {
  purple: { 
    bg: 'bg-gradient-to-br from-purple-500 to-purple-600', 
    text: 'text-purple-600', 
    border: 'border-purple-200',
    hoverBg: 'group-hover:bg-purple-100'
  },
  pink: { 
    bg: 'bg-gradient-to-br from-pink-500 to-rose-600', 
    text: 'text-pink-600', 
    border: 'border-pink-200',
    hoverBg: 'group-hover:bg-pink-100'
  },
  cyan: { 
    bg: 'bg-gradient-to-br from-cyan-500 to-teal-600', 
    text: 'text-cyan-600', 
    border: 'border-cyan-200',
    hoverBg: 'group-hover:bg-cyan-100'
  },
  orange: { 
    bg: 'bg-gradient-to-br from-orange-500 to-amber-600', 
    text: 'text-orange-600', 
    border: 'border-orange-200',
    hoverBg: 'group-hover:bg-orange-100'
  },
  emerald: { 
    bg: 'bg-gradient-to-br from-emerald-500 to-green-600', 
    text: 'text-emerald-600', 
    border: 'border-emerald-200',
    hoverBg: 'group-hover:bg-emerald-100'
  },
};

export default function CategoryButton({ 
  icon: Icon, 
  title, 
  category, 
  onClick,
  selected,
  color
}: CategoryButtonProps) {
  const colorClass = colorClasses[color] || colorClasses.purple;
  
  return (
    <motion.button
      onClick={onClick}
      data-testid={`button-category-${category}`}
      className={`
        group relative flex flex-col items-center justify-center gap-4 rounded-2xl border p-6 md:p-8
        transition-all duration-300 hover-elevate active-elevate-2
        ${selected 
          ? `${colorClass.border} bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800` 
          : 'border-card-border bg-card'
        }
      `}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {selected && (
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-2xl opacity-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0.1 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `radial-gradient(circle, ${color === 'purple' ? '#a855f7' : color === 'pink' ? '#ec4899' : color === 'cyan' ? '#06b6d4' : color === 'orange' ? '#f97316' : '#10b981'} 0%, transparent 70%)`
          }}
        />
      )}
      
      <motion.div 
        className={`
          rounded-full p-3 transition-all duration-300
          ${selected 
            ? `${colorClass.bg} text-white shadow-lg` 
            : `bg-muted text-muted-foreground ${colorClass.hoverBg}`
          }
        `}
        whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </motion.div>
      
      <motion.span 
        className={`
          text-center text-base font-medium tracking-button transition-colors
          ${selected ? colorClass.text : 'text-foreground'}
        `}
        animate={selected ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.span>
    </motion.button>
  );
}
