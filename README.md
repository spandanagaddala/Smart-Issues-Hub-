# Smart Issues Hub

A comprehensive web application for intelligent issue tracking, management, and analytics. Smart Issues Hub helps teams organize, prioritize, and resolve issues efficiently with AI-powered insights and smart categorization.

## Features

- **Smart Issue Categorization** - Automatically categorize and tag issues
- **Priority Analytics** - AI-powered priority suggestion based on issue content
- **Real-time Dashboard** - View all issues with advanced filtering and search
- **Team Collaboration** - Assign, comment, and collaborate on issues
- **Issue Statistics** - Comprehensive analytics and reporting
- **Integration Ready** - Easy integration with GitHub, GitLab, and other platforms
- **Notifications** - Smart notification system for issue updates
- **Custom Workflows** - Create custom issue workflows for your team

## Tech Stack

### Frontend
- React 18+ with TypeScript
- Redux for state management
- Tailwind CSS for styling
- Vite as build tool
- Axios for API communication

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- WebSocket for real-time updates

### DevOps
- Docker for containerization
- GitHub Actions for CI/CD

## Project Structure

```
smart-issues-hub/
├── frontend/           # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── services/
│   └── package.json
├── backend/            # Node.js API server
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── middleware/
│   └── package.json
├── docker-compose.yml
├── .github/
│   └── workflows/      # CI/CD pipelines
└── docs/              # Documentation
```

## Getting Started

### Prerequisites
- Node.js 16+
- MongoDB 4.4+
- Docker (optional)

### Installation

1. Clone the repository
```bash
git clone https://github.com/spandanagaddala/Smart-Issues-Hub-.git
cd Smart-Issues-Hub-
```

2. Install dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
npm install
```

3. Configure environment variables

Create `.env` file in backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/smart-issues-hub
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Create `.env` file in frontend directory:
```
VITE_API_BASE_URL=http://localhost:5000
```

4. Start the development servers

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

Access the application at `http://localhost:5173`

### Docker Setup

```bash
docker-compose up -d
```

## API Documentation

API endpoints are documented in `/docs/API.md`

## Usage

1. **Create an Issue** - Navigate to "New Issue" and fill in the details
2. **Smart Analysis** - The system automatically suggests priority and category
3. **Collaborate** - Add team members and assign issues
4. **Track Progress** - Monitor issue status and analytics
5. **Generate Reports** - Create custom reports and export data

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - See [LICENSE](LICENSE) file for details

## Contact & Support

- **Issues**: [GitHub Issues](https://github.com/spandanagaddala/Smart-Issues-Hub-/issues)
- **Email**: support@smartissueshub.com
- **Documentation**: [Full Docs](https://docs.smartissueshub.com)

## Roadmap

- [ ] AI-powered issue resolution suggestions
- [ ] Integration with Slack
- [ ] Mobile application
- [ ] Advanced analytics dashboard
- [ ] Custom AI model training
- [ ] Multi-organization support

---

Made with ❤️ by [spandanagaddala](https://github.com/spandanagaddala)
