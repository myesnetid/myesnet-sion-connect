
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, LogIn, CreditCard, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  type: "voucher" | "member";
}

const LoginForm = ({ type }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // For voucher login, username and password should be the same
    if (type === "voucher" && name === "username") {
      setFormData({
        username: value,
        password: value
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    try {
      // Here you would typically make an API call to your backend
      // For demo purposes, we'll simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Login Berhasil!",
        description: `Selamat datang, ${type === "voucher" ? "pengguna voucher" : "member"}!`,
      });

      // Navigate to success page with login type
      navigate("/login-success", { 
        state: { 
          loginType: type,
          username: formData.username,
          timestamp: new Date().toISOString()
        } 
      });
    } catch (error) {
      toast({
        title: "Login Gagal",
        description: "Periksa kembali username dan password Anda.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-white/5 border-white/20">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {type === "voucher" ? (
            <CreditCard className="h-6 w-6 text-blue-400" />
          ) : (
            <Users className="h-6 w-6 text-green-400" />
          )}
          <h3 className="text-lg font-semibold text-white">
            {type === "voucher" ? "Login dengan Voucher" : "Login Member"}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`${type}-username`} className="text-blue-200">
              {type === "voucher" ? "Kode Voucher" : "Username"}
            </Label>
            <Input
              id={`${type}-username`}
              name="username"
              type="text"
              placeholder={type === "voucher" ? "Masukkan kode voucher" : "Masukkan username"}
              value={formData.username}
              onChange={handleInputChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          {type === "member" && (
            <div className="space-y-2">
              <Label htmlFor={`${type}-password`} className="text-blue-200">
                Password
              </Label>
              <div className="relative">
                <Input
                  id={`${type}-password`}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              "Memproses..."
            ) : (
              <>
                <LogIn className="h-4 w-4 mr-2" />
                {type === "voucher" ? "Login dengan Voucher" : "Login sebagai Member"}
              </>
            )}
          </Button>
        </form>

        {type === "voucher" && (
          <div className="mt-4 p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
            <p className="text-blue-200 text-sm text-center">
              💡 Masukkan kode voucher yang tertera pada struk pembelian
            </p>
          </div>
        )}

        {type === "member" && (
          <div className="mt-4 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
            <p className="text-green-200 text-sm text-center">
              👤 Belum punya akun member? Hubungi customer service kami
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LoginForm;
