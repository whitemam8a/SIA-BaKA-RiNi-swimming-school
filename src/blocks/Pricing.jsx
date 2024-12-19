import React from "react";
import Card from "../components/Card";

const Pricing = () => {
  return (
    <div
      className="flex flex-col items-center gap-12 px-5 py-16 bg-gray-50"
      id="pricing"
    >
      <h2 className="text-4xl font-extrabold ">Наши тарифы</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          image={
            "https://fitnessacademy.com.ua/wp-content/uploads/2018/11/kak-nauchit-rebenka-plavat.jpg"
          }
          imgAlt={"3 babies swimming in the pool"}
          title={"Малыши"}
          description={"Возраст от 1,5 до 2 лет"}
          price={"100"}
        />
        <Card
          image={
            "https://static.tildacdn.com/tild6464-3261-4433-b062-383737656434/grudnichkovoe-i-dets.jpg"
          }
          imgAlt={"4 kids looking at the camera at the beachside bessin."}
          title={"Групповые занятия"}
          description={"Группы до 7 человек, возраст с 4 лет"}
          price={"100"}
        />
        <Card
          image={
            "https://splash-school.com/wp-content/uploads/2021/10/img_1411.jpg"
          }
          imgAlt={"the coach is explaining a task to a child by the pool "}
          title={"Индивидуальные занятия"}
          description={"Возраст любой"}
          price={"150"}
        />
        <Card
          image={
            "https://moysport.in/wp-content/uploads/2019/09/irfssqge-hy.jpg"
          }
          imgAlt={
            "coach explains swimming technique to a teenager by the pool "
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
