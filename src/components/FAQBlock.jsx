import React from "react";

const FAQBlock = ({ title, description }) => {
  return (
    <details className="collapse collapse-arrow bg-slate-200">
      <summary className="collapse-title text-xl font-medium">{title}</summary>
      <div className="collapse-content">
        <p>{description}</p>
      </div>
    </details>
  );
};

export default FAQBlock;
