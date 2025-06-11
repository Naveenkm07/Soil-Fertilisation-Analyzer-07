# 🚀 Deployment Guide

This guide explains how to deploy your **Fertile Farms Insights Hub** project to various platforms.

## ✅ Current Status

- **Frontend**: ✅ Deployed to GitHub Pages
- **Backend**: ⏳ Needs separate deployment
- **Repository**: ✅ Available at [https://github.com/Naveenkm07/Soil-Fertilisation-Analyzer-07](https://github.com/Naveenkm07/Soil-Fertilisation-Analyzer-07)

## 🌐 Frontend Deployment (Already Done!)

Your React frontend is now live at:
**https://naveenkm07.github.io/Soil-Fertilisation-Analyzer-07**

### How it was deployed:
1. Added `gh-pages` dependency
2. Configured `package.json` with homepage and deploy scripts
3. Ran `npm run deploy` to build and deploy

## 🔧 Backend Deployment Options

### Option 1: Railway (Recommended - Free Tier)

1. **Sign up** at [railway.app](https://railway.app)
2. **Connect your GitHub repository**
3. **Add a new service** → Select "Deploy from GitHub repo"
4. **Configure the service**:
   - **Root Directory**: `backend`
   - **Build Command**: `mvn clean install`
   - **Start Command**: `java -jar target/soil-analysis-service-1.0-SNAPSHOT.jar`
5. **Add environment variables**:
   ```
   PORT=8081
   SPRING_PROFILES_ACTIVE=production
   ```
6. **Deploy** and get your backend URL

### Option 2: Render (Free Tier)

1. **Sign up** at [render.com](https://render.com)
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Configure**:
   - **Name**: `fertile-farms-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `mvn clean install`
   - **Start Command**: `java -jar target/soil-analysis-service-1.0-SNAPSHOT.jar`
5. **Deploy** and get your backend URL

### Option 3: Heroku

1. **Install Heroku CLI**
2. **Login**: `heroku login`
3. **Create app**: `heroku create fertile-farms-backend`
4. **Add Java buildpack**: `heroku buildpacks:set heroku/java`
5. **Deploy**: `git push heroku main`

### Option 4: AWS/Google Cloud/Azure

For production deployments, consider:
- **AWS Elastic Beanstalk**
- **Google Cloud Run**
- **Azure App Service**

## 🔗 Connecting Frontend to Backend

Once your backend is deployed, update the frontend API URL:

1. **For local development**:
   ```env
   VITE_API_BASE_URL=http://localhost:8081/api
   ```

2. **For production**:
   ```env
   VITE_API_BASE_URL=https://your-backend-url.com/api
   ```

3. **Rebuild and redeploy frontend**:
   ```bash
   npm run deploy
   ```

## 🐳 Docker Deployment (Alternative)

### Backend Dockerfile
```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY backend/target/soil-analysis-service-1.0-SNAPSHOT.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","app.jar"]
```

### Frontend Dockerfile
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  backend:
    build: .
    ports:
      - "8081:8081"
    environment:
      - SPRING_PROFILES_ACTIVE=production
  
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend
```

## 📊 Database Options

### Current: H2 In-Memory Database
- ✅ Good for development and demos
- ❌ Data is lost when server restarts

### Production Options:

1. **PostgreSQL** (Recommended)
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/soildb
   spring.datasource.username=postgres
   spring.datasource.password=password
   spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
   ```

2. **MySQL**
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/soildb
   spring.datasource.username=root
   spring.datasource.password=password
   spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
   ```

3. **MongoDB** (NoSQL option)
   - Requires changing from JPA to MongoDB repositories

## 🔒 Security Considerations

1. **Environment Variables**: Never commit secrets to Git
2. **CORS Configuration**: Update allowed origins for production
3. **HTTPS**: Always use HTTPS in production
4. **Input Validation**: Validate all user inputs
5. **Rate Limiting**: Implement API rate limiting

## 📈 Monitoring and Analytics

1. **Application Monitoring**: Use tools like New Relic, DataDog
2. **Error Tracking**: Implement Sentry for error tracking
3. **Performance Monitoring**: Monitor API response times
4. **User Analytics**: Add Google Analytics to frontend

## 🚀 Quick Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend API URL updated
- [ ] Frontend redeployed
- [ ] Database configured (if using external DB)
- [ ] Environment variables set
- [ ] CORS configured for production domains
- [ ] SSL/HTTPS enabled
- [ ] Monitoring tools configured

## 🆘 Troubleshooting

### Common Issues:

1. **CORS Errors**: Update backend CORS configuration
2. **Build Failures**: Check Java version and Maven configuration
3. **Database Connection**: Verify database credentials and connectivity
4. **Port Conflicts**: Ensure ports are available and properly configured

### Getting Help:
- Check the [GitHub Issues](https://github.com/Naveenkm07/Soil-Fertilisation-Analyzer-07/issues)
- Review deployment platform documentation
- Test locally before deploying

---

**Your project is now ready for the world! 🌍** 