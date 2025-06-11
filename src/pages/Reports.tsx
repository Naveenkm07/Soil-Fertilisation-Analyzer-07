
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import { FileText, Download, Calendar, Filter, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();

  const reports = [
    {
      id: 1,
      title: "Monthly Soil Analysis - March 2024",
      date: "2024-03-15",
      type: "Comprehensive",
      status: "Completed"
    },
    {
      id: 2,
      title: "Fertilizer Application Report",
      date: "2024-03-10",
      type: "Treatment",
      status: "Completed"
    },
    {
      id: 3,
      title: "Seasonal Trend Analysis",
      date: "2024-03-01",
      type: "Analytics",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <NavigationHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Analysis Reports
            </h1>
            <p className="text-gray-600 mt-2">
              Historical soil analysis reports and documentation
            </p>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter Reports
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
        </div>

        <div className="grid gap-6">
          {reports.map((report) => (
            <Card key={report.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                      {report.title}
                    </CardTitle>
                    <CardDescription>
                      Generated on {new Date(report.date).toLocaleDateString()} • Type: {report.type}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {report.status}
                    </span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">85%</div>
                    <p className="text-sm text-gray-600">Soil Health Score</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <p className="text-sm text-gray-600">Parameters Tested</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">3</div>
                    <p className="text-sm text-gray-600">Recommendations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
