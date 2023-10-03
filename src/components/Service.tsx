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
    arrowcolor: "#002ae3",
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
    arrowcolor: "#98D6FF",
  },
  {
    color: "#000933",
    title: "User Interface/User Experience Design",
    titlecolor: "#98D6FF",
    subtitle: "Crafting exceptional user interfaces",
    img: "/ux.png",
    footertext: "Let us help you navigate the digital space.",
    footersubtext:
      "Our customized IT solutions are designed to meet your unique needs and drive your business forward",
    arrowcolor: "#002ae3",
  },
  {
    color: "#E6F5FF",
    title: "Cloud Computing",
    subtitle: "Unlock the power of cloud technology",
    titlecolor: "#0030FF",
    subcolor: "#000933",
    img: "/cloud.png",
    footercolor: "#000933",
    footertext: "Let us help you navigate the digital space.",
    footersubtext:
      "Our customized IT solutions are designed to meet your unique needs and drive your business forward",
    arrowcolor: "#0030FF",
  },
  {
    color: "#011367",
    title: "Network Services",
    subtitle: "Building reliable and scalable networks",
    titlecolor: "#98D6FF",
    img: "/network.png",
    footertext:
      "A strong network infrastructure is the backbone of your IT ecosystem",
    footersubtext:
      "Our network services ensure high availability, performance, and security, so your business can operate without interruption.",
    arrowcolor: "#0030FF",
  },
  {
    color: "#FAFAFA",
    title: "Digital Marketing",
    subtitle: "Drive growth with strategic digital marketing",
    subcolor: "#000933",
    titlecolor: "#0030FF",
    img: "/digital.png",
    footercolor: "#000933",
    footertext:
      "Our digital marketing experts craft data-driven strategies that boost your online visibility, drive traffic, and convert leads into customers",
    footersubtext:
      " Elevate your brand and achieve measurable results with us..",
    arrowcolor: "#0030FF",
  },
];

const Service = (props: Props) => {
  return (
    <div className="max-w-screen hiddenscroll  flex snap-mandatory snap-x  overflow-x-scroll">
      {servicesdata.map((item, index) => (
        <Servicetemplate
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          color={item.color}
          img={item.img}
          footertext={item.footertext}
          footersubtext={item.footersubtext}
          arrowcolor={item.arrowcolor}
          subcolor={item.subcolor}
          titlecolor={item.titlecolor}
          footercolor={item.footercolor}
        />
      ))}
    </div>
  );
};

export default Service;
