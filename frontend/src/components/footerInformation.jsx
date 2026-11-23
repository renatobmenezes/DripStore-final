import React from "react";

const FooterInformation = ({ title, informations }) => {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 flex flex-col">
      <h4 className="font-semibold text-base md:text-lg mb-4 md:mb-7">
        {title}
      </h4>
      {informations.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default FooterInformation;