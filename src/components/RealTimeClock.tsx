
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit'
    });
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-2 text-center">
      <div className="flex items-center justify-center gap-1 mb-1">
        <Clock className="h-3 w-3 text-blue-400" />
        <span className="text-blue-200 text-xs">WIB</span>
      </div>
      <div className="text-white text-sm font-bold">{formatTime(time)}</div>
      <div className="text-blue-200 text-xs">{formatDate(time)}</div>
    </div>
  );
};

export default RealTimeClock;
