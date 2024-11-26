import React from "react";
import CardFeatures from "../components/CardFeatures";
import DollarIcon from "../assets/icons/DollarIcon";
import LifeRingIcon from "../assets/icons/LifeRingIcon";
import CupIcon from "../assets/icons/CupIcon";

const Features = () => {
  return (
    // <div className="flex flex-col items-center gap-6 div_custom" id="features">
    //   <strong className="strong-style">Почему Мы?</strong>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
    //     <CardFeatures
    //       logo={<CupIcon size={30} />}
    //       title={"Член союза по плаванию в Латвии"}
    //       description={
    //         "Присоединившись к нашему клубу Ваш ребенок сможет представлять нашу школу на соревнованиях по плаванию"
    //       }
    //     />
    //     <CardFeatures
    //       logo={<DollarIcon size={30} />}
    //       title={"Ваши занятия не пропадают"}
    //       description={
    //         "Мы ценим ваше время и хотим, чтобы ни одно занятие не пропадало даром из-за болезни. Если ваш ребенок неможет посетить занятие, мы предоставим бесплатную возможность посетить занятие в другое группе"
    //       }
    //     />
    //     <CardFeatures
    //       logo={<LifeRingIcon size={30} />}
    //       title={"Удобное время"}
    //       description={
    //         "Мы понимаем, что ваше расписание может быть загружено. Поэтому мы предлагаем гибкое расписание наших занятий"
    //       }
    //     />
    //   </div>
    // </div>
    <div
      className="flex flex-col items-center gap-12 py-16 px-5 bg-gray-50"
      id="features"
    >
      <strong className="text-3xl font-extrabold ">Почему Мы?</strong>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <CardFeatures
          logo={<CupIcon size={40} className="text-indigo-600" />}
          title={"Член союза по плаванию в Латвии"}
          description={
            "Присоединившись к нашему клубу, Ваш ребенок сможет представлять нашу школу на соревнованиях по плаванию."
          }
        />
        <CardFeatures
          logo={<DollarIcon size={40} className="text-green-600" />}
          title={"Ваши занятия не пропадают"}
          description={
            "Мы ценим ваше время и хотим, чтобы ни одно занятие не пропадало даром из-за болезни. Если ваш ребенок не может посетить занятие, мы предоставим бесплатную возможность посетить занятие в другой группе."
          }
        />
        <CardFeatures
          logo={<LifeRingIcon size={40} className="text-blue-600" />}
          title={"Удобное время"}
          description={
            "Мы понимаем, что ваше расписание может быть загружено. Поэтому мы предлагаем гибкое расписание наших занятий."
          }
        />
      </div>
    </div>
  );
};

export default Features;
