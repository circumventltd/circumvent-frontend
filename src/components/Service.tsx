import React, { useCallback, useEffect, useRef, useState } from "react";
import Servicetemplate from "./Servicetemplate";
import Servicetemplatemobile from "./Servicetemplatemobile";
import { motion } from "framer-motion";

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
  const parentRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidthSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let slidercomponent;

  switch (index) {
    case 1:
      slidercomponent = (
        <Servicetemplate
          title={servicesdata[0].title}
          subtitle={servicesdata[0].subtitle}
          color={servicesdata[0].color}
          img={servicesdata[0].img}
          footertext={servicesdata[0].footertext}
          footersubtext={servicesdata[0].footersubtext}
          arrowcolor={servicesdata[0].arrowcolor}
          subcolor={servicesdata[0].subcolor}
          titlecolor={servicesdata[0].titlecolor}
          footercolor={servicesdata[0].footercolor}
        />
      );
      break;
    case 2:
      slidercomponent = (
        <Servicetemplate
          title={servicesdata[1].title}
          subtitle={servicesdata[1].subtitle}
          color={servicesdata[1].color}
          img={servicesdata[1].img}
          footertext={servicesdata[1].footertext}
          footersubtext={servicesdata[1].footersubtext}
          arrowcolor={servicesdata[1].arrowcolor}
          subcolor={servicesdata[1].subcolor}
          titlecolor={servicesdata[1].titlecolor}
          footercolor={servicesdata[1].footercolor}
        />
      );
      break;
    case 3:
      slidercomponent = (
        <Servicetemplate
          title={servicesdata[2].title}
          subtitle={servicesdata[2].subtitle}
          color={servicesdata[2].color}
          img={servicesdata[2].img}
          footertext={servicesdata[2].footertext}
          footersubtext={servicesdata[2].footersubtext}
          arrowcolor={servicesdata[2].arrowcolor}
          subcolor={servicesdata[2].subcolor}
          titlecolor={servicesdata[2].titlecolor}
          footercolor={servicesdata[2].footercolor}
        />
      );
      break;
    case 4:
      slidercomponent = (
        <Servicetemplate
          title={servicesdata[3].title}
          subtitle={servicesdata[3].subtitle}
          color={servicesdata[3].color}
          img={servicesdata[3].img}
          footertext={servicesdata[3].footertext}
          footersubtext={servicesdata[3].footersubtext}
          arrowcolor={servicesdata[3].arrowcolor}
          subcolor={servicesdata[3].subcolor}
          titlecolor={servicesdata[3].titlecolor}
          footercolor={servicesdata[3].footercolor}
        />
      );
      break;
    case 5:
      slidercomponent = (
        <Servicetemplate
          title={servicesdata[4].title}
          subtitle={servicesdata[4].subtitle}
          color={servicesdata[4].color}
          img={servicesdata[4].img}
          footertext={servicesdata[4].footertext}
          footersubtext={servicesdata[4].footersubtext}
          arrowcolor={servicesdata[4].arrowcolor}
          subcolor={servicesdata[4].subcolor}
          titlecolor={servicesdata[4].titlecolor}
          footercolor={servicesdata[4].footercolor}
        />
      );
      break;
    case 6:
      slidercomponent = (
        <Servicetemplate
          title={servicesdata[5].title}
          subtitle={servicesdata[5].subtitle}
          color={servicesdata[5].color}
          img={servicesdata[5].img}
          footertext={servicesdata[5].footertext}
          footersubtext={servicesdata[5].footersubtext}
          arrowcolor={servicesdata[5].arrowcolor}
          subcolor={servicesdata[5].subcolor}
          titlecolor={servicesdata[5].titlecolor}
          footercolor={servicesdata[5].footercolor}
        />
      );
      break;
    default:
      slidercomponent = null;
      break;
  }

  React.useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current) {
        const parentRect = parentRef.current.getBoundingClientRect();
        const isSticky = parentRect.top <= 0;
        const percent0 = parentRect.height + 0 * parentRect.height;
        const percent20 = parentRect.height + 0.2 * parentRect.height;
        const percent40 = parentRect.height + 0.4 * parentRect.height;
        const percent55 = parentRect.height + 0.55 * parentRect.height;
        const percent70 = parentRect.height + 0.7 * parentRect.height;
        const percent85 = parentRect.height + 0.85 * parentRect.height;
        const percent100 = parentRect.height + 1 * parentRect.height;
        const scrollposition = window.scrollY;

        if (isSticky) {
          if (scrollposition >= percent0 && scrollposition < percent20) {
            setIndex(1);
          }
          if (scrollposition >= percent20 && scrollposition < percent40) {
            setIndex(2);
          }
          if (scrollposition >= percent40 && scrollposition < percent55) {
            setIndex(3);
          }
          if (scrollposition >= percent55 && scrollposition < percent70) {
            setIndex(4);
          }
          if (scrollposition >= percent70 && scrollposition < percent85) {
            setIndex(5);
          }
          if (scrollposition >= percent85 && scrollposition < percent100) {
            setIndex(6);
          }

          const scrollEndPosition = parentRect.top + parentRect.height;
          if (scrollposition >= scrollEndPosition * 2) {
            parentRef.current.classList.remove("sticky");
          } else {
            parentRef.current.classList.add("sticky");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
  return (
    <>
      {widthSize <= 640 ? (
        <div className="flex flex-col max-w-screen">
          {servicesdata.map((item, index) => (
            <Servicetemplatemobile
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
      ) : (
        <div
          ref={parentRef}
          className="scrollbar-h-[6px] scrollbar scrollbar-thumb-slate-300 bg-[#000933] max-w-screen h-[100vh] flex snap-mandatory sticky snap-x z-[999] top-0  overflow-hidden"
        >
          <motion.div>{slidercomponent}</motion.div>
        </div>
      )}
    </>
  );
};

export default Service;
