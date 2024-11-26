import React from "react";
import FAQBlock from "../components/FAQBlock";

const FAQ = () => {
  return (
    // <div className="flex flex-col items-center  mx-3 gap-3 div_custom" id="FAQ">
    //   <strong className="strong-style">Часто задаваемые вопросы</strong>
    //   <FAQBlock title={"О школе."} description={"SIA BaKa RiNi"} />
    //   <FAQBlock title={"Как проходят занятия?"} description={"SIA BaKa RiNi"} />
    //   <FAQBlock
    //     title={"Безопасность на тренировках"}
    //     description={"SIA BaKa RiNi"}
    //   />
    //   <FAQBlock
    //     title={"Могут ли родители присутсвовать на тренировках?"}
    //     description={"SIA BaKa RiNi"}
    //   />
    // </div>
    <div className="flex flex-col items-center px-6 py-12 bg-gray-50" id="FAQ">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
        Часто задаваемые вопросы
      </h2>
      <div className="w-full max-w-4xl space-y-4">
        <FAQBlock
          title={"О школе"}
          description={
            "Наша школа предлагает качественные тренировки для детей и взрослых."
          }
        />
        <FAQBlock
          title={"Как проходят занятия?"}
          description={
            "Тренировки проходят в формате групповых и индивидуальных занятий под руководством опытных тренеров."
          }
        />
        <FAQBlock
          title={"Безопасность на тренировках"}
          description={
            "Мы строго соблюдаем технику безопасности и проводим занятия с учетом уровня подготовки каждого ученика."
          }
        />
        <FAQBlock
          title={"Могут ли родители присутствовать на тренировках?"}
          description={
            "Да, родители могут наблюдать за тренировками, чтобы убедиться в качестве и безопасности занятий."
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
