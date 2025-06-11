
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import { Database as DatabaseIcon, Search, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Database = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
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
              Back
            </Button>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Soil Database
              </h1>
              <p className="text-gray-600 mt-2">Historical soil data repository</p>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search Data
          </Button>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <DatabaseIcon className="h-5 w-5" />
              Data Repository
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center py-12">
              <DatabaseIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Comprehensive Data Storage</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                All your soil analysis data is securely stored and easily accessible for historical analysis and trend tracking.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Database;
