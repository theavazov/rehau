import Link from "next/link";
import { arrowRight, chevron } from "../../../public/icons";
import styles from "./gallery.module.css";
import swiper1 from "../../../public/media/swiper1.jpg";
import swiper2 from "../../../public/media/swiper2.jpg";
import swiper3 from "../../../public/media/swiper3.jpg";
import swiper4 from "../../../public/media/swiper4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";

export function MainGallerySection() {
  const gallery = [
    {
      logo: null,
      img: swiper1,
    },
    {
      logo: null,
      img: swiper2,
    },
    {
      logo: null,
      img: swiper3,
    },
    {
      logo: null,
      img: swiper4,
    },
  ];

  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  return (
    <section className={styles.section}>
      <div className="box">
        <div className={styles.section_info}>
          <h3 className="section_title">Нашa галерея</h3>
          <Link href={"/gallery"} className={styles.inner_link}>
            Посмотрeть все {arrowRight}
          </Link>
        </div>
      </div>
      <div className={styles.swiper}>
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          speed={1600}
          modules={[Navigation]}
          navigation={{
            prevEl: prevBtn.current,
            nextEl: nextBtn.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevBtn.current;
            swiper.params.navigation.nextEl = nextBtn.current;
          }}
        >
          {gallery.map((img: any, i: number) => {
            return (
              <SwiperSlide key={i}>
                <div className={styles.gallery_image}>
                  <Image
                    src={img.img}
                    alt="swiper image"
                    className="image"
                    width={700}
                    height={470}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.buttons}>
          <div style={{ position: "relative", height: "100%" }} className="box">
            <button
              ref={prevBtn}
              className={`${styles.prev} ${styles.swiper_button}`}
            >
              {chevron}
            </button>
            <button
              ref={nextBtn}
              className={`${styles.next} ${styles.swiper_button}`}
            >
              {chevron}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
