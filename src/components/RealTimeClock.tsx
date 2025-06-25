
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      // Set timezone to Asia/Jakarta (GMT+7)
      const jakartaTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
      });
      setTime(new Date(jakartaTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${dayName}, ${day} ${month} ${year}`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 mx-auto max-w-md mt-4">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Clock className="h-5 w-5 text-blue-400" />
        <span className="text-blue-200 text-sm font-medium">Waktu Indonesia Barat (WIB)</span>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-1">
          {formatTime(time)}
        </div>
        <div className="text-blue-200 text-sm">
          {formatDate(time)}
        </div>
      </div>
    </div>
  );
};

export default RealTimeClock;
