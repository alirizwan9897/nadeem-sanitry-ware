import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Create slides array here using project images so the hero slider renders reliably.
const slides = [
  {
    id: 1,
    url: "/images/fried%20chicken.jpeg",
    alt: "Crispy Fried Chicken"
  },
  {
    id: 2,
    url: "/images/biryani.png",
    alt: "Biryani Special"
  },
  {
    id: 3,
    url: "/images/fried%20chicken1.jpeg",
    alt: "Tandoori Chicken"
  },
  {
    id: 4,
    url: "/images/fried%20checken3.jpeg",
    alt: "BBQ Chicken"
  },
  {
    id: 5,
    url: "/images/family%20bucket%20pack.jpeg",
    alt: "Family Bucket Pack"
  },
  {
    id: 6,
    url: "/images/spicy%20combo.jpeg",
    alt: "Spicy Wings"
  },
];
export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      style={{ width: "100%", height: "400px", borderRadius: "12px" }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} style={{ position: "relative", width: "100%", height: "400px" }}>
          <img
            src={slide.url}
            alt={slide.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px"
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}