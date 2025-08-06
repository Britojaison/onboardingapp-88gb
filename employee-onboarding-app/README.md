# Employee Onboarding Portal

A comprehensive employee onboarding application built with Next.js 14+, TypeScript, Tailwind CSS, and modern web technologies. This portal provides everything new employees need to get started, including company policies, tutorials, office information, and more.

## 🚀 Features

### Core Functionality
- **Dashboard**: Overview of onboarding progress and quick access to key features
- **Task Management**: Track and complete onboarding tasks with progress tracking
- **Company Policies**: Browse and download company policies by category
- **Holidays & Office Info**: View company holidays, office timings, and facilities
- **Tutorials**: Step-by-step guides for setting up Slack, Gmail, Razorpay, and more
- **Gallery**: Office photos, team events, and company culture showcase
- **Office Information**: Detailed office facilities, departments, and emergency contacts

### Technical Features
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **TypeScript**: Full type safety and better developer experience
- **Database Ready**: Configured for Supabase integration
- **CMS Integration**: Ready for Sanity.io content management
- **Performance**: Optimized with Next.js 14 App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **CMS**: Sanity.io
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd employee-onboarding-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup (Supabase)

### Required Tables

1. **employees**
   ```sql
   CREATE TABLE employees (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email VARCHAR UNIQUE NOT NULL,
     name VARCHAR NOT NULL,
     department VARCHAR NOT NULL,
     position VARCHAR NOT NULL,
     hire_date DATE NOT NULL,
     onboarding_status VARCHAR DEFAULT 'pending',
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   ```

2. **onboarding_tasks**
   ```sql
   CREATE TABLE onboarding_tasks (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     employee_id UUID REFERENCES employees(id),
     task_type VARCHAR NOT NULL,
     title VARCHAR NOT NULL,
     description TEXT,
     status VARCHAR DEFAULT 'pending',
     due_date DATE,
     completed_at TIMESTAMP,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

3. **company_policies**
   ```sql
   CREATE TABLE company_policies (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title VARCHAR NOT NULL,
     content TEXT NOT NULL,
     category VARCHAR NOT NULL,
     version VARCHAR NOT NULL,
     effective_date DATE NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

4. **holidays**
   ```sql
   CREATE TABLE holidays (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name VARCHAR NOT NULL,
     date DATE NOT NULL,
     description TEXT,
     is_floating BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

## 📝 CMS Setup (Sanity.io)

### Content Types

1. **Tutorials**: Step-by-step guides for account setup
2. **Gallery Items**: Office photos and event images
3. **Office Information**: Detailed office details and facilities

### Sanity Schema Example
```javascript
// schemas/tutorial.js
export default {
  name: 'tutorial',
  title: 'Tutorial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['slack', 'gmail', 'razorpay', 'general']
      }
    },
    {
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: ['beginner', 'intermediate', 'advanced']
      }
    },
    {
      name: 'estimatedTime',
      title: 'Estimated Time (minutes)',
      type: 'number'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}
```

## 🎨 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Customize shadcn/ui components in `src/components/ui/`

### Content
- Update mock data in each page component
- Replace with real data from Supabase/Sanity
- Modify navigation items in `src/components/navigation.tsx`

### Features
- Add new pages in `src/app/`
- Create new components in `src/components/`
- Update types in `src/lib/supabase.ts` and `src/lib/sanity.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **Railway**: Use the Next.js template
- **AWS/GCP**: Use Docker containers

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Dashboard
│   ├── tasks/          # Task management
│   ├── policies/       # Company policies
│   ├── holidays/       # Holidays & office info
│   ├── tutorials/      # Setup tutorials
│   ├── gallery/        # Office gallery
│   └── office/         # Office information
├── components/         # Reusable components
│   ├── ui/            # shadcn/ui components
│   └── navigation.tsx # Main navigation
└── lib/               # Utilities and configurations
    ├── supabase.ts    # Supabase client & types
    ├── sanity.ts      # Sanity client & types
    └── utils.ts       # Utility functions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- [ ] Authentication system
- [ ] Real-time notifications
- [ ] Mobile app version
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Integration with HR systems
- [ ] Automated onboarding workflows
- [ ] Employee feedback system

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
