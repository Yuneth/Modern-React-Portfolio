# React Portfolio - Software Engineer

## 📝 Overview
A modern, responsive portfolio website built with React.js featuring dark/light mode toggle, animated components, and a clean UI to showcase your skills, projects, and professional journey as a Software Engineering graduate.

## ✨ Features
- **Dark/Light Mode Toggle** - User preference theme switching
- **Animated UI Elements** - Framer Motion animations throughout
- **Responsive Design** - Fully mobile-friendly layout
- **Interactive Components** - Hover effects and smooth transitions
- **Project Showcase** - Detailed project cards with tech stack and links
- **Skills Visualization** - Progress bars for technical competencies
- **Timeline Section** - Professional/education journey visualization
- **Contact Form** - Functional contact section

## 🛠️ Technologies Used
- **Frontend**: React.js, Styled Components
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Theming**: Styled Components Theme Provider
- **Build Tool**: Vite/CRA

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Yuneth/Modern-React-Portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view in browser.

## 📂 Project Structure
```
portfolio/
├── public/               # Static files
│   ├── index.html
│   ├── favicon.ico
│   └── assets/           # Images, fonts, etc.
│
├── src/
│   ├── components/       # Reusable components
│   ├── constants/        # Theme and other constants
│   ├── styles/           # Global styles
│   ├── App.js            # Main App component
│   └── index.js          # Entry point
│
├── package.json
└── README.md
```

## 🎨 Customization
1. **Personal Information**:
   - Update `About.jsx` with your bio and timeline
   - Add your photo in `src/assets/images/`

2. **Projects**:
   - Edit `Projects.jsx` to showcase your work
   - Add project screenshots to `public/assets/projects/`

3. **Skills**:
   - Modify `Skills.jsx` to reflect your tech stack
   - Update skill proficiency levels (0-100)

4. **Theming**:
   - Adjust colors in `src/constants/theme.js`

5. **Resume**:
   - Replace `public/resume.pdf` with your CV

## 📜 License
MIT License - Feel free to use and modify for your own portfolio.