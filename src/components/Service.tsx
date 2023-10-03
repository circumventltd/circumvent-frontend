import React from "react";
import Servicetemplate from "./Servicetemplate";

type Props = {};

const servicesdata = [
  {
    color: "#011367",
    title: "Web Design and Development",
    subtitle: "Unleash the power of the web with Circumvent Ltd.",
    img: "/icon.png",
    footertext: "Let us help you navigate the digital space.",
    footersubtext:
      "Our customized IT solutions are designed to meet your unique needs and drive your business forward",
  },
  {
    color: "#0030FF",
    title: "Mobile App Development",
    subtitle: "Mobile apps tailored to your needs",
    img: "/phoneicon.png",
    footertext:
      "From iOS to Android, our mobile app development team creates intuitive and feature-rich applications that engage your users",
    footersubtext:
      "We handle everything from concept to deployment, ensuring your app reaches its full potential.",
  },
  {
    color: "#000933",
    title: "User Interface/User Experience Design",
    subtitle: "Crafting exceptional user interfaces",
    img: "/ux.png",
    footertext: "Let us help you navigate the digital space.",
    footersubtext:
      "Our customized IT solutions are designed to meet your unique needs and drive your business forward",
  },
  {
    color: "#011367",
    title: "Web Design and Development",
    subtitle: "Unleash the power of the web with Circumvent Ltd.",
    img: "/icon.png",
    footertext: "Let us help you navigate the digital space.",
    footersubtext:
      "Our customized IT solutions are designed to meet your unique needs and drive your business forward",
  },
];

const Service = (props: Props) => {
  return (
    <div className="max-w-screen  flex snap-mandatory snap-x overflow-hidden overflow-x-scroll">
      {servicesdata.map((item, index) => (
        <Servicetemplate
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          color={item.color}
          img={item.img}
          footertext={item.footertext}
          footersubtext={item.footersubtext}
        />
      ))}
    </div>
  );
};

export default Service;
