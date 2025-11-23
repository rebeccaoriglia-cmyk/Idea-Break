import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCw, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ActivityCardProps {
  activity: string;
  onNewActivity: () => void;
  onShare?: () => void;
}

export default function ActivityCard({ activity, onNewActivity, onShare }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="mx-auto max-w-2xl p-12 text-center">
        <p 
          className="mb-8 text-xl leading-relaxed text-card-foreground md:text-2xl"
          data-testid="text-activity"
        >
          {activity}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={onNewActivity}
            size="default"
            data-testid="button-new-activity"
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Nuova Attività
          </Button>
          
          {onShare && (
            <Button
              onClick={onShare}
              variant="outline"
              size="default"
              data-testid="button-share"
              className="gap-2"
            >
              <Share2 className="h-4 w-4" />
              Condividi
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
