# Slyther - Modern Snake Game

A modern, responsive take on the classic Snake game built with React, TypeScript, and Firebase. Features real-time leaderboard integration, smooth gameplay, and mobile-friendly controls.

![Dribbble_Shot (4)](https://github.com/user-attachments/assets/8d31185f-9f59-4d02-9b02-9339d5b4af1b)

## ✨ Features

- **🎮 Classic Gameplay**: Smooth, responsive Snake game mechanics
- **📱 Mobile Responsive**: Touch controls for mobile devices
- **🏆 Real-time Leaderboard**: Firebase-powered global leaderboard
- **⌨️ Multiple Control Options**: Arrow keys, WASD, and touch controls
- **🎨 Modern UI**: Beautiful gradient backgrounds and smooth animations
- **⚡ Fast Performance**: Optimized React components with TypeScript
- **🔄 Auto-save Scores**: Automatic leaderboard management with cleanup
- **⏱️ Countdown Timer**: 3-second countdown before game starts

## 🚀 Live Demo

[Play the game here](https://slyther.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4.x
- **Backend**: Firebase Firestore
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rifqi011/slyther.git
   cd slyther
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Firestore Database
   - Create a `.env.local` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## 🎮 How to Play

- **Desktop**: Use arrow keys or WASD to control the snake
- **Mobile**: Use the on-screen directional buttons
- **Objective**: Eat the food (red squares) to grow and increase your score
- **Avoid**: Hitting walls or your own tail
- **High Scores**: Enter your name to save high scores to the global leaderboard

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/         # Shared components
│   ├── game/           # Game-specific components
│   ├── layout/         # Layout components
│   └── ui/             # UI components
├── hooks/              # Custom React hooks
│   ├── useGameState.ts
│   ├── useFirestoreLeaderboard.ts
│   └── useKeyboardControls.ts
├── lib/                # Utility libraries
│   ├── firebase.ts
│   └── gameUtils.ts
├── types/              # TypeScript type definitions
├── constants/          # Game constants
└── App.tsx             # Main app component
```

## 🔧 Key Features Implementation

### Game State Management
- Custom hook `useGameState` manages snake position, food, direction, and score
- Collision detection for walls and self-collision
- Dynamic food generation avoiding snake body

### Real-time Leaderboard
- Firebase Firestore integration with real-time updates
- Automatic cleanup of excess entries (maintains top 10)
- Score validation and high score detection

### Responsive Controls
- Keyboard support (Arrow keys + WASD)
- Mobile touch controls
- Direction change prevention (can't reverse into itself)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically

### Manual Build
```bash
npm run build
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the classic Nokia Snake game
- Built with modern web technologies
- Firebase for reliable backend services
- Tailwind CSS for beautiful styling

## 📧 Contact

Rifqi Banu Safingi - [@email](mailto:rifqibanusafingi11@gmail.com) - rifqibanusafingi11@gmail.com

Project Link: [https://github.com/011/slyther](https://github.com/011/slyther)

---

⭐ If you enjoyed this project, please consider giving it a star on GitHub!
