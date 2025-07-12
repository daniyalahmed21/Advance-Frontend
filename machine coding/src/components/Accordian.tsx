import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const accordionData = [
  {
    title: "What is your return policy?",
    content:
      "You can return any item within 30 days of purchase as long as it's in original condition and packaging.",
  },
  {
    title: "How long does shipping take?",
    content:
      "Shipping typically takes 3-5 business days depending on your location.",
  },
  {
    title: "Do you offer international shipping?",
    content:
      "Yes, we offer international shipping to most countries. Rates are calculated at checkout.",
  },
  {
    title: "Can I track my order?",
    content:
      "Absolutely! After placing your order, you'll receive a tracking link via email.",
  },
];

function Accordian() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-10 space-y-2">
      {accordionData.map((item, index) => (
        <div className="rounded-md" key={index}>
          <div
            onClick={() => handleToggle(index)}
            className="bg-blue-300 p-4 flex justify-between items-center cursor-pointer"
          >
            <h1 className="font-medium">{item.title}</h1>
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </div>
          {openIndex === index && (
            <div className="bg-blue-200 p-4">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
