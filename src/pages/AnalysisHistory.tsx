
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import { ArrowLeft, Download, Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HistoryItem {
  id: string;
  soilData: any;
  nutrientLevels: any;
  recommendations: any[];
  date: string;
}

const AnalysisHistory = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('soilAnalysisHistory') || '[]');
    setHistory(storedHistory);
  }, []);

  const handleDeleteAnalysis = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem('soilAnalysisHistory', JSON.stringify(updatedHistory));
  };

  const handleViewAnalysis = (item: HistoryItem) => {
    localStorage.setItem('currentSoilAnalysis', JSON.stringify(item.soilData));
    navigate('/soil-results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <NavigationHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Analysis History
            </h1>
            <p className="text-gray-600 mt-2">Previous soil analysis records</p>
          </div>
        </div>

        {history.length === 0 ? (
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <p className="text-gray-500 text-lg">No previous analyses found</p>
              <Button 
                onClick={() => navigate('/')}
                className="mt-4 bg-green-600 hover:bg-green-700"
              >
                Start New Analysis
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {history.map((item) => (
              <Card key={item.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        {item.soilData.farmName} - {item.soilData.fieldLocation}
                      </CardTitle>
                      <p className="text-gray-600">
                        Analyzed on {new Date(item.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        Crop: {item.soilData.cropType} | Soil: {item.soilData.soilType}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleViewAnalysis(item)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDeleteAnalysis(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">pH {item.nutrientLevels.ph}</div>
                      <p className="text-xs text-gray-600">{item.nutrientLevels.status.ph}</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{item.nutrientLevels.nitrogen}mg/kg</div>
                      <p className="text-xs text-gray-600">Nitrogen</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{item.nutrientLevels.phosphorus}mg/kg</div>
                      <p className="text-xs text-gray-600">Phosphorus</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-lg font-bold text-orange-600">{item.recommendations.length}</div>
                      <p className="text-xs text-gray-600">Recommendations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisHistory;
