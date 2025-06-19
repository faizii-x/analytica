import React from "react";

const Features = () => {
  const features = [
    {
      title: "Predictive Analytics",
      description:
        "Leverage AI to forecast trends and make smarter business decisions.",
      icon: "📊",
    },
    {
      title: "Data Visualization",
      description: "Turn complex data into intuitive, interactive dashboards.",
      icon: "📈",
    },
    {
      title: "Real-time Insights",
      description: "Access live data instantly and stay in control anytime.",
      icon: "⏱️",
    },
    {
      title: "Custom Reporting",
      description: "Tailored reports aligned with your business KPIs.",
      icon: "📑",
    },
  ];

  return (
    <>
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Features of{" "}
            <span className="text-blue-600">Analytica Data</span>
          </h2>
          <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
            Powerful tools to unlock business insights with ease.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
