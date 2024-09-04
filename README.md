
# React Configurator Shoe

This project is a 3D model configurator application built with **React** and **React Three Fiber**. The app allows users to interact with and customize 3D models of shoes, cars, and bikes. Users can rotate, zoom, and change the color of different parts of the models, with changes reflected in real-time.

## Link to the App

You can view and interact with the app here: [React Configurator Shoe](https://iheathers.github.io/react-configurator-shoe/).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Model Licensing](#model-licensing)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **3D Model Viewer**: Users can view and interact with 3D models using mouse controls (rotate, zoom, and pan).
- **Customization**: Ability to change the colors of different parts of the models such as car paint, rims, tires, and shoes using an intuitive color picker.
- **Real-time Updates**: Changes in the color are instantly reflected in the model.
- **Preloaded Models**: Multiple 3D models like cars, bikes, and shoes are included, each with detailed textures and materials.
- **Lighting and Environment**: Custom lighting setup enhances the user experience.

## Technologies Used

- **React**: JavaScript library for building the UI.
- **React Three Fiber**: Renderer for Three.js in React, enabling 3D graphics.
- **@react-three/drei**: Helper library for Three.js, used to load models and configure environments.
- **Valtio**: For managing the state of the customization options (color changes).
- **react-colorful**: For providing the interactive color picker.
- **Web Vitals**: For performance measurement and analytics.

## Project Structure

```plaintext
.
├── README.md
├── Scene.js                # 3D model scene (motorcycle)
├── Shoe-draco.js           # 3D model for shoe
├── package-lock.json
├── package.json
├── public
│   ├── bike-poly           # Assets and textures for the motorcycle model
│   ├── car                 # Assets and textures for the car model
│   ├── chopper             # Assets and textures for the chopper model
│   ├── cyberpunk_bike      # Assets and textures for the cyberpunk bike
│   ├── car.glb             # 3D model for car
│   ├── shoe-draco.glb      # 3D model for shoe
│   └── sky.hdr             # Environment HDR for lighting
└── src
    ├── App.js              # Main application file
    ├── components
    │   └── ColorPicker.js  # Color picker component
    ├── css                 # CSS files for styling
    ├── index.js            # Entry point for React
    ├── objects             # 3D models of bike, car, and shoe
    ├── reportWebVitals.js  # Performance monitoring
    ├── setupTests.js       # Setup for testing with Jest
    └── states              # State management for model color changes
```

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/iheathers/react-configurator-shoe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-configurator-shoe
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

After starting the development server, the app will be available at `http://localhost:3000`. You can interact with the 3D models by:

- Using the mouse to rotate, zoom, and pan the models.
- Changing the color of specific parts of the models using the color picker on the left side of the screen.

## Model Licensing

- **Datsun 280Z** car model is sourced from [Sketchfab](https://sketchfab.com/3d-models/free-datsun-280z-0789ab2ece9442de94b3c41595e0ecbd) and licensed under [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/).
- **Shoe model** and other 3D models were imported using GLTF and auto-generated by `gltfjsx`.

## Future Enhancements

- Add more 3D models for customization.
- Enable texture customization and add more materials.
- Optimize model loading time and performance.

## License

This project is licensed under the MIT License.
