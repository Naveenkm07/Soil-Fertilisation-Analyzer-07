
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SoilAnalysisForm from "@/components/SoilAnalysisForm";
import NavigationHeader from "@/components/NavigationHeader";
import { SoilData } from "@/types/soil";
import { Sprout } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleSoilAnalysis = (data: SoilData) => {
    // Store the analysis data and navigate to results
    localStorage.setItem('currentSoilAnalysis', JSON.stringify(data));
    navigate('/soil-results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <NavigationHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
            <Sprout className="h-12 w-12 text-green-600" />
            Soil Fertilisation Analyzer
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Advanced AI-Powered Soil Nutrient Analysis & Precision Fertilizer Recommendation System
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl max-w-4xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Soil Sample Analysis</CardTitle>
            <CardDescription className="text-green-100">
              Enter your soil test results to get comprehensive nutrient analysis and fertilizer recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <SoilAnalysisForm onSubmit={handleSoilAnalysis} />
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/analysis-history')}
            className="mr-4"
          >
            View Previous Analysis
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/reports')}
          >
            View Reports
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
