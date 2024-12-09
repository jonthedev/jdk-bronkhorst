# Bronkhorst Hero Section

A modern, interactive hero section built with Next.js, featuring smooth video transitions, progress indicators, and responsive design.

## Features

- Full-screen video backgrounds with smooth transitions
- Auto-advancing slides with progress indicator
- Responsive design with mobile considerations
- Animated content transitions
- TypeScript for type safety
- Tailwind CSS for styling

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Video Player**: react-player
- **Animations**: Framer Motion

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

## Project Structure

```
src/
├── components/
│   ├── home/
│   │   └── hero/           # Hero section components
│   ├── layout/            # Layout components
│   └── ui/                # Reusable UI components
├── lib/
│   └── constants/         # Application constants
└── pages/                # Next.js pages
```

## Component Architecture

- `Hero`: Main container component
- `HeroContent`: Manages content layout and animations
- `VideoPlayer`: Handles video background playback
- `Navigation`: Controls for manual navigation
- `Container`: Reusable container component for consistent layout
