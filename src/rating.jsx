/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";

const RatingField = ({ currentRating, color }) => {
	const fullStars = Math.floor(currentRating); // Number of full stars
	const remainingRating = currentRating - fullStars; // Decimal part of the rating

	const renderStars = (count) => {
		const stars = [];
		for (let i = 0; i < count; i++) {
			stars.push(<FaStar key={i} className={`text-${color} w-5 h-5`} />);
		}
		return stars;
	};

	return (
		<div className="flex">
			{renderStars(fullStars)}
			{remainingRating > 0 && remainingRating < 1 && (
				<FaStar
					className={`text-${color} w-5 h-5`}
					style={{
						clipPath: `polygon(0 0, ${remainingRating * 100}% 0, ${
							remainingRating * 100
						}% 100%, 0 100%)`,
					}}
				/>
			)}
		</div>
	);
};

export default RatingField;
