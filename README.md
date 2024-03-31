## About

The Rating Component is a lightweight and customizable React component designed to facilitate the display of ratings using stars. It is built with simplicity and flexibility in mind, allowing developers to easily integrate it into their React projects and customize its appearance to suit their needs.

Key features of the Rating Component include:

```bash
- Display ratings using stars with customizable colors.
- Support for displaying fractional ratings.
- Easy integration with TailwindCSS for styling.

```

Whether you're building an e-commerce website, a review platform, or any application that requires user feedback, the Rating Component offers a convenient solution for visually representing ratings in a user-friendly manner.

Feel free to use and customize the Rating Component in your projects to enhance user experience and improve the presentation of ratings.

## Installation

To use this component in your React project, follow these steps:

1. Install the necessary dependencies:

```bash
   npm install -D tailwindcss postcss autoprefixer react-icons
```

Copy the RatingField.js file into your project.

Import the RatingField component into your project and use it as needed.

## Usage

```javascript
import React from "react";
import { RatingField } from "./RatingField";

function MyComponent() {
	return (
		<div>
			<h1>My Component</h1>
			<RatingField currentRating={4.5} color="yellow.400" />
		</div>
	);
}

export default MyComponent;
```

## Props

currentRating: The current rating to display.
color: The color of the stars.
