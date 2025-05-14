import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Newton-Cart is guided by four principles:{" "}
          <strong>customer obsession</strong> rather than competitor focus,{" "}
          <strong>passion for invention</strong>,{" "}
          <strong>commitment to operational excellence</strong>, and{" "}
          <strong>long-term thinking</strong>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          We strive to be Earth’s most <strong>customer-centric company</strong>,
          Earth’s <strong>best employer</strong>, and Earth’s{" "}
          <strong>safest place to work</strong>. Our culture of innovation
          empowers us to deliver fantastic experiences across the globe.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
