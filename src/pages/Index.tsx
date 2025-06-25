
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wifi className="h-10 w-10 text-blue-400" />
              <h1 className="text-4xl font-bold text-white">
                Myesnet Login <span className="text-yellow-400">x</span> Sion Wifi
              </h1>
            </div>
            <p className="text-blue-200 text-lg">Selamat datang di portal WiFi kami</p>
            <RealTimeClock />
          </div>

          {/* Anti Gambling Banner */}
          <AntiBannerSlider />

          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {/* Login Panel */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-md bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-center text-2xl">
                    Portal Login WiFi
                  </CardTitle>
                  <CardDescription className="text-blue-200 text-center">
                    Pilih metode login yang sesuai dengan kebutuhan Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="voucher" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Login Voucher
                      </TabsTrigger>
                      <TabsTrigger value="member" className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <VoucherPriceList />
              
              {/* Features */}
              <Card className="backdrop-blur-md bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Fitur Unggulan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 text-blue-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Koneksi Internet Cepat & Stabil
                  </div>
                  <div className="flex items-center gap-3 text-blue-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Keamanan Data Terjamin
                  </div>
                  <div className="flex items-center gap-3 text-blue-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Support 24/7
                  </div>
                  <div className="flex items-center gap-3 text-blue-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Harga Terjangkau
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="backdrop-blur-md bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Kontak
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-blue-200">
                    <p className="font-semibold">Customer Service</p>
                    <p>WhatsApp: +62 812-3456-7890</p>
                    <p>Email: support@myesnet.com</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
