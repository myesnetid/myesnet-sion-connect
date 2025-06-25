
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Clock, 
  Download, 
  Upload, 
  Users, 
  CreditCard, 
  LogOut,
  RefreshCw,
  Globe,
  Signal
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Status = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Simulated user data - in real app, this would come from your backend
  const [userStatus] = useState({
    type: "voucher", // or "member"
    username: "VOUCH123456",
    timeRemaining: 7200, // in seconds (2 hours)
    timeTotal: 10800, // in seconds (3 hours)
    dataUsed: 150, // in MB
    dataLimit: 1000, // in MB
    loginTime: new Date().toISOString(),
    ipAddress: "192.168.1.100",
    macAddress: "AA:BB:CC:DD:EE:FF",
    sessionId: "SES123456789"
  });

  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatData = (mb: number) => {
    if (mb >= 1024) {
      return `${(mb / 1024).toFixed(1)} GB`;
    }
    return `${mb} MB`;
  };

  const timeUsedPercentage = ((userStatus.timeTotal - userStatus.timeRemaining) / userStatus.timeTotal) * 100;
  const dataUsedPercentage = (userStatus.dataUsed / userStatus.dataLimit) * 100;

  const handleLogout = () => {
    toast({
      title: "Logout berhasil",
      description: "Anda telah keluar dari jaringan WiFi",
    });
    navigate("/");
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate refresh API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
    toast({
      title: "Status diperbarui",
      description: "Informasi status terbaru telah dimuat",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wifi className="h-10 w-10 text-green-400" />
            <h1 className="text-3xl font-bold text-white">Status Koneksi</h1>
          </div>
          <div className="text-blue-200">
            {currentTime.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Connection Status */}
          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Signal className="h-5 w-5 text-green-400" />
                Status Koneksi
                <Badge className="ml-auto bg-green-500 text-white">Aktif</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-200">Tipe Login</p>
                  <p className="text-white font-medium flex items-center gap-1">
                    {userStatus.type === "voucher" ? (
                      <><CreditCard className="h-4 w-4" /> Voucher</>
                    ) : (
                      <><Users className="h-4 w-4" /> Member</>
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-blue-200">Username/Kode</p>
                  <p className="text-white font-medium">{userStatus.username}</p>
                </div>
                <div>
                  <p className="text-blue-200">IP Address</p>
                  <p className="text-white font-medium">{userStatus.ipAddress}</p>
                </div>
                <div>
                  <p className="text-blue-200">MAC Address</p>
                  <p className="text-white font-medium text-xs">{userStatus.macAddress}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <p className="text-blue-200 text-sm mb-2">Waktu Login</p>
                <p className="text-white">
                  {new Date(userStatus.loginTime).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Usage Statistics */}
          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-400" />
                Statistik Penggunaan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Time Usage */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Waktu Tersisa</span>
                  <span className="text-white font-medium">
                    {formatTime(userStatus.timeRemaining)}
                  </span>
                </div>
                <Progress value={timeUsedPercentage} className="h-2" />
                <div className="flex justify-between text-xs text-blue-300">
                  <span>Terpakai: {formatTime(userStatus.timeTotal - userStatus.timeRemaining)}</span>
                  <span>Total: {formatTime(userStatus.timeTotal)}</span>
                </div>
              </div>

              {/* Data Usage */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Data Terpakai</span>
                  <span className="text-white font-medium">
                    {formatData(userStatus.dataUsed)} / {formatData(userStatus.dataLimit)}
                  </span>
                </div>
                <Progress value={dataUsedPercentage} className="h-2" />
                <div className="flex justify-between text-xs text-blue-300">
                  <span>Sisa: {formatData(userStatus.dataLimit - userStatus.dataUsed)}</span>
                  <span>{dataUsedPercentage.toFixed(1)}% terpakai</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network Info */}
          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-400" />
                Informasi Jaringan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <Download className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <p className="text-blue-200 text-sm">Download</p>
                  <p className="text-white font-bold">24.5 Mbps</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <Upload className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-blue-200 text-sm">Upload</p>
                  <p className="text-white font-bold">12.3 Mbps</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-200">SSID</span>
                  <span className="text-white">Myesnet-WiFi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Gateway</span>
                  <span className="text-white">192.168.1.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">DNS</span>
                  <span className="text-white">8.8.8.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Session ID</span>
                  <span className="text-white text-xs">{userStatus.sessionId}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Control Panel */}
          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Panel Kontrol</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button 
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                  {isRefreshing ? 'Memperbarui...' : 'Refresh Status'}
                </Button>
                
                <Button 
                  onClick={handleLogout}
                  variant="destructive"
                  className="w-full"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
                
                <Button 
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                >
                  Kembali ke Beranda
                </Button>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-500/30">
                  <p className="text-yellow-200 text-xs text-center">
                    ⚠️ Harap jangan logout jika masih ingin menggunakan internet
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Status;
