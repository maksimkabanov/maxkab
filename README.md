# Maksim Kabanov - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring Server-Side Rendering (SSR) and API routes.

## Overview

This portfolio website showcases my professional experience, skills, and projects as a Senior Frontend Engineer. The site is built using modern web technologies and follows best practices for performance and accessibility.

## Features

- **Server-Side Rendering (SSR)**: Improved performance and SEO with server-rendered pages
- **API Routes**: Built-in API endpoints for dynamic data fetching
- **Responsive Design**: Optimized for all device sizes
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Performance Optimized**: Fast loading times and smooth transitions
- **Accessibility**: WCAG compliant for better user experience
- **SEO Friendly**: Proper meta tags and structured data

## Tech Stack

- **Framework**: Next.js 15.3.0
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Server Features**: Server Components, API Routes
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/maksimkabanov/portfolio.git
   cd portfolio
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   │   └── projects/     # Projects API endpoint
│   ├── components/       # Reusable components
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
│   ├── Maksim_Kabanov.pdf                # Standard resume
│   └── Maksim_Kabanov - accomplishments.pdf  # Accomplishments resume
```

## Server-Side Rendering

This project utilizes Next.js Server Components and API Routes to demonstrate server-side rendering capabilities:

- **Server Components**: Pages and components that render on the server for improved performance
- **API Routes**: Built-in API endpoints for dynamic data fetching
- **Data Fetching**: Server-side data fetching with caching options

## Customization

- Update personal information in the respective page components
- Add or remove projects in the projects section
- Update resume PDFs in the public directory
- Modify API routes in the `app/api` directory

## Deployment

The site can be easily deployed to Vercel:

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any inquiries, please reach out through the contact form on the website or connect with me on [LinkedIn](https://linkedin.com/in/maksimkabanov).
