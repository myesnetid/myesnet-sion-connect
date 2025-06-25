
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageSquare, Settings, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Beranda", href: "/", icon: "🏠" },
    { name: "Layanan", href: "/layanan", icon: "⚡" },
    { name: "Fitur", href: "/fitur", icon: "🔧" },
    { name: "Kontak", href: "/kontak", icon: "📞" },
    { name: "Pengaduan", href: "/pengaduan", icon: "📝" },
  ];

  return (
    <nav className="bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-white font-bold text-sm">Myesnet x Sion</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white hover:text-blue-300 transition-colors px-2 py-1 rounded-md text-sm ${
                  location.pathname === item.href ? "bg-blue-600/30" : ""
                }`}
              >
                <span className="mr-1 text-xs">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white h-8 w-8">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 border-gray-700">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-blue-300 transition-colors px-3 py-2 rounded-md flex items-center"
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
