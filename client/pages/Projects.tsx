import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Zap,
  Eye,
  Navigation,
  Shield,
  BarChart3,
  Database,
  Cloud,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Campus Navigator",
      period: "Oct 2023 – Dec 2023",
      type: "Academic Project",
      description: "A comprehensive navigation application designed to streamline campus movement for students and visitors. The app features real-time route optimization, accessibility mapping, and social integration to foster campus community engagement.",
      longDescription: "Campus Navigator addresses the common challenge of navigating large university campuses efficiently. The application integrates multiple data sources including building layouts, accessibility information, and real-time crowd data to provide optimal routing suggestions. Key features include indoor navigation, event-based routing, and social features that allow students to share popular paths and discover campus amenities.",
      technologies: ["React Native", "JavaScript", "Google Maps API", "Firebase", "Node.js", "MongoDB"],
      features: [
        "Real-time route optimization with traffic analysis",
        "Accessibility-focused navigation for disabled users", 
        "Social sharing of popular campus routes and locations",
        "Integration with campus event systems for crowd management",
        "Indoor navigation for complex buildings",
        "Offline map capabilities for areas with poor connectivity"
      ],
      impact: [
        "Reduced average travel time across campus by 25%",
        "Improved accessibility for students with mobility challenges",
        "Increased student engagement with campus events and activities",
        "Enhanced overall campus navigation experience"
      ],
      icon: <Navigation className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Social Distance Detector using Deep Learning",
      period: "Oct 2020 – Jun 2021", 
      type: "Bachelor's Final Year Project",
      description: "An AI-powered system for detecting and monitoring social distancing compliance in real-time using computer vision and deep learning technologies. Developed during the COVID-19 pandemic to enhance public safety measures.",
      longDescription: "This project was developed during the height of the COVID-19 pandemic to help businesses and institutions monitor social distancing compliance. The system uses advanced computer vision techniques and the YOLO (You Only Look Once) object detection algorithm to identify humans in images and video streams, calculate distances between individuals, and provide real-time alerts when social distancing guidelines are violated.",
      technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "Tkinter", "Deep Learning", "Computer Vision"],
      features: [
        "Real-time human detection and tracking in video streams",
        "Accurate distance calculation between individuals",
        "Visual alerts and notifications for distance violations",
        "Batch processing capabilities for recorded footage",
        "User-friendly GUI for easy operation",
        "Customizable distance thresholds and alert systems"
      ],
      impact: [
        "Contributed to public safety measures during the pandemic",
        "Processed large datasets to improve detection accuracy",
        "Demonstrated practical application of AI in healthcare",
        "Received recognition for innovative approach to social challenges"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Client Management Platform",
      period: "Jan 2022 – Jun 2022",
      type: "Professional Project",
      description: "A comprehensive client relationship management system built during my internship at Infi-data Technologies. The platform streamlines client onboarding, project management, and communication workflows.",
      longDescription: "This full-stack application was designed to address the inefficiencies in client management processes at Infi-data Technologies. The system provides a centralized platform for managing client relationships, tracking project progress, and facilitating seamless communication between teams and clients. The solution significantly improved operational efficiency and client satisfaction.",
      technologies: ["MySQL", "PHP", "JavaScript", "HTML/CSS", "Bootstrap", "jQuery"],
      features: [
        "Comprehensive client profile management",
        "Automated onboarding workflows and document processing",
        "Project tracking with milestone and deadline management",
        "Integrated communication tools and notification system",
        "Data analytics dashboard for business insights",
        "Custom reporting and data visualization tools"
      ],
      impact: [
        "Reduced client onboarding time by 40%",
        "Improved project delivery efficiency",
        "Enhanced client communication and satisfaction",
        "Streamlined internal workflow processes"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Credit Management System",
      period: "Jan 2021 – Feb 2021",
      type: "Web Development Project",
      description: "A secure web-based credit management system developed during my internship at Sparks Foundation. The system provides real-time transaction monitoring, credit analysis, and comprehensive reporting capabilities.",
      longDescription: "This project involved creating a robust credit management system that handles financial transactions, credit scoring, and risk assessment. The system was designed with security as a primary concern, implementing multiple layers of protection for sensitive financial data. The intuitive dashboard provides real-time insights into credit operations and helps financial institutions make informed decisions.",
      technologies: ["PHP", "CSS", "HTML", "XAMPP", "MySQL", "JavaScript"],
      features: [
        "Real-time credit transaction monitoring and processing",
        "Advanced credit scoring and risk assessment algorithms",
        "Comprehensive reporting and analytics dashboard",
        "Secure user authentication and authorization system",
        "Transaction history tracking and audit trails",
        "Mobile-responsive design for accessibility"
      ],
      impact: [
        "Increased user engagement by 30%",
        "Reduced transaction errors by 20%", 
        "Boosted customer satisfaction ratings by 25%",
        "Improved data visibility for decision-making"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const professionalWork = [
    {
      title: "Enterprise Data Pipeline Architecture",
      company: "MTA New York City Transit",
      description: "Designed and implemented scalable data pipelines using Apache Airflow to orchestrate ETL processes for operational data from Oracle, SharePoint, and CMMS systems into Azure Data Lake.",
      technologies: ["Apache Airflow", "Azure Data Lake", "Python", "SQL", "Oracle"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Interactive Analytics Dashboards",
      company: "MTA New York City Transit", 
      description: "Created comprehensive Power BI and Tableau dashboards that translate complex operational data into actionable insights, improving decision-making efficiency by 80%.",
      technologies: ["Power BI", "Tableau", "SQL", "DAX", "Power Automate"],
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Cloud Infrastructure Automation",
      company: "Various Projects",
      description: "Implemented DevOps practices and cloud automation using Docker, Kubernetes, and Terraform across Azure and AWS environments.",
      technologies: ["Docker", "Kubernetes", "Terraform", "Azure", "AWS"],
      icon: <Cloud className="w-6 h-6" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-slate-800">Likith Gowda</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
              <Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link>
              <Link to="/projects" className="text-slate-900 font-medium">Projects</Link>
              <Link to="/certifications" className="text-slate-600 hover:text-slate-900 transition-colors">Certifications</Link>
              <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">My Projects</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            A showcase of my academic and professional work, demonstrating expertise in full-stack development, 
            data analytics, and innovative problem-solving across various domains.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className={`h-64 md:h-full bg-gradient-to-br ${project.color} flex flex-col items-center justify-center text-white p-6`}>
                      <div className="text-center flex flex-col items-center justify-center h-full">
                        <div className="mb-4">
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-center leading-tight">{project.title}</h3>
                        <p className="text-sm opacity-90 text-center">{project.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.period}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-6">{project.longDescription}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600">
                            <Zap className="w-3 h-3 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Impact & Results</h4>
                      <ul className="space-y-1">
                        {project.impact.map((result, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600">
                            <BarChart3 className="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>


                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Work */}
      <section className="py-16 px-6 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Professional Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {professionalWork.map((work, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    {work.icon}
                  </div>
                  <CardTitle className="text-lg">{work.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{work.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 text-sm">{work.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {work.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Technical Skills Demonstrated</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Data Engineering</h3>
              <p className="text-sm text-slate-600">ETL pipelines, data lakes, and analytics platforms</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Computer Vision</h3>
              <p className="text-sm text-slate-600">Deep learning, object detection, and image processing</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Full Stack</h3>
              <p className="text-sm text-slate-600">End-to-end web application development</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Cloud & DevOps</h3>
              <p className="text-sm text-slate-600">Azure, AWS, Docker, and automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Collaborating?</h2>
          <p className="text-xl mb-8 text-blue-100">
            I'm always looking for exciting projects and opportunities to create innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => window.open('https://cdn.builder.io/o/assets%2F3c50cb312aa9437c94989f67e76b7685%2F58c52dc2ae054ee785a3984404351358?alt=media&token=cd15c3c0-4c4f-46da-983f-c8b46993e41b&apiKey=3c50cb312aa9437c94989f67e76b7685', '_blank')}>
              <ExternalLink className="w-4 h-4 mr-2" />
              View Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
