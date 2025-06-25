
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Send,
  Phone,
  Mail,
  Star,
  TrendingUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Pengaduan = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    priority: "",
    subject: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: "koneksi", label: "Masalah Koneksi Internet" },
    { value: "billing", label: "Tagihan & Pembayaran" },
    { value: "voucher", label: "Voucher Tidak Berfungsi" },
    { value: "kecepatan", label: "Internet Lambat" },
    { value: "akun", label: "Masalah Akun Member" },
    { value: "teknis", label: "Masalah Teknis Lainnya" },
    { value: "saran", label: "Saran & Masukan" }
  ];

  const priorities = [
    { value: "rendah", label: "Rendah", color: "bg-blue-500" },
    { value: "sedang", label: "Sedang", color: "bg-yellow-500" },
    { value: "tinggi", label: "Tinggi", color: "bg-orange-500" },
    { value: "kritis", label: "Kritis", color: "bg-red-500" }
  ];

  const recentComplaints = [
    {
      id: "ADU001",
      subject: "Internet lambat di area Sion",
      category: "Kecepatan",
      status: "Selesai",
      date: "2024-01-15",
      priority: "Sedang"
    },
    {
      id: "ADU002", 
      subject: "Voucher 3 jam tidak bisa login",
      category: "Voucher",
      status: "Dalam Proses",
      date: "2024-01-14",
      priority: "Tinggi"
    },
    {
      id: "ADU003",
      subject: "Tagihan member tidak sesuai",
      category: "Billing",
      status: "Menunggu",
      date: "2024-01-13",
      priority: "Rendah"
    }
  ];

  const stats = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-400" />,
      title: "Total Pengaduan",
      value: "1,247",
      change: "+12%"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      title: "Terselesaikan",
      value: "1,198",
      change: "+8%"
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-400" />,
      title: "Rata-rata Respons",
      value: "2.3 jam",
      change: "-15%"
    },
    {
      icon: <Star className="h-6 w-6 text-purple-400" />,
      title: "Rating Kepuasan",
      value: "4.8/5",
      change: "+0.2"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Pengaduan Berhasil Dikirim!",
        description: "Kami akan menindaklanjuti pengaduan Anda dalam 2x24 jam. Nomor tiket: ADU004",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        priority: "",
        subject: "",
        description: ""
      });
    } catch (error) {
      toast({
        title: "Gagal Mengirim Pengaduan",
        description: "Terjadi kesalahan, silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Selesai": return "bg-green-500";
      case "Dalam Proses": return "bg-blue-500"; 
      case "Menunggu": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Kritis": return "bg-red-500";
      case "Tinggi": return "bg-orange-500";
      case "Sedang": return "bg-yellow-500";
      case "Rendah": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Pengaduan & Saran</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Sampaikan keluhan, saran, atau masalah yang Anda alami. Kami berkomitmen memberikan solusi terbaik.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 text-center">
              <CardContent className="p-4">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{stat.value}</h3>
                <p className="text-blue-200 text-sm">{stat.title}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-green-400 text-xs">{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Complaint Form */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Form Pengaduan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-blue-200">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-blue-200">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-blue-200">No. Telepon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="+62 812-3456-7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-blue-200">Kategori *</Label>
                      <Select onValueChange={(value) => handleSelectChange("category", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-blue-200">Prioritas *</Label>
                      <Select onValueChange={(value) => handleSelectChange("priority", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Pilih prioritas" />
                        </SelectTrigger>
                        <SelectContent>
                          {priorities.map((priority) => (
                            <SelectItem key={priority.value} value={priority.value}>
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${priority.color}`}></div>
                                {priority.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-blue-200">Subjek *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Ringkasan masalah"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-blue-200">Deskripsi Masalah *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Jelaskan masalah yang Anda alami secara detail..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Kirim Pengaduan
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Kontak Darurat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Call: +62 812-3456-7890
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Email: support@myesnet.com
                  </Button>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-blue-200 text-sm text-center">
                    Untuk masalah kritis, hubungi langsung customer service kami
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Complaints */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Pengaduan Terbaru</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentComplaints.map((complaint, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-blue-300 text-xs font-mono">{complaint.id}</span>
                      <Badge className={`text-white text-xs ${getStatusColor(complaint.status)}`}>
                        {complaint.status}
                      </Badge>
                    </div>
                    <h4 className="text-white text-sm font-medium mb-1">{complaint.subject}</h4>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-blue-200">{complaint.category}</span>
                      <span className="text-blue-300">{complaint.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Tips Pengaduan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-200">Sertakan detail lengkap masalah yang dialami</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-200">Lampirkan screenshot jika memungkinkan</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-200">Tentukan prioritas sesuai urgensi masalah</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-200">Berikan informasi kontak yang aktif</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengaduan;
