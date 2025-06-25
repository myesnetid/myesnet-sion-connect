
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Clock, 
  Shield, 
  Users, 
  CreditCard, 
  Headphones,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Layanan = () => {
  const services = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-400" />,
      title: "WiFi Voucher",
      description: "Akses internet dengan sistem voucher yang fleksibel",
      features: ["Berbagai pilihan durasi", "Harga terjangkau", "Instant activation", "No registration"],
      price: "Mulai Rp. 2.000",
      popular: false
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: "Member WiFi",
      description: "Paket berlangganan bulanan dengan benefit eksklusif",
      features: ["Unlimited data", "Priority support", "Faster speeds", "Monthly billing"],
      price: "Rp. 150.000/bulan",
      popular: true
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      title: "Dedicated Line",
      description: "Koneksi internet khusus untuk bisnis dan kantor",
      features: ["Guaranteed bandwidth", "24/7 monitoring", "SLA guarantee", "Technical support"],
      price: "Custom pricing",
      popular: false
    }
  ];

  const features = [
    {
      icon: <Wifi className="h-6 w-6 text-blue-400" />,
      title: "High-Speed Internet",
      description: "Koneksi internet berkecepatan tinggi hingga 100 Mbps"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-400" />,
      title: "24/7 Uptime",
      description: "Jaringan yang stabil dan tersedia 24 jam setiap hari"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: "Secure Network",
      description: "Keamanan jaringan terjamin dengan firewall dan enkripsi"
    },
    {
      icon: <Headphones className="h-6 w-6 text-yellow-400" />,
      title: "Customer Support",
      description: "Tim support yang siap membantu Anda kapan saja"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Layanan Kami</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai pilihan layanan internet yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 relative">
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black">
                  <Star className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <p className="text-blue-200 text-sm">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-blue-200">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-bold text-lg text-center mb-4">{service.price}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Pilih Paket
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Keunggulan Layanan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="backdrop-blur-md bg-white/10 border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Siap untuk Terhubung?
              </h3>
              <p className="text-blue-200 mb-6">
                Bergabunglah dengan ribuan pengguna yang telah merasakan layanan internet terbaik dari kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/">Mulai Sekarang</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/kontak">Hubungi Kami</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
