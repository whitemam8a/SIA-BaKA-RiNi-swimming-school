import React from "react";

const FirstScreen = () => {
  return (
    // <div className="flex flex-col items-start px-5 gap-5 py-[150px] first_screen div_custom">
    //   <h1 className="text-5xl">Первые шаги в мир плавания</h1>
    //   <h2>
    //     Запиши ребенка на первое занятие и раскрой его потенциал в воде с 50%
    //     скидкой
    //   </h2>
    //   <button className="btn bg-[#FF918F] hover:bg-[#FFBABA] border-none text-black mt-[100px]">
    //     Записаться на пробное занятие -50%
    //   </button>
    // </div>
    <div className="flex flex-col items-start px-5 gap-5 py-[170px] first_screen div_custom">
      <h1 className="text-5xl font-bold text-[#1F2937] leading-tight md:leading-snug">
        Первые шаги в мир плавания
      </h1>
      <h2 className="text-xl text-gray-700 mb-6">
        Запиши ребенка на первое занятие и раскрой его потенциал в воде с{" "}
        <strong className="strong-style ">50% скидкой</strong>
      </h2>
      <button className="btn bg-[#FF918F] hover:bg-[#FFBABA] border-none text-black font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-6">
        <a href="#FirstPrictice">Записаться на пробное занятие -50%</a>
      </button>
    </div>
  );
};

export default FirstScreen;
