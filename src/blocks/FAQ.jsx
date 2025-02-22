import React from "react";
import FAQBlock from "../components/FAQBlock";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

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
        {t("faq.faq")}
      </h2>
      <div className="w-full max-w-4xl space-y-4">
        <FAQBlock
          title={t("faq.1_question.question")}
          description={t("faq.1_question.answer")}
        />
        <FAQBlock
          title={t("faq.2_question.question")}
          description={t("faq.2_question.answer")}
        />
        <FAQBlock
          title={t("faq.3_question.question")}
          description={t("faq.3_question.answer")}
        />
        <FAQBlock
          title={t("faq.4_question.question")}
          description={t("faq.4_question.answer")}
        />
      </div>
    </div>
  );
};

export default FAQ;
