
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant for soil analysis. I can help you with questions about fertilizers, soil health, crop recommendations, and more. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputMessage("");
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('nitrogen') || input.includes('n')) {
      return "Nitrogen is essential for plant growth and leaf development. For soil with low nitrogen, consider using urea or ammonium sulfate fertilizers. The optimal nitrogen level is typically 40-60 mg/kg for most crops.";
    }
    
    if (input.includes('phosphorus') || input.includes('p')) {
      return "Phosphorus promotes root development and flowering. If your soil test shows low phosphorus (below 20 mg/kg), consider applying triple superphosphate or bone meal.";
    }
    
    if (input.includes('potassium') || input.includes('k')) {
      return "Potassium helps with disease resistance and water regulation. For potassium deficiency, apply potash or muriate of potash. Optimal levels are 150-300 mg/kg.";
    }
    
    if (input.includes('ph') || input.includes('acidity')) {
      return "Soil pH affects nutrient availability. Most crops prefer pH 6.0-7.0. If pH is too low, add lime. If too high, add sulfur or organic matter.";
    }
    
    if (input.includes('organic matter')) {
      return "Organic matter improves soil structure and nutrient retention. Aim for 3-5% organic matter. Add compost, manure, or cover crops to increase levels.";
    }
    
    return "Thank you for your question! For specific soil analysis and fertilizer recommendations, please use our soil analysis form. I can provide general guidance on soil health, nutrient management, and sustainable farming practices.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 hover:bg-blue-50">
          <MessageCircle className="h-4 w-4 mr-2" />
          AI Assistant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>AI Soil Analysis Assistant</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-96">
          <ScrollArea className="flex-1 p-4 border rounded-md mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about soil analysis..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIChatbot;
