
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import NutrientDisplay from "@/components/NutrientDisplay";
import FertilizerRecommendations from "@/components/FertilizerRecommendations";
import { SoilData, NutrientLevels, FertilizerRecommendation } from "@/types/soil";
import { Download, ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { generatePDFReport } from "@/utils/pdfGenerator";

const SoilResults = () => {
  const navigate = useNavigate();
  const [soilData, setSoilData] = useState<SoilData | null>(null);
  const [nutrientLevels, setNutrientLevels] = useState<NutrientLevels | null>(null);
  const [recommendations, setRecommendations] = useState<FertilizerRecommendation[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('currentSoilAnalysis');
    if (storedData) {
      const data: SoilData = JSON.parse(storedData);
      setSoilData(data);
      
      // Calculate nutrient levels
      const calculatedNutrients: NutrientLevels = {
        nitrogen: data.nitrogen,
        phosphorus: data.phosphorus,
        potassium: data.potassium,
        ph: data.ph,
        organicMatter: data.organicMatter,
        status: {
          nitrogen: data.nitrogen < 20 ? 'Low' : data.nitrogen > 40 ? 'High' : 'Medium',
          phosphorus: data.phosphorus < 15 ? 'Low' : data.phosphorus > 30 ? 'High' : 'Medium',
          potassium: data.potassium < 100 ? 'Low' : data.potassium > 200 ? 'High' : 'Medium',
          ph: data.ph < 6.0 ? 'Acidic' : data.ph > 7.5 ? 'Alkaline' : 'Neutral'
        }
      };
      
      setNutrientLevels(calculatedNutrients);
      
      // Generate recommendations
      const newRecommendations: FertilizerRecommendation[] = [];
      
      if (calculatedNutrients.status.nitrogen === 'Low') {
        newRecommendations.push({
          type: 'Nitrogen Fertilizer',
          amount: '20-30 kg/ha',
          description: 'Apply urea or ammonium sulfate to boost nitrogen levels',
          priority: 'High'
        });
      }
      
      if (calculatedNutrients.status.phosphorus === 'Low') {
        newRecommendations.push({
          type: 'Phosphorus Fertilizer',
          amount: '15-25 kg/ha',
          description: 'Apply superphosphate or DAP to improve phosphorus content',
          priority: 'Medium'
        });
      }
      
      if (calculatedNutrients.status.potassium === 'Low') {
        newRecommendations.push({
          type: 'Potassium Fertilizer',
          amount: '30-40 kg/ha',
          description: 'Apply muriate of potash to enhance potassium levels',
          priority: 'Medium'
        });
      }
      
      if (calculatedNutrients.status.ph === 'Acidic') {
        newRecommendations.push({
          type: 'Lime Application',
          amount: '1-2 tons/ha',
          description: 'Apply agricultural lime to neutralize soil acidity',
          priority: 'High'
        });
      }
      
      if (calculatedNutrients.status.ph === 'Alkaline') {
        newRecommendations.push({
          type: 'Sulfur Application',
          amount: '200-300 kg/ha',
          description: 'Apply sulfur to reduce soil alkalinity',
          priority: 'Medium'
        });
      }
      
      setRecommendations(newRecommendations);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleDownloadReport = () => {
    if (soilData && nutrientLevels && recommendations) {
      generatePDFReport(soilData, nutrientLevels, recommendations);
    }
  };

  const handleSaveAnalysis = () => {
    if (soilData && nutrientLevels && recommendations) {
      const existingAnalyses = JSON.parse(localStorage.getItem('soilAnalysisHistory') || '[]');
      const newAnalysis = {
        id: Date.now().toString(),
        soilData,
        nutrientLevels,
        recommendations,
        date: new Date().toISOString()
      };
      existingAnalyses.push(newAnalysis);
      localStorage.setItem('soilAnalysisHistory', JSON.stringify(existingAnalyses));
      alert('Analysis saved successfully!');
    }
  };

  if (!soilData || !nutrientLevels) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <NavigationHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Analysis
            </Button>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Analysis Results
              </h1>
              <p className="text-gray-600 mt-2">Farm: {soilData.farmName} - {soilData.fieldLocation}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={handleSaveAnalysis}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Analysis
            </Button>
            <Button 
              onClick={handleDownloadReport}
              className="bg-green-600 hover:bg-green-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF Report
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Nutrient Analysis</CardTitle>
              <CardDescription className="text-blue-100">
                Current soil nutrient levels and status
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <NutrientDisplay nutrientLevels={nutrientLevels} />
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Fertilizer Recommendations</CardTitle>
              <CardDescription className="text-purple-100">
                Customized recommendations for your soil
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <FertilizerRecommendations recommendations={recommendations} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SoilResults;
