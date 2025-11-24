import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCw, Share2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ActivityCardProps {
  activity: string;
  onNewActivity: () => void;
  onShare?: () => void;
}

export default function ActivityCard({ activity, onNewActivity, onShare }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="relative mx-auto max-w-2xl overflow-hidden p-12 text-center shadow-xl">
        <motion.div
          className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Sparkles className="mx-auto mb-6 h-12 w-12 text-primary" />
        </motion.div>
        
        <motion.p 
          className="relative mb-8 text-xl leading-relaxed text-card-foreground md:text-2xl"
          data-testid="text-activity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {activity}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={onNewActivity}
            size="default"
            data-testid="button-new-activity"
            className="gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key={activity}
            >
              <RefreshCw className="h-4 w-4" />
            </motion.div>
            Nuova Attività
          </Button>
          
          {onShare && (
            <Button
              onClick={onShare}
              variant="secondary"
              size="default"
              data-testid="button-share"
              className="gap-2"
            >
              <Share2 className="h-4 w-4" />
              Condividi
            </Button>
          )}
        </motion.div>
      </Card>
    </motion.div>
  );
}
