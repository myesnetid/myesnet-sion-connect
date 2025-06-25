
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Building,
  Users,
  Headphones
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Kontak = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-400" />,
      title: "Telepon",
      value: "+62 812-3456-7890",
      description: "Customer Service 24/7",
      action: "tel:+6281234567890"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-400" />,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      description: "Chat langsung dengan CS",
      action: "https://wa.me/6281234567890"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-400" />,
      title: "Email",
      value: "support@myesnet.com",
      description: "Respon dalam 2 jam",
      action: "mailto:support@myesnet.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-400" />,
      title: "Alamat",
      value: "Jl. Teknologi No. 123",
      description: "Jakarta Selatan, 12345",
      action: null
    }
  ];

  const offices = [
    {
      name: "Kantor Pusat",
      address: "Jl. Teknologi No. 123, Jakarta Selatan",
      phone: "+62 21-1234-5678",
      hours: "Senin - Jumat: 08:00 - 17:00",
      type: "Headquarters"
    },
    {
      name: "Cabang Sion",
      address: "Jl. Sion Raya No. 45, Jakarta Barat",
      phone: "+62 21-8765-4321",
      hours: "Senin - Sabtu: 09:00 - 18:00",
      type: "Branch Office"
    },
    {
      name: "Support Center",
      address: "Gedung Cyber, Lt. 8, Jakarta Pusat",
      phone: "+62 21-5555-0123",
      hours: "24/7 Online Support",
      type: "Support"
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-500" />,
      title: "WhatsApp Business",
      description: "Chat langsung dengan customer service kami",
      availability: "24/7",
      response: "< 5 menit",
      action: "Chat Sekarang"
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      title: "Call Center",
      description: "Hubungi hotline customer service",
      availability: "24/7",
      response: "Langsung",
      action: "Telepon"
    },
    {
      icon: <Mail className="h-8 w-8 text-purple-500" />,
      title: "Email Support",
      description: "Kirim pertanyaan detail melalui email",
      availability: "24/7",
      response: "< 2 jam",
      action: "Kirim Email"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Kontak Kami</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Kami siap membantu Anda 24/7. Hubungi kami melalui berbagai channel yang tersedia
          </p>
        </div>

        {/* Quick Contact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 text-center hover:bg-white/15 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{contact.title}</h3>
                <p className="text-white font-medium mb-1">{contact.value}</p>
                <p className="text-blue-200 text-sm mb-4">{contact.description}</p>
                {contact.action && (
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => contact.action && window.open(contact.action, '_blank')}
                  >
                    <Send className="h-3 w-3 mr-1" />
                    Hubungi
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Channels */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Channel Support</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {channel.icon}
                  </div>
                  <CardTitle className="text-white">{channel.title}</CardTitle>
                  <p className="text-blue-200 text-sm">{channel.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">Ketersediaan:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">Respon Time:</span>
                    <span className="text-white">{channel.response}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    {channel.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Lokasi Kantor</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Building className="h-6 w-6 text-blue-400" />
                    <div>
                      <CardTitle className="text-white text-lg">{office.name}</CardTitle>
                      <span className="text-blue-200 text-sm">{office.type}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-blue-200 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-green-400" />
                    <p className="text-white text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-yellow-400" />
                    <p className="text-blue-200 text-sm">{office.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-blue-200">Senin - Jumat</span>
                <span className="text-white">08:00 - 17:00 WIB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Sabtu</span>
                <span className="text-white">09:00 - 15:00 WIB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Minggu</span>
                <span className="text-white">Tutup</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="text-blue-200">Customer Service</span>
                  <span className="text-green-400 font-medium">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Technical Support</span>
                  <span className="text-green-400 font-medium">24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Headphones className="h-5 w-5" />
                Tim Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-200 text-sm">Customer Service Team</span>
                </div>
                <p className="text-white text-sm ml-7">5 agent siap membantu Anda</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-green-400" />
                  <span className="text-blue-200 text-sm">Technical Support Team</span>
                </div>
                <p className="text-white text-sm ml-7">3 teknisi berpengalaman</p>
              </div>
              
              <div className="pt-3 border-t border-white/10">
                <p className="text-blue-200 text-sm">
                  📞 Average response time: <span className="text-white font-medium">< 2 menit</span>
                </p>
                <p className="text-blue-200 text-sm">
                  ⭐ Customer satisfaction: <span className="text-white font-medium">4.8/5.0</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Quick Links */}
        <Card className="backdrop-blur-md bg-white/10 border-white/20 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center">Pertanyaan Umum</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              <Button variant="outline" className="justify-start border-white/20 text-white hover:bg-white/10">
                ❓ Bagaimana cara membeli voucher?
              </Button>
              <Button variant="outline" className="justify-start border-white/20 text-white hover:bg-white/10">
                ❓ Lupa password member?
              </Button>
              <Button variant="outline" className="justify-start border-white/20 text-white hover:bg-white/10">
                ❓ Internet lambat, bagaimana?
              </Button>
              <Button variant="outline" className="justify-start border-white/20 text-white hover:bg-white/10">
                ❓ Cara upgrade paket member?
              </Button>
            </div>
            <div className="mt-4 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Lihat Semua FAQ
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Kontak;
