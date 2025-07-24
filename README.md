# Teodor Vasilev - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a matrix-style terminal effect, multilingual support, and showcases Teodor's projects and skills.

## 🚀 Features

- **Modern Design**: Clean, professional design with matrix terminal effects
- **Multilingual Support**: English, Spanish, and French translations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Custom cursor, animations, and interactive components
- **Project Showcase**: Detailed project presentations with images and descriptions
- **Contact Integration**: Easy contact forms and social media links

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Internationalization**: react-i18next, i18next
- **Icons**: React Icons
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with profile
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills and expertise
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── FAQ.tsx         # FAQ section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Footer.tsx      # Footer section
│   │   ├── CustomCursor.tsx # Custom cursor effects
│   │   └── InteractiveBackground.tsx # Matrix terminal effect
│   ├── i18n/               # Internationalization
│   │   └── i18n.ts         # i18n configuration
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── locales/                # Translation files
│   ├── en/                 # English translations
│   ├── es/                 # Spanish translations
│   └── fr/                 # French translations
├── public/                 # Static assets
│   ├── static/media/       # Project images and assets
│   └── assets/pdf/         # PDF files
└── package.json            # Dependencies and scripts
```

## 🎯 Key Projects Showcased

1. **SpeechWave Transcriber** - C# desktop application with OpenAI Whisper
2. **ERP System** - Full-stack SaaS solution for educational institutions
3. **Marketplace Android Platform** - Complete marketplace platform
4. **SQL Injection Scanner** - Security vulnerability scanner in Python
5. **CS2 Snap Tap Emulator** - C# gaming tool for CS2
6. **Student Council Website** - Official website with automation
7. **FiveM Scripts Collection** - Lua scripts for gaming servers
8. **Bulk Email Sender** - Node.js email automation tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Multilingual Support

The portfolio supports three languages:

- **English** (en)
- **Spanish** (es)
- **French** (fr)

Translation files are located in the `locales/` directory. To add a new language:

1. Create a new directory in `locales/`
2. Add translation files following the existing structure
3. Update the i18n configuration in `src/i18n/i18n.ts`

## 🎨 Customization

### Colors and Themes

The color scheme is defined in `src/index.css` using CSS variables:

- `--background`: Main background color
- `--surface`: Secondary background color
- `--primary`: Primary accent color
- `--secondary`: Secondary accent color

### Adding New Projects

1. Add project images to `public/static/media/`
2. Update the projects array in `src/components/Projects.tsx`
3. Add translations for the project in the locale files

### Modifying Components

All components are modular and can be easily customized:

- Update styles in the component files
- Modify content through the translation files
- Add new sections by creating new components

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses:

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for styling

## 📄 License

This project is licensed under the MIT License.

## 👤 About Teodor Vasilev

Teodor Vasilev is a Junior Software Engineer and high school student from Sofia, Bulgaria. He specializes in:

- **Full-Stack Development**: JavaScript, PHP, React, Node.js
- **Desktop Applications**: C#, WPF, Material Design
- **Security & Automation**: Python, vulnerability scanning, automation tools
- **Game Development**: Lua scripting, FiveM server optimization
- **Database & Systems**: MySQL, system architecture, performance optimization

## 📞 Contact

- **Email**: teodor.d.vasilevred@gmail.com
- **LinkedIn**: [Teodor Vasilev](https://www.linkedin.com/in/teodor-vasilev-b7b44b284)
- **GitHub**: [T0shko](https://github.com/T0shko)

---

Built with ❤️ by Teodor Vasilev
