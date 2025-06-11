# 🚀 Railway Deployment Guide

## Quick Backend Deployment to Railway

Follow these steps to deploy your backend and get a live URL that works with your frontend:

### Step 1: Sign up for Railway
1. Go to [railway.app](https://railway.app)
2. Sign up with your GitHub account
3. Verify your email

### Step 2: Deploy Your Backend
1. **Click "New Project"**
2. **Select "Deploy from GitHub repo"**
3. **Choose your repository**: `Naveenkm07/Soil-Fertilisation-Analyzer-07`
4. **Configure the service**:
   - **Root Directory**: `backend`
   - **Build Command**: `mvn clean install -DskipTests`
   - **Start Command**: `java -jar target/soil-analysis-service-1.0-SNAPSHOT.jar`

### Step 3: Get Your Backend URL
1. Wait for deployment to complete (2-3 minutes)
2. Click on your service
3. Go to "Settings" tab
4. Copy the "Domain" URL (e.g., `https://your-app-name.railway.app`)

### Step 4: Update Frontend API URL
1. Go to your GitHub repository
2. Edit the file: `src/lib/api.ts`
3. Update the API_BASE_URL to use your Railway URL:
   ```typescript
   const API_BASE_URL = 'https://your-app-name.railway.app/api';
   ```
4. Commit and push the changes
5. Redeploy frontend: `npm run deploy`

### Step 5: Test Your Application
1. Visit: https://naveenkm07.github.io/Soil-Fertilisation-Analyzer-07
2. Try adding a soil analysis
3. Check if data is saved and retrieved

## Alternative: Render Deployment

If Railway doesn't work, try Render:

1. Go to [render.com](https://render.com)
2. Sign up and create a new "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `fertile-farms-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `mvn clean install -DskipTests`
   - **Start Command**: `java -jar target/soil-analysis-service-1.0-SNAPSHOT.jar`
5. Deploy and get your URL

## Environment Variables (Optional)

You can set these in Railway/Render settings:
- `PORT`: Railway sets this automatically
- `SPRING_PROFILES_ACTIVE`: `production`

## Troubleshooting

1. **Build fails**: Check Java version (should be 17)
2. **Port issues**: Railway sets PORT automatically
3. **CORS errors**: Backend is configured to allow all origins
4. **Database issues**: Using H2 in-memory database (data resets on restart)

## Your Live Demo URLs

Once deployed:
- **Frontend**: https://naveenkm07.github.io/Soil-Fertilisation-Analyzer-07
- **Backend**: https://your-app-name.railway.app
- **API**: https://your-app-name.railway.app/api/analyses

---

**Your application will be fully functional with both frontend and backend working together! 🎉** 