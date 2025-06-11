
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import { TrendingUp, TrendingDown, Activity, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Trends = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Soil Health Trends
            </h1>
            <p className="text-gray-600 mt-2">Track your soil health improvements over time</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto" />
              <CardTitle className="text-green-600">Improving</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold">7</div>
              <p className="text-gray-600">Parameters</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center">
              <Activity className="h-8 w-8 text-yellow-600 mx-auto" />
              <CardTitle className="text-yellow-600">Stable</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold">3</div>
              <p className="text-gray-600">Parameters</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center">
              <TrendingDown className="h-8 w-8 text-red-600 mx-auto" />
              <CardTitle className="text-red-600">Needs Attention</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold">2</div>
              <p className="text-gray-600">Parameters</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle>Historical Trends</CardTitle>
            <CardDescription>Soil parameter changes over the last 12 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
              <span className="text-gray-600">Trend visualization coming soon</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Trends;
