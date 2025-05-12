import React from "react";
import FAQBlock from "../components/FAQBlock";
import { useTranslation, Trans } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col items-center py-12 bg-gray-50 components"
      id="FAQ"
    >
      {/* Заголовок FAQ */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 md:mb-8 text-center">
        {t("faq.faq")}
      </h2>

      {/* Контейнер для вопросов */}
      <div className="w-full max-w-4xl px-4 space-y-4 md:space-y-4">
        <FAQBlock
          title={t("faq.1_question.question")}
          description={
            <Trans
              i18nKey="faq.1_question.answer"
              components={{
                ul: <ul className="pl-5 list-disc my-4" />,
                li: <li className="mb-2" />,
                strong: <strong className="text-teal-500" />,
              }}
            />
          }
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
        <FAQBlock
          title={t("faq.5_question.question")}
          description={
            <Trans
              i18nKey="faq.5_question.answer"
              components={{
                p: <p className="mb-4" />,

                // ul: <ul className="pl-5 list disc my-4" />,
                // li: <li className="mb-2" />,
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
