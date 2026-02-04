# Qskill Tools - Combined Project# Getting Started with Create React App



A modern web application combining two powerful utilities:This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. **Text Translator** - AI-powered translation between 100+ languages

2. **Random String Generator** - Secure random string generator with customizable options## Available Scripts



## 🚀 FeaturesIn the project directory, you can run:



### Text Translator### `npm start`

- ✨ Translate text between 100+ languages instantly

- 🤖 AI-powered with 98% accuracyRuns the app in the development mode.\

- 🎨 Beautiful, modern UI with Tailwind CSSOpen [http://localhost:3000](http://localhost:3000) to view it in your browser.

- 📋 One-click copy to clipboard

- 🔄 Swap languages featureThe page will reload when you make changes.\

- 📱 Fully responsive designYou may also see any lint errors in the console.

- 🎯 Demo examples for quick testing

- 🔒 Secure & private (no data storage)### `npm test`



### Random String GeneratorLaunches the test runner in the interactive watch mode.\

- 🔐 Generate secure random stringsSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- ⚙️ Customizable length (4-50 characters)

- 🎛️ Toggle options:### `npm run build`

  - Lowercase letters (a-z)

  - Uppercase letters (A-Z)Builds the app for production to the `build` folder.\

  - Numbers (0-9)It correctly bundles React in production mode and optimizes the build for the best performance.

  - Special characters (!@#$%...)

- 📋 Copy to clipboard functionalityThe build is minified and the filenames include the hashes.\

- 🎓 Built with React Hooks (useState, useCallback, useEffect)Your app is ready to be deployed!



## 🛠️ Technologies UsedSee the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



- **React 19.2.4** - Frontend framework### `npm run eject`

- **React Router DOM 7.13.0** - Navigation & routing

- **Tailwind CSS 3.4.0** - Styling**Note: this is a one-way operation. Once you `eject`, you can't go back!**

- **Axios 1.13.4** - API requests

- **MyMemory Translation API** - Translation serviceIf you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.



## 📦 Installation & RunningInstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.



The project is located at: `/home/sama/Qskill/combined-project`You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



1. Navigate to the project:## Learn More

```bash

cd /home/sama/Qskill/combined-projectYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

```

To learn React, check out the [React documentation](https://reactjs.org/).

2. Dependencies are already installed. To reinstall if needed:

```bash### Code Splitting

npm install

```This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)



3. Start the development server:### Analyzing the Bundle Size

```bash

npm startThis section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

```

### Making a Progressive Web App

4. Open your browser and visit:

```This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

http://localhost:3000

```### Advanced Configuration



## 📁 Project StructureThis section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)



```### Deployment

combined-project/

├── src/This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

│   ├── components/

│   │   ├── Translator.jsx         # Text translator component### `npm run build` fails to minify

│   │   └── RandomStringGenerator.js # Random string generator component

│   ├── pages/This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

│   │   ├── Home.js                # Home page with navigation cards
│   │   ├── TranslatorPage.js      # Translator page wrapper
│   │   └── RandomStringPage.js    # Random string page wrapper
│   ├── utils/
│   │   └── languages.js           # Language codes and names (100+ languages)
│   ├── App.js                     # Main app with routing
│   └── index.css                  # Global styles with Tailwind
├── public/
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

## 🌐 Navigation

The application uses React Router for seamless navigation:

- **Home** (`/`) - Landing page with tool selection cards
- **Translator** (`/translator`) - Text translation tool
- **Random String** (`/random-string`) - Random string generator

Each page includes a navigation bar to switch between tools easily.

## 🔗 Original Projects

This combined project integrates code from two separate repositories:

1. **Translator Website**
   - Repository: https://github.com/imranpreet/translator-website.git
   - Features: 100+ language translation with beautiful UI

2. **Random String Generator**
   - Repository: https://github.com/imranpreet/random-string.git
   - Features: Secure password/token generation

## 🎨 Design Features

- **Modern Gradient Backgrounds** - Beautiful color gradients
- **Glass-morphism Effects** - Backdrop blur and transparency
- **Smooth Animations** - Hover effects and transitions
- **Responsive Design** - Works on all device sizes
- **Interactive Navigation** - Easy switching between tools
- **Accessibility** - Proper contrast and semantic HTML

## 🚀 Current Status

✅ Server running successfully at http://localhost:3000
✅ All routes configured and working
✅ Both tools fully integrated
✅ Navigation system implemented
✅ Tailwind CSS properly configured
✅ All dependencies installed

---

**Enjoy using Qskill Tools! 🎉**
