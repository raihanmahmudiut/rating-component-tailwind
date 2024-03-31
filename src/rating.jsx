import React from "react";

const RatingField = ({ currentRating, className, icon }) => {
  const fullIconsCount = Math.floor(currentRating); // Number of full icons
  const remainingRating = currentRating - fullIconsCount; // Decimal part of the rating

  const renderIcons = (count) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(
        React.cloneElement(icon, {
          key: i,
          className: `${className}`,
        })
      );
    }
    return icons;
  };

  return (
    <div className="flex">
      {renderIcons(fullIconsCount)}
      {remainingRating > 0 && remainingRating < 1 && (
        React.cloneElement(icon, {
			className: `${className}`,
          style: {
            clipPath: `polygon(0 0, ${remainingRating * 100}% 0, ${
              remainingRating * 100
            }% 100%, 0 100%)`,
          },
        })
      )}
    </div>
  );
};

export default RatingField;
