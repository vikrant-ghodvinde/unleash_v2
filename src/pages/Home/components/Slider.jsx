import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <section className="relative py-20">
      <div className="px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="section__title">
            <p>Features</p>
            <h2>Chat Smarter, Not Harder with Brainwave</h2>
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
                <h5>Easy to Use</h5>
                <p>
                  Our tool is super easy to use, allowing anyone to make amazing
                  posts without needing to be a design expert.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-primary">
              <div className="card-body">
                <h5>Smart Resize</h5>
                <p>
                  Our smart resize feature automatically adjusts your design
                  elements so everything looks just right, saving you time and
                  hassle.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-primary">
              <div className="card-body">
                <h5>Colors & Fonts Made Easy</h5>
                <p>
                  We&apos;ve picked out great colors and fonts for you, so you can
                  easily make designs that look fantastic together.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-primary">
              <div className="card-body">
                <h5>Make It Yours</h5>
                <p>
                  Customize your post templates to match your style or brand,
                  keeping your look consistent on all social media.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-primary">
              <div className="card-body">
                <h5>Export Your Way</h5>
                <p>
                  Whether you need a high-quality PDF or JPGs for your posts,
                  our tool lets you export easily, matching the requirements of
                  different platforms.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
