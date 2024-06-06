import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Crd() {
  const list = [
    {
      title: "call santer",
      img: "/images/call.jpg",
      price: "$5.50",
    },
    {
      title: "Camera man",
      img: "/images/camera.jpg",
      price: "$3.00",
    },
    {
      title: "Coke",
      img: "/images/coke.jpg",
      price: "$10.00",
    },
    {
      title: "marketing",
      img: "/images/market.jpg",
      price: "$5.30",
    },
    {
      title: "raception",
      img: "/images/recp.jpg",
      price: "$15.70",
    },
    {
      title: "enginear",
      img: "/images/eng.jpg",
      price: "$8.00",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 justify-center align-center">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0 ">
            <Image
              shadow="sm"
              radius="lg"
              width="250px"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}