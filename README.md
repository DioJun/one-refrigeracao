## **Preview**
[Flex Grid](one-refrigeracao.netlify.app)


# One Refrigeração - React Application

## **Project Overview**
This project is a React-based web application for **One Refrigeração**, a refrigeration services company. The application showcases the company's services, including installation, maintenance, and repair of refrigeration systems. It features a responsive design, smooth animations, and interactive components to enhance user experience.

---

## **Features**
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Smooth Animations**: Fade-in effects and scroll-triggered animations for a modern look.
- **Interactive Components**:
  - WhatsApp button for instant customer communication.
  - Scroll-to-section functionality for better navigation.
- **Dynamic Backgrounds**: Animated background images for visual appeal.
- **Social Media Integration**: Links to social media platforms (currently commented out).

---

## **Technologies Used**
- **Frontend**:
  - React (with TypeScript)
  - Chakra UI for styling and components
  - React Icons for icons
  - React Scroll for smooth scrolling
- **Styling**:
  - CSS for custom styles and animations
  - Google Fonts for typography
- **Testing**:
  - Jest and React Testing Library for unit testing
- **Performance Monitoring**:
  - Web Vitals for performance metrics

---

## **Project Structure**
```
one-refrigeracao/
├── public/                # Static assets and HTML template
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── Card/          # Card component for services
│   │   ├── Footer/        # Footer component
│   │   ├── Header/        # Header component
│   │   └── Layout/        # Layout component for page structure
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point for React
│   ├── reportWebVitals.ts # Performance monitoring
│   └── setupTests.ts      # Test setup
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/one-refrigeracao.git
   ```
2. Navigate to the project directory:
   ```bash
   cd one-refrigeracao
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`.

---

## **Available Scripts**
- **Start Development Server**:
  ```bash
  npm start
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Run Tests**:
  ```bash
  npm test
  ```
- **Eject from Create React App**:
  ```bash
  npm run eject
  ```

---

## **Customization**
- **Change WhatsApp Number**:
  Update the `numero` prop in the `WhatsAppButton` component located in `src/components/Footer/WhatsAppButton.tsx`.
- **Update Services**:
  Modify the content in the `Card` component located in `src/components/Card/Card.tsx`.
- **Change Background Images**:
  Replace the images in `src/components/Card/cardImg/` and update the `@keyframes animate` section in `src/components/Card/Card.css`.

---

## **Performance Monitoring**
The application includes Web Vitals for performance monitoring. To log performance metrics, pass a function to `reportWebVitals` in `src/index.tsx`:
```typescript
reportWebVitals(console.log);
```

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**
- **Create React App** for project scaffolding.
- **Chakra UI** for providing a robust component library.
- **React Icons** for easy icon integration.
- **React Scroll** for smooth scrolling functionality.

---

## **Contact**
For any inquiries or feedback, please contact the developer:
- **Developer**: Dionisio Jr.
- **Workana Profile**: [Dionisio Jr. on Workana](https://www.workana.com/freelancer/1c944ab88433a73d9ef59a489eb16ffc)

---

Enjoy using **One Refrigeração**! 🚀
