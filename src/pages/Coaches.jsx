import React from "react";
import CardCoach from "../components/CoachCard/CoachCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { IconButton, Box } from "@mui/material";
import AutoplayPlugin from "../assets/autoplay";

const coachData = [
  {
    image: "https://olimpiec.by/wp-content/uploads/2023/01/chudnikov-anton.jpg",
    name: "Антон Чудников",
    imgAlt: "photo Антон Чудников",
    description: (
      <>
        Высшее педагогическое образование. Опыт работы более 10 лет. <br />
        Окончил курсы по обучению плаванию детей, по гидрореабилитации.
      </>
    ),
  },
  {
    image:
      "https://olympicstyle.com.ua/wp-content/uploads/2020/08/IMG_0995.jpg",
    name: "Виталий Пупкин",
    imgAlt: "photo Виталий Пупкин",
    description: (
      <>
        Спортивный опыт: 25 лет <br />
        Тренерский опыт: 10 лет
      </>
    ),
  },
  {
    image:
      "https://sun9-86.userapi.com/impg/CufFVYXWpN1rjoSrW3T3DqZsuG5I0sjewfUPZQ/ISoFgF8Qw34.jpg",
    name: "Голикова Анна",
    imgAlt: "photo Голикова Анна",
    description: (
      <>
        Спортивный опыт: 10 лет <br />
        Тренерский опыт: 7 лет
      </>
    ),
  },
  {
    image:
      "https://irklider.ru/wp-content/uploads/2022/09/photo_2022-09-23_11-12-56.jpg",
    name: "Виталий Брызговиков",
    imgAlt: "photo Виталий Брызговиков",
    description: (
      <>
        Спортивный опыт: 15 лет <br />
        Тренерский опыт: 18 лет
      </>
    ),
  },
];

const Coaches = () => {
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      dragSpeed: 1,
      slides: {
        perView: 1,
        spacing: 2,
        origin: "center",
      },
      defaultAnimation: {
        duration: 800,
        easing: (t) => t * (2 - t),
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2,
            spacing: 2,
            origin: "center",
          },
        },
        "(min-width: 800px)": {
          slides: {
            perView: 2.5,
            spacing: 2,
            origin: "center",
          },
        },
        "(min-width: 1000px)": {
          slides: {
            perView: 2.5,
            origin: "center",
          },
        },
        "(min-width: 1300px)": {
          slides: {
            perView: 3,
            spacing: 2,
            origin: "center",
          },
        },
      },
    },
    [AutoplayPlugin]
  );

  return (
    <div
      className="flex flex-col items-center gap-12 py-16 components"
      id="coaches"
    >
      <h2 className="text-3xl font-extrabold">Наши тренеры</h2>

      {/* Карусель: видна только до lg */}
      <div className="block xl:hidden w-full px-10 flex">
        {/* <IconButton onClick={() => slider.current?.prev()} className="">
          <KeyboardArrowLeft />
        </IconButton> */}

        <div ref={sliderRef} className="keen-slider ">
          {coachData.map((coach, index) => (
            <Box
              key={index}
              className="keen-slider__slide flex justify-start"
              sx={{ pb: 4 }}
            >
              <CardCoach
                image={coach.image}
                name={coach.name}
                imgAlt={coach.imgAlt}
                description={coach.description}
              />
            </Box>
          ))}
        </div>
        {/* <IconButton onClick={() => slider.current?.next()} className="">
          <KeyboardArrowRight />
        </IconButton> */}
      </div>

      {/* Сетка: видна только на lg и выше */}
      <div className="hidden xl:grid grid-cols-4 w-full gap-6">
        {coachData.map((coach, index) => (
          <CardCoach
            key={index}
            image={coach.image}
            name={coach.name}
            imgAlt={coach.imgAlt}
            description={coach.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Coaches;
