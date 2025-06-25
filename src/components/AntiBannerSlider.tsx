
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AntiBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: "STOP JUDI ONLINE!",
      subtitle: "Judi online merusak masa depan keluarga",
      description: "Lindungi diri dan keluarga dari bahaya judi online. Gunakan internet untuk hal positif.",
      bgColor: "bg-red-600",
      icon: <AlertTriangle className="h-8 w-8" />
    },
    {
      title: "INTERNET SEHAT",
      subtitle: "Gunakan internet dengan bijak",
      description: "Mari bersama-sama menciptakan lingkungan internet yang sehat dan produktif.",
      bgColor: "bg-green-600",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "LINDUNGI ANAK-ANAK",
      subtitle: "Awasi aktivitas online anak",
      description: "Dampingi anak-anak dalam menggunakan internet untuk pembelajaran dan hiburan positif.",
      bgColor: "bg-blue-600",
      icon: <Shield className="h-8 w-8" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 ${banner.bgColor} text-white p-6 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex-shrink-0">
                  {banner.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{banner.title}</h3>
                  <p className="text-sm opacity-90 mb-1">{banner.subtitle}</p>
                  <p className="text-xs opacity-75">{banner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AntiBannerSlider;
