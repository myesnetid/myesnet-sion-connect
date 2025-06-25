
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Shield, 
  Clock, 
  Users, 
  BarChart3, 
  Smartphone,
  Globe,
  Lock,
  Zap,
  HeartHandshake,
  Settings,
  Award
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Fitur = () => {
  const features = [
    {
      icon: <Wifi className="h-8 w-8 text-blue-400" />,
      title: "High-Speed Internet",
      description: "Kecepatan internet hingga 100 Mbps untuk semua kebutuhan digital Anda",
      category: "Performa",
      benefits: ["Streaming 4K tanpa buffering", "Gaming online lancar", "Download cepat", "Video call HD"]
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Keamanan Terjamin",
      description: "Perlindungan jaringan dengan firewall dan sistem keamanan berlapis",
      category: "Keamanan",
      benefits: ["Firewall aktif", "Anti-malware", "Data encryption", "Safe browsing"]
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-400" />,
      title: "24/7 Uptime",
      description: "Jaringan yang stabil dan tersedia 24 jam dengan uptime 99.9%",
      category: "Reliabilitas",
      benefits: ["Monitoring 24/7", "Backup connection", "Auto failover", "Redundant system"]
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-400" />,
      title: "Multi Device Support",
      description: "Dukungan untuk berbagai perangkat dengan bandwidth yang adil",
      category: "Kompatibilitas",
      benefits: ["Smartphone support", "Laptop & PC", "Smart TV", "IoT devices"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-red-400" />,
      title: "Real-time Monitoring",
      description: "Pantau penggunaan data dan kecepatan internet secara real-time",
      category: "Monitoring",
      benefits: ["Usage tracking", "Speed test", "Data analytics", "Performance reports"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-400" />,
      title: "Mobile App",
      description: "Aplikasi mobile untuk mengelola akun dan monitoring penggunaan",
      category: "Kemudahan",
      benefits: ["Account management", "Bill payment", "Usage monitoring", "Support chat"]
    }
  ];

  const categories = ["Semua", "Performa", "Keamanan", "Reliabilitas", "Kompatibilitas", "Monitoring", "Kemudahan"];

  const specifications = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Bandwidth",
      value: "Up to 100 Mbps",
      description: "Download & Upload speed"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: "Coverage",
      value: "99.9%",
      description: "Area coverage"
    },
    {
      icon: <Lock className="h-6 w-6 text-green-400" />,
      title: "Security",
      value: "WPA3",
      description: "Latest encryption"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      title: "Concurrent Users",
      value: "100+",
      description: "Per access point"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Fitur Unggulan</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Teknologi terdepan dan fitur canggih untuk pengalaman internet terbaik
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {specifications.map((spec, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 text-center">
              <CardContent className="p-4">
                <div className="flex justify-center mb-2">
                  {spec.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{spec.value}</h3>
                <p className="text-blue-200 text-sm font-medium">{spec.title}</p>
                <p className="text-blue-300 text-xs">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Fitur Lengkap</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {feature.icon}
                      <div>
                        <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {feature.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-blue-300 text-sm font-medium mb-2">Benefits:</p>
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-blue-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Spesifikasi Teknis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Network Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-200">Protocol</span>
                  <span className="text-white">802.11ac Wave 2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Frequency</span>
                  <span className="text-white">2.4GHz & 5GHz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Authentication</span>
                  <span className="text-white">RADIUS + MySQL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Load Balancing</span>
                  <span className="text-white">Automatic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">QoS</span>
                  <span className="text-white">Dynamic</span>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Service Level Agreement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-200">Uptime Guarantee</span>
                  <span className="text-white">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Response Time</span>
                  <span className="text-white">&lt; 50ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Support Response</span>
                  <span className="text-white">&lt; 5 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Resolution Time</span>
                  <span className="text-white">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Monitoring</span>
                  <span className="text-white">24/7/365</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <Card className="backdrop-blur-md bg-white/10 border-white/20 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center text-2xl flex items-center justify-center gap-2">
              <HeartHandshake className="h-6 w-6" />
              Mengapa Memilih Kami?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Keunggulan Kompetitif</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Harga Terjangkau</p>
                      <p className="text-blue-200 text-sm">Paket internet dengan harga yang kompetitif</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Teknologi Terbaru</p>
                      <p className="text-blue-200 text-sm">Infrastruktur jaringan dengan teknologi terdepan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Support Lokal</p>
                      <p className="text-blue-200 text-sm">Tim technical support yang memahami kebutuhan lokal</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Komitmen Kami</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">★</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Kepuasan Pelanggan</p>
                      <p className="text-blue-200 text-sm">Mengutamakan kepuasan dan feedback pelanggan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">★</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Inovasi Berkelanjutan</p>
                      <p className="text-blue-200 text-sm">Terus berinovasi untuk memberikan layanan terbaik</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">★</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Transparansi</p>
                      <p className="text-blue-200 text-sm">Komunikasi yang jelas dan transparan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Fitur;
