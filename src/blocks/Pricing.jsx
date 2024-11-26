import React from "react";
import Card from "../components/Card";

const Pricing = () => {
  return (
    <div
      className="flex flex-col items-center gap-12 px-5 py-16 bg-gray-50"
      id="pricing"
    >
      <strong className="text-4xl font-extrabold ">Наши тарифы</strong>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <Card
          image={
            "https://fitnessacademy.com.ua/wp-content/uploads/2018/11/kak-nauchit-rebenka-plavat.jpg"
          }
          title={"Малыши"}
          description={"Возраст от 1,5 до 2 лет"}
          price={"100"}
        />
        <Card
          image={
            "https://static.tildacdn.com/tild6464-3261-4433-b062-383737656434/grudnichkovoe-i-dets.jpg"
          }
          title={"Групповые занятия"}
          description={"Группы до 7 человек, возраст с 4 лет"}
          price={"100"}
        />
        <Card
          image={
            "https://splash-school.com/wp-content/uploads/2021/10/img_1411.jpg"
          }
          title={"Индивидуальные занятия"}
          description={"Возраст любой"}
          price={"150"}
        />
        <Card
          image={
            "https://moysport.in/wp-content/uploads/2019/09/irfssqge-hy.jpg"
          }
          title={"Индивидуальные занятия"}
          description={"Возраст любой"}
          price={"200"}
        />
      </div>
    </div>
  );
};

export default Pricing;
