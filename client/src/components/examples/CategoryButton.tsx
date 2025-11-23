import CategoryButton from '../CategoryButton';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function CategoryButtonExample() {
  const [selected, setSelected] = useState(false);
  
  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      <CategoryButton
        icon={Sparkles}
        title="Creativo"
        category="creativo"
        onClick={() => setSelected(!selected)}
        selected={selected}
      />
      <CategoryButton
        icon={Sparkles}
        title="Non Selezionato"
        category="other"
        onClick={() => console.log('clicked')}
        selected={false}
      />
    </div>
  );
}
