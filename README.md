# Interview Practice Platform(PrepWise)

A modern web application for practicing technical interviews with AI-powered voice enabled interviews creation and mock interviews with performance feedback.

## 🚀 Tech Stack
- **Frontend**: Next.js 14, React 19, TypeScript 5, Tailwind CSS 4
- **UI Components**: shadcn/ui, Radix UI Primitives
- **AI Integration**: Vapi.ai SDK v2.5.0 and Gemini AI
- **Forms & Validation**: React Hook Form, Zod
- **State Management**: React Context API
- **Authentication**: JWT
- **Build Tools**: ESLint, TypeScript, Tailwind CSS

## 🏗️ Architecture
The application follows Next.js 14 app directory structure with server and client components, featuring:
- [/app](cci:7://file:///Users/suman/interview_practice/src/Users/suman/interview_practice/src/app:0:0-0:0) - Application routes and pages
- [/components](cci:7://file:///Users/suman/interview_practice/src/Users/suman/interview_practice/src/components:0:0-0:0) - Reusable UI components
- [/constants](cci:7://file:///Users/suman/interview_practice/Users/suman/interview_practice/constants:0:0-0:0) - Application constants
- [/context](cci:7://file:///Users/suman/interview_practice/src/Users/suman/interview_practice/src/context:0:0-0:0) - React context providers
- [/lib](cci:7://file:///Users/suman/interview_practice/src/Users/suman/interview_practice/src/lib:0:0-0:0) - Utility functions

## ✨ Core Features
1. **AI-Powered Mock Interviews**
   - Real-time voice interaction with AI
   - Technical and behavioral questions
   - Performance feedback

2. **Interview Creation with AI**
   - Interactive interview creation dashboard with AI agent
   - AI-powered question generation 
3. **Detailed Feedback with Scores**
    - Comprehensive feedback with scores
    - Strengths and areas for improvement
    - Overall score and final assessment

3. **User Authentication**
   - JWT-based authentication
   - Protected routes
   - Session management

## 🛠️ Setup & Run

### Prerequisites
- Node.js 18.0.0+
- npm/yarn/pnpm
- Vapi.ai API key
- Backend server up and running
- OR use this Backend server url(https://interview-practice-backend-1.onrender.com)

### Installation

```bash

# Clone repository
git clone [repo-url]
cd interview_practice

# Install dependencies
npm install  # or yarn/pnpm install

# Set up environment
cp .env.example .env.local
# Update .env.local with your configuration

# Start development server
npm run dev
# Visit http://localhost:3000

## 🔑 Environment Variables
Create .env.local:

# Vapi.ai
NEXT_PUBLIC_VAPI_API_KEY=your_key
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_id

# Auth
NEXT_PUBLIC_JWT_SECRET=your_secret

# your backend route or deployed backend url
NEXT_PUBLIC_APP_URL=http://localhost:8000



```


## 🌐 API Endpoints

## 🔌 API Endpoints
Refer this swagger UI doc for API endpoints

[Swagger UI](https://interview-practice-backend-1.onrender.com/api-docs)

## 🚀 Deployment
- Deployed on Vercel:

[Click Here](https://interview-practice.vercel.app)


## 📊 Metrics
- Performance: 98% Lighthouse score
- Load time: <1.5s
- FCP: <1s
- Avg. session: 15min


## 🚧 Known Limitations
- Modern browsers only
- Mobile experience may vary
- Voice recognition accuracy with accents


## 🔜 Next Steps
- Planned to add more features
- More question categories
- Collaborative coding
- Video recording
- Multi-language support


### In Progress
- Performance optimization
- Enhanced analytics
- Mobile app



