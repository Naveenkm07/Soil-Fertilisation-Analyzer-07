# 🌱 Fertile Farms Insights Hub

A comprehensive soil analysis and fertilizer management system that helps farmers optimize their soil health and crop yields.

## 🚀 Live Demo

- **Frontend**: [https://naveenkm07.github.io/Soil-Fertilisation-Analyzer-07](https://naveenkm07.github.io/Soil-Fertilisation-Analyzer-07)
- **Backend API**: [https://your-backend-url.com](https://your-backend-url.com) (Deploy separately)

## 🛠️ Technologies Used

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for modern UI components
- **React Router** for navigation
- **React Query** for data fetching
- **Recharts** for data visualization

### Backend
- **Spring Boot 3.2.3** with Java 17
- **Spring Data JPA** for database operations
- **H2 Database** for data storage
- **Maven** for dependency management
- **RESTful API** design

## 📁 Project Structure

```
fertile-farms-insights-hub-main/
├── src/                    # React frontend source code
│   ├── components/         # Reusable UI components
│   ├── pages/             # Application pages
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── backend/               # Spring Boot backend
│   ├── src/main/java/     # Java source code
│   ├── src/main/resources/ # Configuration and static files
│   └── pom.xml           # Maven configuration
├── public/               # Static assets
└── package.json          # Frontend dependencies
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **Java 17** or higher
- **Maven** 3.6 or higher
- **Git**

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Naveenkm07/Soil-Fertilisation-Analyzer-07.git
   cd Soil-Fertilisation-Analyzer-07
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   Backend will be available at: `http://localhost:8081`

4. **Start the frontend development server**
   ```bash
   npm run dev
   ```
   Frontend will be available at: `http://localhost:8080`

## 🌐 Deployment Options

### Option 1: GitHub Pages (Frontend Only)

1. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

2. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as source
   - Your app will be available at: `https://naveenkm07.github.io/Soil-Fertilisation-Analyzer-07`

### Option 2: Full Stack Deployment

#### Backend Deployment Options:
- **Heroku**: Deploy Spring Boot app
- **Railway**: Easy deployment platform
- **Render**: Free tier available
- **AWS/Google Cloud/Azure**: For production use

#### Frontend Deployment Options:
- **Vercel**: Excellent for React apps
- **Netlify**: Great free tier
- **GitHub Pages**: Already configured
- **Firebase Hosting**: Google's platform

### Option 3: Docker Deployment

1. **Create Dockerfile for backend**
   ```dockerfile
   FROM openjdk:17-jdk-slim
   COPY target/soil-analysis-service-1.0-SNAPSHOT.jar app.jar
   EXPOSE 8081
   ENTRYPOINT ["java","-jar","/app.jar"]
   ```

2. **Create Dockerfile for frontend**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   FROM nginx:alpine
   COPY --from=0 /app/dist /usr/share/nginx/html
   EXPOSE 80
   ```

## 🔧 Configuration

### Environment Variables

Create `.env` file in the root directory:
```env
# Frontend Configuration
VITE_API_BASE_URL=http://localhost:8081/api

# Backend Configuration (application.properties)
SERVER_PORT=8081
SPRING_DATASOURCE_URL=jdbc:h2:mem:soildb
```

### API Endpoints

- `GET /api/analyses` - Get all soil analyses
- `POST /api/analyses` - Create new soil analysis
- `GET /api/analyses/{id}` - Get specific analysis
- `DELETE /api/analyses/{id}` - Delete analysis
- `GET /api/analyses/location/{location}` - Get analyses by location
- `GET /api/analyses/farm/{farmName}` - Get analyses by farm name

## 📊 Features

- ✅ **Soil Analysis Management**: Add, edit, delete soil analysis data
- ✅ **Farm Tracking**: Organize data by farm and location
- ✅ **Nutrient Monitoring**: Track N-P-K levels and pH
- ✅ **Historical Data**: View analysis history and trends
- ✅ **Search & Filter**: Find specific analyses quickly
- ✅ **Responsive Design**: Works on desktop and mobile
- ✅ **Modern UI**: Beautiful, intuitive interface
- ✅ **Data Visualization**: Charts and graphs for insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the need for better soil management
- Special thanks to the open-source community

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Contact: [Your Email]
- Project URL: [https://github.com/Naveenkm07/Soil-Fertilisation-Analyzer-07](https://github.com/Naveenkm07/Soil-Fertilisation-Analyzer-07)

---

**Made with ❤️ for better farming**
