
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wifi, Clock, Shield, Users, CreditCard, Phone, MessageSquare, Settings } from "lucide-react";
import RealTimeClock from "@/components/RealTimeClock";
import VoucherPriceList from "@/components/VoucherPriceList";
import AntiBannerSlider from "@/components/AntiBannerSlider";
import Navigation from "@/components/Navigation";
import LoginForm from "@/components/LoginForm";

const Index = () => {
  const [activeTab, setActiveTab] = useState("voucher");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-3">
          {/* Header with Brand and Clock centered */}
          <div className="text-center mb-3">
            {/* Brand Name and Clock in centered layout */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-blue-400" />
                <h1 className="text-lg font-bold text-white">
                  Myesnet Login <span className="text-yellow-400">x</span> Sion Wifi
                </h1>
              </div>
              <RealTimeClock />
            </div>
            
            <p className="text-blue-200 text-sm">Selamat datang di portal WiFi kami</p>
          </div>

          {/* Single Column Layout */}
          <div className="max-w-2xl mx-auto space-y-3">
            {/* Anti Gambling Banner - moved before login */}
            <AntiBannerSlider />
            
            {/* Login Panel */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-center text-lg">
                  Portal Login WiFi
                </CardTitle>
                <CardDescription className="text-blue-200 text-center text-sm">
                  Pilih metode login yang sesuai dengan kebutuhan Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-3">
                    <TabsTrigger value="voucher" className="flex items-center gap-2 text-sm">
                      <CreditCard className="h-3 w-3" />
                      Login Voucher
                    </TabsTrigger>
                    <TabsTrigger value="member" className="flex items-center gap-2 text-sm">
                      <Users className="h-3 w-3" />
                      Login Member
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="voucher">
                    <LoginForm type="voucher" />
                  </TabsContent>
                  
                  <TabsContent value="member">
                    <LoginForm type="member" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Voucher Price List */}
            <VoucherPriceList />
            
            {/* Features */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-base">
                  <Shield className="h-4 w-4" />
                  Fitur Unggulan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3 text-blue-200 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Koneksi Internet Cepat & Stabil
                </div>
                <div className="flex items-center gap-3 text-blue-200 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Keamanan Data Terjamin
                </div>
                <div className="flex items-center gap-3 text-blue-200 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Support 24/7
                </div>
                <div className="flex items-center gap-3 text-blue-200 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Harga Terjangkau
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center gap-2 text-base">
                  <Phone className="h-4 w-4" />
                  Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-blue-200 text-sm">
                  <p className="font-semibold">Customer Service</p>
                  <p>WhatsApp: +62 812-3456-7890</p>
                  <p>Email: support@myesnet.com</p>
                </div>
                <Button variant="outline" className="w-full text-sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation moved to bottom */}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Index;
