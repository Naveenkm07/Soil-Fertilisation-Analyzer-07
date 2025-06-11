
import { FertilizerRecommendation } from "@/types/soil";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Sprout, AlertTriangle, Info, CheckCircle } from "lucide-react";

interface FertilizerRecommendationsProps {
  recommendations: FertilizerRecommendation[];
}

const FertilizerRecommendations: React.FC<FertilizerRecommendationsProps> = ({ recommendations }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'secondary';
      case 'Low':
        return 'default';
      default:
        return 'default';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'High':
        return <AlertTriangle className="h-4 w-4" />;
      case 'Medium':
        return <Info className="h-4 w-4" />;
      case 'Low':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const highPriorityRecommendations = recommendations.filter(r => r.priority === 'High');
  const mediumPriorityRecommendations = recommendations.filter(r => r.priority === 'Medium');
  const lowPriorityRecommendations = recommendations.filter(r => r.priority === 'Low');

  if (recommendations.length === 0) {
    return (
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertDescription>
          Your soil analysis shows good nutrient levels. No immediate fertilizer applications are required. 
          Continue with regular monitoring and maintain current soil management practices.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      {/* High Priority Recommendations */}
      {highPriorityRecommendations.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Immediate Action Required
          </h3>
          <div className="grid gap-4">
            {highPriorityRecommendations.map((recommendation, index) => (
              <Card key={index} className="border-red-200 bg-red-50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Sprout className="h-4 w-4" />
                      {recommendation.type}
                    </CardTitle>
                    <Badge variant={getPriorityColor(recommendation.priority)} className="flex items-center gap-1">
                      {getPriorityIcon(recommendation.priority)}
                      {recommendation.priority} Priority
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-sm">Recommended Amount: </span>
                      <span className="text-sm font-mono bg-white px-2 py-1 rounded">
                        {recommendation.amount}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{recommendation.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Medium Priority Recommendations */}
      {mediumPriorityRecommendations.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-orange-700 mb-3 flex items-center gap-2">
            <Info className="h-5 w-5" />
            Recommended Improvements
          </h3>
          <div className="grid gap-4">
            {mediumPriorityRecommendations.map((recommendation, index) => (
              <Card key={index} className="border-orange-200 bg-orange-50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Sprout className="h-4 w-4" />
                      {recommendation.type}
                    </CardTitle>
                    <Badge variant={getPriorityColor(recommendation.priority)} className="flex items-center gap-1">
                      {getPriorityIcon(recommendation.priority)}
                      {recommendation.priority} Priority
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-sm">Recommended Amount: </span>
                      <span className="text-sm font-mono bg-white px-2 py-1 rounded">
                        {recommendation.amount}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{recommendation.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Low Priority Recommendations */}
      {lowPriorityRecommendations.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Future Considerations
          </h3>
          <div className="grid gap-4">
            {lowPriorityRecommendations.map((recommendation, index) => (
              <Card key={index} className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Sprout className="h-4 w-4" />
                      {recommendation.type}
                    </CardTitle>
                    <Badge variant={getPriorityColor(recommendation.priority)} className="flex items-center gap-1">
                      {getPriorityIcon(recommendation.priority)}
                      {recommendation.priority} Priority
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-sm">Recommended Amount: </span>
                      <span className="text-sm font-mono bg-white px-2 py-1 rounded">
                        {recommendation.amount}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{recommendation.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* General Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Application Guidelines</CardTitle>
          <CardDescription>Important notes for fertilizer application</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• Apply fertilizers during optimal weather conditions (avoid windy or rainy days)</li>
            <li>• Water the soil after application to help nutrients penetrate</li>
            <li>• Split applications into smaller doses for better absorption</li>
            <li>• Maintain proper safety equipment when handling fertilizers</li>
            <li>• Re-test soil after 3-6 months to monitor progress</li>
            <li>• Consider organic alternatives for sustainable farming practices</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FertilizerRecommendations;
