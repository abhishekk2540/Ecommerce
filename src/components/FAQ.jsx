"use client"; // If using App Router in Next.js 13+

import { useState } from "react";

const faqs = [
  {
    question: "What are Shaker Style Cabinets?",
    answer1:
      "Shaker style cabinets are units that are uniquely simple yet attractive. They feature recessed panel doors, light finishes and basic hardware.",
    answer2:
      "Shaker style cabinets mirror the furniture designed by the Shakers, who were extremely skilled craftsmen and carpenters. Shaker style cabinets have doors with recessed panels and minimal adornments. Many Shaker cabinets are built using hardwood, although some may use veneer panels in the doors. The style is complemented with natural finishes or light stains. Shaker style cabinets may even be painted with a distressed finish to give the units an appearance of age that enhances the style’s beauty and appeal. Due to the simplicity of the design, hardware is usually hidden. Wooden knobs or handles are ideal for Shaker style cabinets because they complement the simple features. In many cases, Mission cabinets are labeled as Shaker style cabinets. However, many Mission style cabinets feature arches and designs that are not true to the Shaker style, so the names are not necessarily interchangeable.",
  },
  {
    question: "What is a Recessed Panel Door?",
    answer1:
      "A recessed panel door is a cabinet door with a center panel that is slightly depressed. Recessed panel doors often include thinner wood than other types of cabinet doors.",
    answer2:
      "A recess panel door has a center panel that is slightly lower than the surrounding door frame. The panels are often made of alternative materials because they need to be thinner than the rest of the door. These doors are often built using solid wood, but the panels are veneer. This allows the material to be thin enough to sit inside the recessed area without changing the finished appearance of the wood. Recessed panel doors are available in many styles and finishes. They may incorporate arches or square angles, and glass or metal are sometimes used in place of wooden panels. Many recessed panel doors feature beveled trim that adds a touch of elegance to the door. Matching drawer fronts are often available so that all of the cabinet units have the same design.",
  },
  // ... rest of your data here
];

function HomepageFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-section bg-gray-50 pt-[40px] md:pt-[45px] xl:pt-[50px] pb-[45px] md:pb-[50px] xl:pb-[60px]">
      <div className="container m-auto px-4">

        {/* Heading */}
        <div className="grid text-center">
          <h2 className="text-orange text-xl md:text-2xl xl:text-3xl mb-2 lg:mb-3 font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-stgray text-[15px] md:text-[15px] xl:text-[16px] capitalize mb-4 lg:mb-6">
            Here are a list of the frequently asked questions when it comes to
            cabinets and cabinet terminology. You can also access our glossary
            on the website in our A-Z Guide for all terminology regarding
            kitchen cabinets.
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center pt-4 pb-2 text-left font-medium text-lg ${
                  openIndex === index ? "text-orange" : "text-gray-800"
                }`}
              >
                {faq.question}
              </button>

              {/* Answer styled like a "modal box" */}
              {openIndex === index && (
                <div className="bg-gray-50 rounded-lg shadow-lg p-6 mt-2 border border-gray-200">
                  {faq.answer1 && (
                    <p className="font-normal leading-relaxed px-0 py-2 text-gray-700 bg-gray-50 text-[15px] rounded">
                      {faq.answer1}
                    </p>
                  )}
                  {faq.answer2 && (
                    <p className="font-normal leading-relaxed px-0 py-2 text-gray-700 bg-gray-50 text-[15px] rounded mt-3">
                      {faq.answer2}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomepageFaq;
