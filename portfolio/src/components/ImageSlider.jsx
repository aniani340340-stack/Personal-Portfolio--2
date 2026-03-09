import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function ImageSlider() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-950">

      <h2 className="text-4xl text-center font-bold text-purple-400 mb-12">
        Project Gallery
      </h2>

      <div className="max-w-5xl mx-auto">

        <Swiper spaceBetween={30} slidesPerView={1}>

          <SwiperSlide>
            <img src="/images/project1.jpg" className="rounded-xl" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/project2.jpg" className="rounded-xl" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/project3.jpg" className="rounded-xl" />
          </SwiperSlide>

        </Swiper>

      </div>

    </section>
  )
}