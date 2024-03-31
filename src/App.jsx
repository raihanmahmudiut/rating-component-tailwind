import React, { useState } from "react";
import RatingField from "./rating";
import { FaStar, FaHeart } from "react-icons/fa";

function App() {
	const [currentRating, setCurrentRating] = useState(0);
	const [inputRating, setInputRating] = useState(""); // State for input rating

	const handleRatingChange = (event) => {
		setInputRating(event.target.value); // Update input rating
		setCurrentRating(parseFloat(event.target.value)); // Update current rating
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="w-96">
				<div className="flex items-center mb-4">
					<p className="mr-4 text-lg font-semibold">Ratings</p>

					<div className="flex flex-col gap-3 ">
						<RatingField
							currentRating={currentRating}
							className="text-yellow-400 w-5 h-5"
							icon={<FaStar />}
						/>
						<RatingField
							currentRating={currentRating}
							className="text-red-400 w-5 h-5"
							icon={<FaHeart />}
						/>
					</div>
				</div>
				<div className="mt-4">
					<label className="block mb-2" htmlFor="ratingInput">
						Enter current rating
					</label>
					<input
						id="ratingInput"
						type="number"
						placeholder="Enter current rating"
						value={inputRating}
						onChange={handleRatingChange}
						className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
