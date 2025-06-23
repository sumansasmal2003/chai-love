Cha - A Tea Lover's React Project ☕
https://chaislove.netlify.app

A beautifully designed Bengali tea-themed landing page built with React and Tailwind CSS, showcasing different tea varieties, tea facts, and heartwarming tea stories.

Features ✨
Vibrant gradient background with glassmorphism effect cards

Responsive design that works on mobile, tablet, and desktop

Tea variety showcase with 9 different tea types

Tea preparation section with tips and techniques

Interesting tea facts with historical information

Heartwarming tea stories section with personal anecdotes

Bengali cultural elements throughout the design

Performance optimized with AVIF images

Installation 🛠️
Clone the repository:
git clone https://github.com/sumansasmal2003/chai-love
cd chai-love

Install dependencies:
npm install

Start the development server:
npm run dev

Open in your browser:
http://localhost:3000

Technologies Used 💻
React - Frontend library

Tailwind CSS - Styling framework

Vite - Build tool and development server

React Icons - Icon library

Framer Motion - Animation library (optional)

Headless UI - Accessible UI components

Project Structure 📁
src/
├── assets/             # Image assets
├── components/         # Reusable components
│   ├── ChaCard.jsx     # Tea card component
│   ├── ChaGolpo.jsx    # Tea story component
│   └── ...
├── pages/              # Page components
│   ├── MainPage.jsx    # Main landing page
│   └── ...
├── App.jsx             # Main application component
└── index.js            # Entry point

Customization 🎨
You can easily customize the project:

Change colors: Modify the gradient in MainPage.jsx:
className='flex flex-col bg-gradient-to-r from-green-400 via-amber-500 to-blue-400'

Add new tea types: Create a new ChaCard in the grid:
<ChaCard
  image="new-tea-image.jpg"
  mainText="নতুন চা"
  subText="এই চা সম্পর্কে বর্ণনা"
/>

Add more stories: Extend the ChaGolpo section:
<ChaGolpo
  image="new-story.jpg"
  heading="নতুন গল্প"
  story="আপনার নতুন চা গল্প এখানে লিখুন"
/>

Contributing 🤝
Contributions are welcome! Please follow these steps:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Acknowledgements 🙏
Tea images from Unsplash and Pexels

Color palette inspired by Bangladeshi tea gardens

Bengali tea culture references

Made with ❤️ and lots of ☕ | © 2025 ChaIsLove
