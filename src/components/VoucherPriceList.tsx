
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CreditCard } from "lucide-react";

const VoucherPriceList = () => {
  const vouchers = [
    {
      price: "Rp. 2.000",
      duration: "3 Jam",
      popular: false,
      color: "bg-blue-500"
    },
    {
      price: "Rp. 3.000",
      duration: "6 Jam",
      popular: true,
      color: "bg-green-500"
    },
    {
      price: "Rp. 5.000",
      duration: "1 Hari",
      popular: false,
      color: "bg-purple-500"
    }
  ];

  return (
    <Card className="backdrop-blur-md bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Daftar Harga Voucher
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {vouchers.map((voucher, index) => (
          <div
            key={index}
            className="relative bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
          >
            {voucher.popular && (
              <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-black">
                Popular
              </Badge>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${voucher.color}`}></div>
                <div>
                  <p className="text-white font-bold text-lg">{voucher.price}</p>
                  <div className="flex items-center gap-1 text-blue-200 text-sm">
                    <Clock className="h-3 w-3" />
                    {voucher.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-4 p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
          <p className="text-yellow-200 text-xs text-center">
            💡 Tip: Voucher 6 jam memberikan nilai terbaik!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoucherPriceList;
