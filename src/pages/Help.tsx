import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NavigationHeader from "@/components/NavigationHeader";
import { HelpCircle, MessageCircle, Book, ArrowLeft, FileText, Calculator, Sprout, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  const handleWhatsAppSupport = () => {
    const phoneNumber = "9591502209";
    const message = "Hello, I need help with Fertile Farms Insights Hub";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const documentationItems = [
    {
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      title: "Getting Started",
      content: "To begin using Fertile Farms Insights Hub, create an account and add your first farm. Navigate to the Dashboard to view all your soil analyses in one place. You can add new analysis data by clicking the 'Add Analysis' button."
    },
    {
      icon: <Calculator className="h-5 w-5 text-green-600" />,
      title: "Adding Soil Analysis",
      content: "Enter your farm name, location, and test date. Input the N-P-K values (Nitrogen, Phosphorus, Potassium) in kg/hectare, pH level (0-14), and organic matter percentage. The system will automatically analyze your soil health and provide recommendations."
    },
    {
      icon: <Sprout className="h-5 w-5 text-amber-600" />,
      title: "Understanding Recommendations",
      content: "Our AI analyzes your soil data against optimal crop requirements. Recommendations include fertilizer types, quantities, and application schedules. Green indicators show healthy levels, yellow indicates moderate attention needed, and red requires immediate action."
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-purple-600" />,
      title: "Viewing Reports",
      content: "Access detailed reports with charts showing historical trends. Compare multiple farms side-by-side. Export PDF reports for offline use or sharing with agricultural consultants. Use filters to find specific time periods or locations."
    }
  ];

  const faqItems = [
    {
      question: "How do I add a new soil analysis?",
      answer: "Navigate to the Dashboard and click 'Add Analysis'. Fill in your farm details, location, test date, and soil parameters (N, P, K, pH, organic matter). Click Save to store your analysis."
    },
    {
      question: "What do N-P-K values mean?",
      answer: "N-P-K stands for Nitrogen (N), Phosphorus (P), and Potassium (K) - the three primary macronutrients plants need. Nitrogen promotes leaf growth, Phosphorus supports root development and flowering, and Potassium aids overall plant health and disease resistance."
    },
    {
      question: "How often should I test my soil?",
      answer: "For best results, test your soil at least twice yearly - once before planting season to prepare soil, and once after harvest to assess nutrient depletion. High-value crops may require quarterly testing."
    },
    {
      question: "What is the ideal pH range for most crops?",
      answer: "Most crops thrive in slightly acidic to neutral soil with pH 6.0-7.0. Some crops like blueberries prefer more acidic soil (pH 4.5-5.5), while others like asparagus tolerate slightly alkaline conditions (pH 7.0-8.0)."
    },
    {
      question: "Can I export my soil analysis data?",
      answer: "Yes! Go to Reports section and click 'Export PDF' to download a comprehensive report with charts and recommendations. This is useful for sharing with fertilizer suppliers or agricultural advisors."
    },
    {
      question: "How do I interpret the color-coded recommendations?",
      answer: "Green indicates optimal levels requiring no action. Yellow suggests moderate deficiency requiring attention. Red signals critical deficiency needing immediate fertilization. Follow the recommended fertilizer types and quantities shown."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. Your farm data is stored securely and is only accessible by you. We use industry-standard encryption and never share your information with third parties without consent."
    },
    {
      question: "Can I manage multiple farms?",
      answer: "Yes! You can add unlimited farms and locations. Each analysis is tagged with the farm name and location for easy organization. Use the search and filter features to find specific farm data quickly."
    },
    {
      question: "What crops are supported?",
      answer: "Our system supports all major crops including rice, wheat, corn, vegetables, fruits, and cash crops. Recommendations are tailored based on the specific nutrient requirements of each crop type."
    },
    {
      question: "How accurate are the fertilizer recommendations?",
      answer: "Recommendations are based on established agricultural research and soil science. However, we recommend consulting with local agricultural experts as soil conditions can vary by region and specific local factors."
    }
  ];

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
              <Button variant="outline" onClick={() => document.getElementById('docs-section')?.scrollIntoView({behavior: 'smooth'})}>
                View Docs
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto" />
              <CardTitle>WhatsApp Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Contact: 9591502209</p>
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
              <Button variant="outline" onClick={() => document.getElementById('faq-section')?.scrollIntoView({behavior: 'smooth'})}>
                Browse FAQ
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Documentation Section */}
        <div id="docs-section" className="mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-6 w-6 text-blue-600" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {documentationItems.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      {item.icon}
                      <h4 className="font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div id="faq-section">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-purple-600" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mt-8">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">WhatsApp Support</p>
                  <p className="text-gray-600">+91 9591502209</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-gray-600">@naveen.techie</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
