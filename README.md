# Advice Generator App

## Overview

The Advice Generator App is a simple web application that fetches random pieces of advice from an external API and displays them to the user. The app features a clean and modern design, utilizing HTML, CSS, and JavaScript, along with the Manrope font for enhanced typography.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)

## Features

- Fetches random advice from the [Adviceslip API](https://api.adviceslip.com/advice).
- Responsive design with mobile and desktop views.
- Simple and intuitive user interface.
- Dynamic updates of advice on button click.

## Technologies Used

- **HTML**: For structuring the content of the app.
- **CSS**: For styling and layout. The app includes custom styles and media queries for responsiveness.
- **JavaScript**: To fetch data from the API and update the DOM.
- **API**: Utilizes the Adviceslip API for fetching advice.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/advice-generator-app.git
Navigate to the project directory:
bash
Copy code
cd advice-generator-app
Open index.html in your preferred web browser to view the application.
Usage
Click the dice button to generate a new piece of advice.
The advice ID and text will update dynamically with each click.
How It Works
HTML Structure: The HTML file contains the main layout, including the advice display area and the button for generating advice.

Styling: The CSS file defines styles for various elements, including background colors, typography, and button styles. It also includes media queries for responsiveness.

JavaScript Functionality:

The script selects DOM elements and assigns them to variables.
It defines a function fetchAdvice that uses the Fetch API to get advice data from https://api.adviceslip.com/advice.
On successful fetch, it updates the advice ID and text in the DOM.
An event listener is added to the dice button, triggering the fetchAdvice function on click.
Future Improvements
Add error handling for different response status codes.
Implement a loading state while fetching advice.
Store previously generated advice for reference.
Enhance styling with additional animations and transitions.
