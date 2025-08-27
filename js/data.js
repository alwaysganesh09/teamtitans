// --- Project Data ---
const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and an admin dashboard.',
        category: 'Web',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: 'https://github.com/teamtitans/ecommerce-platform',
        liveUrl: 'https://titans-shop.netlify.app',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
        id: 2,
        title: 'AI Image Recognition',
        description: 'Machine learning model for image classification using TensorFlow. Deployed with a Flask API and a React frontend.',
        category: 'AI',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: 'https://github.com/teamtitans/ai-image-recognition',
        liveUrl: 'https://titans-ai.herokuapp.com',
        tags: ['Python', 'TensorFlow', 'Flask', 'React']
    },
    {
        id: 3,
        title: 'Smart Home IoT System',
        description: 'An IoT system for home automation using Arduino, Raspberry Pi, and a React Native mobile app for control.',
        category: 'IoT',
        image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: 'https://github.com/teamtitans/smart-home-iot',
        liveUrl: null,
        tags: ['Arduino', 'Raspberry Pi', 'React Native', 'MQTT']
    },
    {
        id: 4,
        title: 'Task Management App',
        description: 'Cross-platform task management application built with React Native and a Firebase backend.',
        category: 'Mobile',
        image: 'https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: 'https://github.com/teamtitans/task-manager',
        liveUrl: 'https://play.google.com/store/apps/titans-tasks',
        tags: ['React Native', 'Firebase', 'Redux', 'TypeScript']
    },
    {
        id: 5,
        title: 'Code Editor IDE',
        description: 'A desktop code editor with syntax highlighting, a plugin system, and an integrated terminal built with Electron.',
        category: 'Desktop',
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: 'https://github.com/teamtitans/titans-ide',
        liveUrl: 'https://titans-ide.com/download',
        tags: ['Electron', 'TypeScript', 'Monaco Editor', 'Node.js']
    },
    {
        id: 6,
        title: 'Social Media Dashboard',
        description: 'An analytics dashboard for social media management with real-time data visualization and automated reporting.',
        category: 'Web',
        image: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: 'https://github.com/teamtitans/social-dashboard',
        liveUrl: 'https://titans-social.vercel.app',
        tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL']
    }
];

// --- Team Data ---
// const teamData = [
//     {
//         id: 1,
//         name: 'Alex Chen',
//         role: 'Full Stack Developer',
//         image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
//         bio: 'Passionate about creating scalable web applications with modern technologies. 5+ years of experience in React and Node.js.',
//         skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
//         github: 'https://github.com/alexchen',
//         linkedin: 'https://linkedin.com/in/alexchen',
//         email: 'alex@teamtitans.dev'
//     },
//     {
//         id: 2,
//         name: 'Sarah Johnson',
//         role: 'UI/UX Designer',
//         image: 'https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=400',
//         bio: 'Creative designer focused on user-centered design and beautiful interfaces. Expert in Figma and design systems.',
//         skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
//         github: 'https://github.com/sarahjohnson',
//         linkedin: 'https://linkedin.com/in/sarahjohnson',
//         email: 'sarah@teamtitans.dev'
//     },
//     {
//         id: 3,
//         name: 'Mike Rodriguez',
//         role: 'Backend Developer',
//         image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
//         bio: 'Backend specialist with expertise in microservices architecture and database optimization. DevOps enthusiast.',
//         skills: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes'],
//         github: 'https://github.com/mikerodriguez',
//         linkedin: 'https://linkedin.com/in/mikerodriguez',
//         email: 'mike@teamtitans.dev'
//     },
//     {
//         id: 4,
//         name: 'Emily Davis',
//         role: 'Mobile Developer',
//         image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
//         bio: 'Mobile app developer specialized in cross-platform solutions. Published 15+ apps on both iOS and Android stores.',
//         skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
//         github: 'https://github.com/emilydavis',
//         linkedin: 'https://linkedin.com/in/emilydavis',
//         email: 'emily@teamtitans.dev'
//     },
//     {
//         id: 5,
//         name: 'David Kim',
//         role: 'AI/ML Engineer',
//         image: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=400',
//         bio: 'AI researcher and engineer with a focus on computer vision and natural language processing. PhD in Machine Learning.',
//         skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
//         github: 'https://github.com/davidkim',
//         linkedin: 'https://linkedin.com/in/davidkim',
//         email: 'david@teamtitans.dev'
//     },
//     {
//         id: 6,
//         name: 'Lisa Wang',
//         role: 'DevOps Engineer',
//         image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
//         bio: 'DevOps expert ensuring smooth deployment pipelines and infrastructure management. Cloud architecture specialist.',
//         skills: ['AWS', 'Terraform', 'Jenkins', 'Kubernetes', 'Monitoring'],
//         github: 'https://github.com/lisawang',
//         linkedin: 'https://linkedin.com/in/lisawang',
//         email: 'lisa@teamtitans.dev'
//     }
// ];

