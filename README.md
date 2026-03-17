# 🌱 Fertile Farms Insights Hub

A comprehensive soil analysis and fertilizer management system that helps farmers optimize soil health and crop yields through data-driven insights.

## 🚀 Live Demo

- **Netlify (Recommended)**: [https://soil-fertilizer.netlify.app/](https://soil-fertilizer.netlify.app/)
- **GitHub Pages**: [https://naveenkm07.github.io/Soil-Fertilisation-Analyzer-07](https://naveenkm07.github.io/Soil-Fertilisation-Analyzer-07)

## ✨ Features

- **Soil Analysis Management** - Add, edit, and track soil analysis records
- **Farm Organization** - Categorize data by farm name and location
- **Nutrient Monitoring** - Track N-P-K levels, pH, and organic matter
- **Historical Trends** - View analysis history with data visualization
- **Search & Filter** - Quickly find specific analyses
- **PDF Export** - Generate reports for offline use
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Modern UI** - Built with shadcn/ui components

## �️ Tech Stack

**Frontend**
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- shadcn/ui components
- React Router
- TanStack Query
- Recharts (charts)
- jsPDF (PDF export)

**Backend** (Optional - for full functionality)
- Spring Boot 3.2 + Java 17
- Spring Data JPA
- H2 Database

## � Installation

### Prerequisites
- Node.js 18+ 
- Java 17+ (for backend)
- Maven 3.6+ (for backend)

### Setup

```bash
# Clone repository
git clone https://github.com/Naveenkm07/Soil-Fertilisation-Analyzer-07.git
cd Soil-Fertilisation-Analyzer-07

# Install dependencies
npm install
```

### Development

```bash
# Start frontend only
npm run dev

# Start backend (optional)
cd backend
mvn spring-boot:run
```

## 🌐 Deployment

### Netlify (Recommended for Frontend)

**Option 1: Drag & Drop**
1. Run `npm run build`
2. Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

**Option 2: Git Integration**
1. Push code to GitHub
2. Connect repo at [netlify.com](https://netlify.com)
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

**Option 3: Netlify CLI**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run deploy
```

## 🔧 Configuration

### Environment Variables

Create `.env` in root:
```env
VITE_API_BASE_URL=http://localhost:8081/api
```

For production, set `VITE_API_BASE_URL` to your deployed backend URL.

### API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/analyses` | Get all analyses |
| POST | `/api/analyses` | Create analysis |
| GET | `/api/analyses/{id}` | Get by ID |
| DELETE | `/api/analyses/{id}` | Delete analysis |
| GET | `/api/analyses/location/{location}` | Filter by location |
| GET | `/api/analyses/farm/{farmName}` | Filter by farm |

## � Project Structure

```
Soil-Fertilisation-Analyzer-07/
├── src/                    # React source
│   ├── components/         # UI components
│   ├── pages/             # Route pages
│   ├── hooks/             # Custom hooks
│   ├── types/             # TypeScript types
│   └── utils/             # Utilities
├── backend/               # Spring Boot API
├── public/               # Static assets
└── dist/                 # Build output
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/name`
5. Open a Pull Request

## 📝 License

MIT License - see [LICENSE](LICENSE) file.

## � Contact

- **Email**: kmnaveenkm01@gmail.com
- **GitHub**: [@Naveenkm07](https://github.com/Naveenkm07)
- **Issues**: [Create an issue](https://github.com/Naveenkm07/Soil-Fertilisation-Analyzer-07/issues)

---

**Built with ❤️ for sustainable farming**
