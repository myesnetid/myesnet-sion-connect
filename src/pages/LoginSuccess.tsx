
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ArrowRight, Wifi } from "lucide-react";

const LoginSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  
  const { loginType, username, timestamp } = location.state || {};

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/status");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleManualRedirect = () => {
    navigate("/status");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="backdrop-blur-md bg-white/10 border-white/20 text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <CheckCircle className="h-20 w-20 text-green-400" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
            <CardTitle className="text-white text-2xl">
              Login Berhasil!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <p className="text-green-200">
                Selamat datang di jaringan WiFi kami
              </p>
              
              <div className="bg-white/5 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200">Tipe Login:</span>
                  <span className="text-white font-medium capitalize">
                    {loginType === "voucher" ? "Voucher" : "Member"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200">
                    {loginType === "voucher" ? "Kode:" : "Username:"}
                  </span>
                  <span className="text-white font-medium">{username}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200">Waktu Login:</span>
                  <span className="text-white font-medium">
                    {timestamp ? new Date(timestamp).toLocaleTimeString('id-ID') : '-'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <Wifi className="h-5 w-5 text-green-400" />
                <span>Koneksi internet aktif</span>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-500/30">
                <div className="flex items-center justify-center gap-2 text-yellow-200 mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Redirect otomatis dalam {countdown} detik</span>
                </div>
                <p className="text-xs text-yellow-200/80">
                  Anda akan diarahkan ke halaman status
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleManualRedirect}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Lanjut ke Status
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate("/")}
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                Kembali ke Beranda
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginSuccess;
