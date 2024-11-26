import React from "react";
import CardCoach from "../components/CardCoach";

const Coaches = () => {
  return (
    <div className="flex flex-col items-center gap-12 py-16 px-5" id="coaches">
      <strong className="text-3xl font-extrabold">Наши тренеры</strong>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-6">
        <CardCoach
          image={
            "https://img.lokobasket.com/mAg1Xji-teFTK3oG200PwKnOg4s=/https://lokobasket.com/wp-content/uploads/2020/09/igroki12.png"
          }
          name={"Даниил Середа"}
          description={
            <>
              Спортивный опыт: 5 лет <br />
              Тренерский опыт: 3 лет
            </>
          }
        />
        <CardCoach
          image={
            "https://olympicstyle.com.ua/wp-content/uploads/2020/08/IMG_0995.jpg"
          }
          name={"Виталий Пупкин"}
          description={
            <>
              Спортивный опыт: 25 лет <br />
              Тренерский опыт: 10 лет
            </>
          }
        />
        <CardCoach
          image={
            "https://sun9-86.userapi.com/impg/CufFVYXWpN1rjoSrW3T3DqZsuG5I0sjewfUPZQ/ISoFgF8Qw34.jpg?size=1440x2160&quality=95&sign=bf869a9a3af8e29bfac4dec5ac5de85b&type=album"
          }
          name={"Голикова Анна"}
          description={
            <>
              Спортивный опыт: 15 лет <br />
              Тренерский опыт: 18 лет
            </>
          }
        />
        <CardCoach
          image={
            "https://sun9-86.userapi.com/impg/CufFVYXWpN1rjoSrW3T3DqZsuG5I0sjewfUPZQ/ISoFgF8Qw34.jpg?size=1440x2160&quality=95&sign=bf869a9a3af8e29bfac4dec5ac5de85b&type=album"
          }
          name={"Голикова Анна"}
          description={
            <>
              Спортивный опыт: 15 лет <br />
              Тренерский опыт: 18 лет
            </>
          }
        />
      </div>
    </div>
  );
};

export default Coaches;
