# Home Assistant Custom Progress Card

This repository contains a custom progress card for Home Assistant, designed to display the brightness level of a light entity in a visually appealing progress bar format. This project aims to provide a customizable and easy-to-integrate solution for monitoring and controlling light brightness in Home Assistant.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Current Goals](#current-goals)
- [Future Goals](#future-goals)
- [Learning and Improvement Projects](#learning-and-improvement-projects)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Custom Progress Card is a Lovelace card for Home Assistant that visualizes the brightness of a specified light entity using a progress bar. It leverages the `lit-element` library for a lightweight and efficient implementation.

## Features

- **Dynamic Progress Bar**: Displays the current brightness level of a light entity.
- **Custom Styling**: Easily customizable via CSS to fit different themes and styles.
- **Responsive Design**: Adapts to various screen sizes and layouts.

## Installation

### Prerequisites

- Home Assistant instance with Lovelace UI enabled.
- Basic knowledge of YAML configuration in Home Assistant.

### Steps

1. **Clone the Repository**:
    ```bash
    cd /config/www
    git clone https://github.com/yourusername/homeassistant-custom-progress-card.git custom_cards
    ```

2. **Add Resource to `configuration.yaml`**:
    ```yaml
    lovelace:
      mode: yaml
      resources:
        - url: /local/custom_cards/custom-progress-card.js
          type: module
    ```

3. **Restart Home Assistant**:
    ```bash
    sudo systemctl restart home-assistant@homeassistant
    ```

4. **Add the Custom Card to Your Lovelace UI**:
    ```yaml
    title: Home
    views:
      - title: Example
        cards:
          - type: 'custom:custom-progress-card'
            entity: light.living_room_light_3
    ```

## Usage

### Example Configuration

```yaml
title: Home
views:
  - title: Example
    cards:
      - type: 'custom:custom-progress-card'
        entity: light.living_room_light_3
```

Ensure the entity ID corresponds to an existing light entity in your Home Assistant setup.

## Development

### Setup

1. **Install Node.js and npm**:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

2. **Install Dependencies**:
    ```bash
    npm install --save lit-element lit-html
    ```

3. **Run Development Server** (if applicable):
    ```bash
    npm start
    ```

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Current Goals

- **Stabilize Custom Progress Card**: Ensure the card works flawlessly with different light entities and configurations.
- **Improve Documentation**: Provide detailed usage examples and customization options.
- **Enhance Styling**: Make the progress bar styling easily customizable.

## Future Goals

- **Support for Other Entities**: Extend functionality to support other entity types such as sensors or switches.
- **Advanced Customization**: Allow users to customize more aspects of the card via configuration options.
- **Localization**: Add support for multiple languages.
- **Animations**: Implement smooth animations for progress bar transitions.
- **Accessibility Improvements**: Ensure the card is fully accessible to all users.

## Learning and Improvement Projects

1. **Custom Temperature Gauge**: Create a custom card that displays temperature readings from a sensor entity.
2. **Multi-Entity Status Card**: Develop a card that shows the status of multiple entities (e.g., multiple lights or sensors).
3. **Interactive Control Card**: Build a card that allows users to interact with and control entities (e.g., turn lights on/off, adjust brightness).
4. **Weather Summary Card**: Create a card that provides a summary of weather conditions using data from weather sensors.
5. **Energy Consumption Chart**: Develop a card that visualizes energy consumption data over time.
6. **Home Security Dashboard**: Create a dashboard view that integrates various security sensors and cameras.
7. **Custom Notifications**: Implement a system for displaying custom notifications based on entity states.

Each of these projects will help you learn more about Home Assistant, JavaScript, and web development while enhancing your smart home setup.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any section as needed to better match your project's specifics. This README should provide a solid foundation for both current and future development efforts, as well as a clear guide for anyone interested in contributing or learning from your project.