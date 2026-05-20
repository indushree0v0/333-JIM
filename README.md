# Aetheris Group - Enterprise Homepage

A premium, high-fidelity, high-contrast dark-themed corporate homepage built for **Aetheris Group** (Intelligent Cloud & Enterprise AI Solutions). This project demonstrates modern web design patterns, rich interactive micro-animations, glassmorphic UI components, and a custom volumetric 3D background.

## 🚀 Live Demo
Once deployed, the live site is available at:
👉 **[https://indushree0v0.github.io/333-JIM/](https://indushree0v0.github.io/333-JIM/)**

---

## ✨ Features

- **Volumetric WebGL Background**: Implemented using **Three.js**, rendering an interactive `<LightPillar />` shader simulation that floats seamlessly behind the hero content.
- **Responsive Sticky Navigation**: A modern navigation bar that monitors scroll positions to active sections, including a responsive drawer menu for mobile and tablet views.
- **Interactive Showcases**:
  - **About Us**: Modern stats counter grid highlighting key growth metrics.
  - **Services Grid**: Next-gen cloud & infrastructure cards utilizing rich hover glow effects.
  - **Projects Filter**: Dynamic DOM filter for AI Systems, Enterprise Cloud, and Cybersecurity case studies.
  - **Testimonials**: Interactive client feedback slider with star-rating indices.
  - **Careers portal**: Styled department cards and instant recruitment application forms.
  - **Contact Form**: Local real-time email regex validation with clean interactive notification states.

---

## 🛠️ Technology Stack

* **Framework**: React 19 + Vite 8
* **Styling**: Tailwind CSS v4 (Native CSS-based configuration)
* **3D Graphics**: Three.js (WebGL rendering pipeline)
* **Icons**: Lucide React
* **Quality Assurance**: ESLint 10

---

## 💻 Local Development

Follow these steps to run the application locally on your machine:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/indushree0v0/333-JIM.git
   cd 333-JIM
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📦 Deployment Configuration

This project is configured to auto-deploy to **GitHub Pages** using **GitHub Actions**.

Whenever changes are pushed to the `main` branch, the workflow file located at `.github/workflows/deploy.yml` triggers a job to:
1. Setup Node.js and cache dependencies.
2. Build the project using Vite.
3. Deploy the static build files from the `/dist` output folder.

### Enabling GitHub Pages Deployment:
1. Push your changes to GitHub.
2. On your repository page, go to **Settings** -> **Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
