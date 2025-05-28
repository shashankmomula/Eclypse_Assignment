# Eclypse - Modern Fashion E-commerce Platform


A modern, responsive e-commerce platform built with React, TypeScript, and Node.js, featuring a sleek design and seamless shopping experience.

## 🌟 Features

- **AI-Powered Features**
  - Outfit generation using OpenAI
  - Smart product recommendations
  - Accessory suggestions

- **Modern UI/UX Design**
  - Responsive layout that works on all devices
  - Dark theme with elegant aesthetics
  - Interactive product cards with hover effects

- **Product Management**
  - Featured products showcase
  - Category-based browsing
  - Detailed product views

- **Shopping Experience**
  - Shopping cart functionality
  - Local storage for cart persistence
  - Checkout process


## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Router
- Heroicons
- Vite

### Backend
- Node.js
- Express
- TypeScript
- OpenAI API
- CORS

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eclypse.git
cd eclypse
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

4. Create a `.env` file in the server directory:
```env
PORT=3000
NODE_ENV=development
OPENAI_API_KEY=your_openai_api_key
```

### Running the Application

1. Start the server:
```bash
cd server
npm run dev
```

2. Start the client:
```bash
cd client
npm run dev
```

The application will be available at: https://eclypse-assignment.netlify.app/

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices
- Tablets
- Laptops
- Desktop screens



## 🔒 Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
PORT=3000
NODE_ENV=development
OPENAI_API_KEY=your_openai_api_key
```

## 📦 Project Structure

```
eclypse/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   ├── index.html
│   └── package.json
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── data/
│   │   ├── routes/
│   │   └── index.ts
│   └── package.json
└── README.md
```

## 🚀 Deployment

The application can be deployed to platforms like:
- Render
- Netlify

### Render Deployment
1. Create a new Web Service
2. Connect your GitHub repository
3. Set the build command: `cd server && npm install && npm run build`
4. Set the start command: `cd server && npm start`
5. Add environment variables

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👥 Authors

M. Shashank

## 🙏 Acknowledgments

- OpenAI for AI integration
- Pexels for stock images
- Heroicons for icons
- Tailwind CSS for styling
