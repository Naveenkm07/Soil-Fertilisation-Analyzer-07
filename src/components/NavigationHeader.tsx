
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Home, 
  BarChart3, 
  FileText, 
  Users, 
  Settings, 
  HelpCircle, 
  TrendingUp,
  Calendar,
  Database,
  Map,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";
import AIChatbot from "./AIChatbot";
import SocialContactLinks from "./SocialContactLinks";
import InviteLink from "./InviteLink";

const NavigationHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const navigationItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: Home,
      description: "Main soil analysis dashboard"
    },
    {
      title: "Analysis History",
      href: "/analysis-history",
      icon: Database,
      description: "View previous soil analyses"
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: BarChart3,
      description: "Advanced soil data analytics"
    },
    {
      title: "Reports",
      href: "/reports",
      icon: FileText,
      description: "Historical analysis reports"
    },
    {
      title: "Farm Management",
      href: "/farm-management",
      icon: Map,
      description: "Manage your farm properties"
    },
    {
      title: "Trends",
      href: "/trends",
      icon: TrendingUp,
      description: "Soil health trends over time"
    },
    {
      title: "Calendar",
      href: "/calendar",
      icon: Calendar,
      description: "Schedule soil tests and treatments"
    },
    {
      title: "Team",
      href: "/team",
      icon: Users,
      description: "Manage team members and roles"
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
      description: "Application settings and preferences"
    },
    {
      title: "Help",
      href: "/help",
      icon: HelpCircle,
      description: "Support and documentation"
    }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Soil Fertilisation Analyzer
              </span>
            </div>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                    Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-2">
                      {navigationItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <NavigationMenuLink
                            key={item.href}
                            onClick={() => navigate(item.href)}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                          >
                            <div className="flex items-center space-x-2">
                              <Icon className="h-5 w-5 text-green-600" />
                              <div className="text-sm font-medium leading-none">
                                {item.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* New components beside the menu */}
            <div className="flex items-center space-x-3">
              <AIChatbot />
              <InviteLink />
              <SocialContactLinks />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <AuthModal>
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </AuthModal>
                <AuthModal>
                  <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    Get Started
                  </Button>
                </AuthModal>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
