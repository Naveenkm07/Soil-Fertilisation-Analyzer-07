
import { NutrientLevels } from "@/types/soil";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Zap, FlaskConical, Sprout } from "lucide-react";

interface NutrientDisplayProps {
  nutrientLevels: NutrientLevels;
}

const NutrientDisplay: React.FC<NutrientDisplayProps> = ({ nutrientLevels }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Low':
        return 'destructive';
      case 'Medium':
        return 'secondary';
      case 'High':
        return 'default';
      case 'Acidic':
        return 'destructive';
      case 'Alkaline':
        return 'secondary';
      case 'Neutral':
        return 'default';
      default:
        return 'default';
    }
  };

  const getProgressValue = (value: number, type: string) => {
    switch (type) {
      case 'nitrogen':
        return (value / 60) * 100; // Assuming max 60 mg/kg
      case 'phosphorus':
        return (value / 45) * 100; // Assuming max 45 mg/kg
      case 'potassium':
        return (value / 300) * 100; // Assuming max 300 mg/kg
      case 'ph':
        return ((value - 4) / 6) * 100; // pH range 4-10
      case 'organicMatter':
        return (value / 10) * 100; // Assuming max 10%
      default:
        return 0;
    }
  };

  const nutrients = [
    {
      name: 'Nitrogen',
      value: nutrientLevels.nitrogen,
      unit: 'mg/kg',
      status: nutrientLevels.status.nitrogen,
      icon: Leaf,
      description: 'Essential for leaf growth and chlorophyll production'
    },
    {
      name: 'Phosphorus',
      value: nutrientLevels.phosphorus,
      unit: 'mg/kg',
      status: nutrientLevels.status.phosphorus,
      icon: Zap,
      description: 'Critical for root development and energy transfer'
    },
    {
      name: 'Potassium',
      value: nutrientLevels.potassium,
      unit: 'mg/kg',
      status: nutrientLevels.status.potassium,
      icon: Droplets,
      description: 'Important for water regulation and disease resistance'
    },
    {
      name: 'pH Level',
      value: nutrientLevels.ph,
      unit: '',
      status: nutrientLevels.status.ph,
      icon: FlaskConical,
      description: 'Affects nutrient availability and soil chemistry'
    },
    {
      name: 'Organic Matter',
      value: nutrientLevels.organicMatter,
      unit: '%',
      status: nutrientLevels.organicMatter < 2 ? 'Low' : nutrientLevels.organicMatter > 5 ? 'High' : 'Medium',
      icon: Sprout,
      description: 'Improves soil structure and nutrient retention'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {nutrients.map((nutrient, index) => {
          const Icon = nutrient.icon;
          const progressValue = getProgressValue(nutrient.value, nutrient.name.toLowerCase().replace(' ', ''));
          
          return (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon className="h-5 w-5 text-green-600" />
                    {nutrient.name}
                  </CardTitle>
                  <Badge variant={getStatusColor(nutrient.status)}>
                    {nutrient.status}
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  {nutrient.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      {nutrient.value}
                      <span className="text-sm font-normal text-muted-foreground ml-1">
                        {nutrient.unit}
                      </span>
                    </span>
                  </div>
                  <Progress 
                    value={progressValue} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low</span>
                    <span>Optimal</span>
                    <span>High</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nutrient Analysis Summary</CardTitle>
          <CardDescription>
            Overall assessment of your soil's nutrient profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2 text-green-700">Strengths</h4>
              <ul className="text-sm space-y-1">
                {nutrients
                  .filter(n => n.status === 'High' || n.status === 'Neutral' || n.status === 'Medium')
                  .map((nutrient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {nutrient.name} levels are {nutrient.status.toLowerCase()}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-700">Areas for Improvement</h4>
              <ul className="text-sm space-y-1">
                {nutrients
                  .filter(n => n.status === 'Low' || n.status === 'Acidic' || n.status === 'Alkaline')
                  .map((nutrient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      {nutrient.name} needs attention ({nutrient.status.toLowerCase()})
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NutrientDisplay;
