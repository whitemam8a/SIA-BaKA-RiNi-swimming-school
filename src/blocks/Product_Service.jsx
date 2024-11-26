import React from "react";

const Product_Service = () => {
  return (
    // <div className="flex flex-col items-center mx-5 div_custom" id="products">
    //   <strong className="strong-style">Наши Услуги</strong>
    //   <ol class="list-decimal text-2xl mx-5">
    //     <li>Занятия для малышей (от 1,5 до 2 лет)</li>
    //     <ul class="list-disc">
    //       <li>
    //         Занятия для самых маленьких, направленные на ранюю адаптацию в воде
    //         и развития моторики
    //       </li>
    //     </ul>
    //     <li>Групповые занятия для детей (от 2 до 5 лет)</li>
    //     <li>Индивидуальные занятия</li>
    //     <li>Подготовка к спортивному плаванию (от 5 лет)</li>
    //   </ol>
    // </div>
    <div className="flex flex-col items-center mx-5 py-16" id="products">
      <strong className="text-3xl font-extrabold mb-6">Наши Услуги</strong>
      <ol className="list-decimal text-xl text-gray-800 pl-5 space-y-4 max-w-4xl w-full">
        <li className="transition-colors">
          <span className="font-semibold">
            Занятия для малышей (от 1,5 до 2 лет), направленные на раннюю
            адаптацию в воде и развитие моторики
          </span>
        </li>
        <li className="transition-colors">
          <span className="font-semibold">
            Групповые занятия для детей (от 2 до 5 лет)
          </span>
        </li>
        <li className="transition-colors">
          <span className="font-semibold">Индивидуальные занятия</span>
        </li>
        <li className="transition-colors">
          <span className="font-semibold">
            Подготовка к спортивному плаванию (от 5 лет)
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Product_Service;