// --- Resources Data ---
const resourcesData = [
    {
        id: 1,
        title: 'Html-Handwritten Notes',
        description: 'Comprehensive guide covering HTML development best practices, performance optimization, and common patterns.',
        category: 'Documentation',
        fileType: 'PDF',
        size: '2.5 MB',
        downloadUrl: 'assets/pdfs/HTML Handwritten Notes.pdf',
        previewUrl: 'assets/pdfs/HTML Handwritten Notes.pdf',
        lastUpdated: '2024-01-15'
    },
    {
        id: 2,
        title: 'API Development Tutorial',
        description: 'Step-by-step tutorial for building RESTful APIs with Node.js, Express, and MongoDB.',
        category: 'Tutorials',
        fileType: 'PDF',
        size: '3.2 MB',
        downloadUrl: 'assets/pdfs/API-Development-Tutorial.pdf',
        previewUrl: 'assets/pdfs/API-Development-Tutorial.pdf',
        lastUpdated: '2024-01-12'
    },
    {
        id: 3,
        title: 'Design System Template',
        description: 'Complete design system template with components, tokens, and guidelines for consistent UI development.',
        category: 'Templates',
        fileType: 'PDF',
        size: '5.8 MB',
        downloadUrl: 'assets/pdfs/Design-System-Template.pdf',
        previewUrl: 'assets/pdfs/Design-System-Template.pdf',
        lastUpdated: '2024-01-10'
    },
    {
        id: 4,
        title: 'Machine Learning Research Paper',
        description: 'Our latest research on computer vision applications in real-time object detection systems.',
        category: 'Research Papers',
        fileType: 'PDF',
        size: '1.9 MB',
        downloadUrl: 'assets/pdfs/Machine-Learning-Research-Paper.pdf',
        previewUrl: 'assets/pdfs/Machine-Learning-Research-Paper.pdf',
        lastUpdated: '2024-01-08'
    },
    {
        id: 5,
        title: 'Mobile App Development Guide',
        description: 'Complete guide for cross-platform mobile app development using React Native and Flutter.',
        category: 'Documentation',
        fileType: 'PDF',
        size: '4.1 MB',
        downloadUrl: 'assets/pdfs/Mobile-App-Development-Guide.pdf',
        previewUrl: 'assets/pdfs/Mobile-App-Development-Guide.pdf',
        lastUpdated: '2024-01-05'
    },
    {
        id: 6,
        title: 'DevOps Pipeline Tutorial',
        description: 'Learn how to set up CI/CD pipelines with GitHub Actions, Docker, and AWS deployment.',
        category: 'Tutorials',
        fileType: 'PDF',
        size: '2.8 MB',
        downloadUrl: 'assets/pdfs/DevOps-Pipeline-Tutorial.pdf',
        previewUrl: 'assets/pdfs/DevOps-Pipeline-Tutorial.pdf',
        lastUpdated: '2024-01-03'
    }
];

// --- Certifications Data ---
const certificationsData = [
    {
        id: 1,
        title: 'Google Cloud Professional Cloud Architect',
        provider: 'Google Cloud',
        description: 'Design and manage scalable, secure, and reliable cloud architecture solutions on Google Cloud Platform.',
        duration: '3-6 months',
        level: 'Professional',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400',
        url: 'https://cloud.google.com/certification/cloud-architect',
        category: 'Cloud',
        skills: ['GCP', 'Architecture', 'Security', 'Networking']
    },
    {
        id: 2,
        title: 'AWS Solutions Architect Associate',
        provider: 'Amazon Web Services',
        description: 'Learn to design distributed systems and architectures on AWS cloud platform with best practices.',
        duration: '2-4 months',
        level: 'Associate',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=400',
        url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
        category: 'Cloud',
        skills: ['AWS', 'EC2', 'S3', 'Lambda', 'RDS']
    },
    {
        id: 3,
        title: 'Meta React Developer Certificate',
        provider: 'Meta (Facebook)',
        description: 'Master React development from basics to advanced concepts including hooks, context, and performance optimization.',
        duration: '4-6 months',
        level: 'Professional',
        rating: 4.6,
        image: 'https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=400',
        url: 'https://www.coursera.org/professional-certificates/meta-react-native',
        category: 'Frontend',
        skills: ['React', 'JavaScript', 'Redux', 'Testing']
    },
    {
        id: 4,
        title: 'Microsoft Azure Fundamentals',
        provider: 'Microsoft',
        description: 'Build foundational knowledge of cloud concepts and Microsoft Azure services, security, and compliance.',
        duration: '1-2 months',
        level: 'Beginner',
        rating: 4.5,
        image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=400',
        url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/',
        category: 'Cloud',
        skills: ['Azure', 'Cloud Concepts', 'Security', 'Compliance']
    },
    {
        id: 5,
        title: 'TensorFlow Developer Certificate',
        provider: 'Google',
        description: 'Demonstrate proficiency in using TensorFlow to solve deep learning and ML problems.',
        duration: '3-5 months',
        level: 'Intermediate',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
        url: 'https://www.tensorflow.org/certificate',
        category: 'AI/ML',
        skills: ['TensorFlow', 'Deep Learning', 'Python', 'Neural Networks']
    },
    {
        id: 6,
        title: 'Certified Kubernetes Administrator',
        provider: 'Cloud Native Computing Foundation',
        description: 'Validate skills and knowledge to perform the responsibilities of Kubernetes administrators.',
        duration: '2-4 months',
        level: 'Professional',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=400',
        url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/',
        category: 'DevOps',
        skills: ['Kubernetes', 'Docker', 'Linux', 'Networking']
    },
    {
        id: 7,
        title: 'Google UX Design Certificate',
        provider: 'Google',
        description: 'Learn user experience design fundamentals and create portfolio-ready projects.',
        duration: '3-6 months',
        level: 'Beginner',
        rating: 4.6,
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
        url: 'https://grow.google/certificates/ux-design/',
        category: 'Design',
        skills: ['UX Design', 'Figma', 'Prototyping', 'User Research']
    },
    {
        id: 8,
        title: 'IBM Data Science Certificate',
        provider: 'IBM',
        description: 'Master data science tools and techniques including Python, SQL, machine learning, and data visualization.',
        duration: '4-8 months',
        level: 'Professional',
        rating: 4.5,
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
        url: 'https://www.coursera.org/professional-certificates/ibm-data-science',
        category: 'Data Science',
        skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization']
    }
];