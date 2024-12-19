import React from "react";

const Product_Service = () => {
  return (
    <div className="flex flex-col items-center mx-5 py-16" id="products">
      <strong className="text-3xl font-extrabold mb-6">Наши Услуги</strong>
      <ol className="list-decimal text-xl text-gray-800 pl-5 space-y-4 max-w-4xl w-full">
        <li className="transition-colors">
          <span className="font-semibold">
            Занятия для малышей (от 1,5 до 2 лет)
          </span>{" "}
          – уроки, созданные для самых маленьких, помогают ранней адаптации к
          воде, развивают координацию и моторику, а также дарят радость от
          первых погружений.
        </li>
        <li className="transition-colors">
          <span className="font-semibold">
            Групповые занятия для детей (от 2 до 5 лет)
          </span>{" "}
          – веселые и увлекательные тренировки в небольшой группе, где дети
          учатся основам плавания, укрепляют здоровье и находят новых друзей.
        </li>
        <li className="transition-colors">
          <span className="font-semibold">Индивидуальные занятия</span> –
          персональный подход к каждому ребенку, позволяющий быстрее освоить
          технику плавания и добиться уверенности в воде.
        </li>
        <li className="transition-colors">
          <span className="font-semibold">
            Подготовка к спортивному плаванию (от 5 лет)
          </span>{" "}
          – тренировки для тех, кто хочет достичь высоких результатов. Уроки
          включают изучение техники спортивных стилей плавания и развитие
          выносливости.
        </li>
      </ol>
    </div>
  );
};

export default Product_Service;
