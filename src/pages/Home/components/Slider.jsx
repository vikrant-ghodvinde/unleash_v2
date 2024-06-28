import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-20">
      <div className="px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="section__title">
            <p>{t("Features")}</p>
            <h2>{t("FeaturesText")}</h2>
          </div>
        </div>
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.6,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="features__slider"
        >
          <SwiperSlide>
            <div className="card-primary">
              <div className="card-body">
                <h5>{t("FeatureOne")}</h5>
                <p>{t("FeatureTextOne")}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-primary">
              <div className="card-body">
                <h5>{t("FeatureTwo")}</h5>
                <p>{t("FeatureTextTwo")}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-primary">
              <div className="card-body">
              <h5>{t("FeatureThree")}</h5>
              <p>{t("FeatureTextThree")}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-primary">
              <div className="card-body">
              <h5>{t("FeatureFour")}</h5>
              <p>{t("FeatureTextFour")}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-primary">
              <div className="card-body">
              <h5>{t("FeatureFive")}</h5>
              <p>{t("FeatureTextFive")}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
