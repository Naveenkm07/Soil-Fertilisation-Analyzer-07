
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import { HelpCircle, MessageCircle, Book, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  const handleWhatsAppSupport = () => {
    const phoneNumber = "+1234567890";
    const message = "Hello, I need help with Fertile Farms Insights Hub";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Help & Support
            </h1>
            <p className="text-gray-600 mt-2">Get assistance and learn how to use the platform</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <Book className="h-8 w-8 text-blue-600 mx-auto" />
              <CardTitle>Documentation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Learn how to use all features</p>
              <Button variant="outline">View Docs</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto" />
              <CardTitle>WhatsApp Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Get instant help via WhatsApp</p>
              <Button 
                onClick={handleWhatsAppSupport}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <HelpCircle className="h-8 w-8 text-purple-600 mx-auto" />
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Find answers to common questions</p>
              <Button variant="outline">Browse FAQ</Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">How do I interpret soil test results?</h4>
                <p className="text-gray-600">Our AI-powered system automatically analyzes your soil test results and provides easy-to-understand recommendations.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">What fertilizers do you recommend?</h4>
                <p className="text-gray-600">Recommendations are tailored to your specific soil conditions and crop requirements for optimal results.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">How often should I test my soil?</h4>
                <p className="text-gray-600">We recommend testing soil at least twice a year - before planting season and after harvest.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
