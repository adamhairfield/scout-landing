# Scout Landing Page

A React-based landing page for Scout's custom team gear service.

## Features

- Modern, responsive design matching the Scout brand
- Hero section with compelling messaging and statistics
- Contact form that sends inquiries to banners@teamscout.co
- Mobile-optimized layout
- Ready for Netlify deployment

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

This project is configured for easy deployment on Netlify:

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify, or connect your Git repository for automatic deployments.

The `netlify.toml` file is already configured with the correct build settings.

## Project Structure

```
src/
  components/
    Header.js          # Navigation header with Scout logo
    Hero.js           # Main hero section
    ContactForm.js    # Contact form component
  App.js             # Main app component
  index.js           # React entry point
```

## Contact Form

The contact form collects:
- Name (required)
- Email (required)
- Phone number (optional)
- Merchandise type description (required)

Form submissions open the user's default email client with a pre-filled message to banners@teamscout.co.

## Customization

The design uses Scout's brand colors:
- Primary blue: #2c5282
- Accent red: #d73527
- Dark blue: #1a365d

To modify colors or styling, edit the corresponding CSS files in the components directory.
