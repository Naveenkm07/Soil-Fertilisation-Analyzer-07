
export interface SoilData {
  id?: string;
  farmName: string;
  fieldLocation: string;
  sampleDate: Date;
  nitrogen: number; // mg/kg
  phosphorus: number; // mg/kg
  potassium: number; // mg/kg
  ph: number;
  organicMatter: number; // percentage
  cropType: string;
  soilType: string;
  testingMethod: string;
}

export interface NutrientLevels {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;
  organicMatter: number;
  status: {
    nitrogen: 'Low' | 'Medium' | 'High';
    phosphorus: 'Low' | 'Medium' | 'High';
    potassium: 'Low' | 'Medium' | 'High';
    ph: 'Acidic' | 'Neutral' | 'Alkaline';
  };
}

export interface FertilizerRecommendation {
  type: string;
  amount: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
}

export interface FarmData {
  id: string;
  name: string;
  location: string;
  totalArea: number;
  soilSamples: SoilData[];
  createdAt: Date;
  updatedAt: Date;
}
