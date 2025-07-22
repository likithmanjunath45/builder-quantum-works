import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Code,
  Database,
  Cloud,
  BarChart3,
  GraduationCap,
  Briefcase,
  Calendar,
  ChevronRight
} from "lucide-react";

export default function Index() {
  const experience = [
    {
      title: "Staff Analyst",
      company: "MTA New York City Transit",
      location: "New York City, NY",
      period: "Jun 2025 – Present",
      highlights: [
        "Analyze large volumes of operational data from internal systems updated daily, ensuring data integrity and availability",
        "Develop and manage Apache Airflow DAGs to orchestrate ETL of operational data into Azure Data Lake",
        "Implement scalable data pipelines that ingest and consolidate datasets from Oracle, SharePoint, and CMMS systems",
        "Monitor and troubleshoot Airflow workflows with custom sensors and alerts",
        "Design interactive dashboards in Power BI and Tableau with KPIs and trend analysis"
      ]
    },
    {
      title: "Technology Intern",
      company: "MTA New York City Transit", 
      location: "New York City, NY",
      period: "Mar 2024 – Jun 2025",
      highlights: [
        "Engineered data insights using Power BI and Excel, increasing efficiency by 80%",
        "Conducted EDA and quality assurance on training datasets for R211 fleet maintenance",
        "Automated data workflows via Power Automate and Power Apps",
        "Collaborated with senior managers to design dashboards using structured SQL datasets"
      ]
    },
    {
      title: "Application Developer Intern",
      company: "Infi-data Technologies",
      location: "Bangalore, India", 
      period: "Jan 2022 – Jun 2022",
      highlights: [
        "Built client management platform using MySQL and front-end tools, reducing onboarding time by 40%",
        "Designed and deployed SQL queries for trend analysis and KPI measurement",
        "Led data visualization efforts using custom dashboards and automated reporting tools"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Java", ".NET Core", "C#", "Python", "JavaScript", "PHP", "Kotlin", "SQL"],
    "Frameworks & Cloud": ["Spring Boot", "React.js", "Docker", "REST APIs", "Azure", "AWS", "Cloud Foundry"],
    "Data & DevOps": ["Power BI", "Power Automate", "SharePoint", "Data Profiling", "Kafka", "Splunk", "CloudWatch"],
    "Databases": ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "NoSQL", "Cassandra"],
    "Tools & Methodologies": ["Jira", "Confluence", "Maven", "Terraform", "Kubernetes", "JMeter", "Grafana", "Shell Scripting", "SDLC", "Agile"]
  };

  const projects = [
    {
      title: "Campus Navigator",
      period: "Oct 2023 – Dec 2023",
      description: "An application that streamlined campus navigation for students, resulting in reduced travel time and improved accessibility.",
      tech: ["Data Analytics", "Route Optimization", "Mobile App Development"]
    },
    {
      title: "Social Distance Detector using Deep Learning",
      period: "Oct 2020 – Jun 2021", 
      description: "Designed a platform to detect 6 Ft distance between humans in images/videos using GUI, YOLO, and trained detection system.",
      tech: ["Deep Learning", "YOLO", "Computer Vision", "Python", "GUI Development"]
    }
  ];

  const education = [
    {
      degree: "Master of Science (MS)",
      field: "Computer Science",
      school: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      gpa: "3.8",
      year: "May 2024"
    },
    {
      degree: "Bachelor of Engineering (BEng)",
      field: "Computer Science", 
      school: "Sir M Visvesvaraya Institute of Technology",
      location: "Bangalore, India",
      year: "Sep 2021"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-800">Likith Gowda</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors">Experience</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
              <a href="#certifications" className="text-slate-600 hover:text-slate-900 transition-colors">Certifications</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                LG
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Likith Gowda
              <span className="block text-3xl md:text-4xl text-blue-600 mt-2">Manjunath</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Aspiring Full Stack Software Developer | Data Analyst | Oracle & SQL Expert
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center text-slate-600">
                <MapPin className="w-4 h-4 mr-2" />
                Jersey City, NJ
              </div>
              <div className="flex items-center text-slate-600">
                <Mail className="w-4 h-4 mr-2" />
                likithscholar@gmail.com
              </div>
              <div className="flex items-center text-slate-600">
                <Phone className="w-4 h-4 mr-2" />
                (346) 285-5924
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open('#', '_blank')}>
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Full Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Proficient in Java, JavaScript, Python, and modern frameworks like React.js and Spring Boot.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Expert in Power BI, SQL, and data pipeline development with Apache Airflow and Azure.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Experienced with Azure, AWS, Docker, Kubernetes, and modern DevOps practices.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                    <p className="text-slate-600">{job.location}</p>
                  </div>
                  <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-slate-900">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">McKinsey Forward Program</CardTitle>
                <CardDescription className="text-blue-600 font-medium">McKinsey & Company</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm mb-4">Strategic thinking and digital problem-solving skills</p>
                <Badge variant="outline" className="text-xs">Business Strategy</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Azure AI Essentials</CardTitle>
                <CardDescription className="text-blue-600 font-medium">LinkedIn Learning</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm mb-4">Machine learning workloads and AI on Azure platform</p>
                <Badge variant="outline" className="text-xs">Machine Learning</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">SQL - MySQL Data Analytics</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Udemy</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm mb-4">Advanced SQL and business intelligence applications</p>
                <Badge variant="outline" className="text-xs">Data Analytics</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Continuously expanding my knowledge through professional certifications and training programs.
            </p>
            <Button variant="outline" className="inline-flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Certifications
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Academic Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{project.title}</CardTitle>
                  <CardDescription className="flex items-center text-slate-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
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

      {/* Education Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{edu.degree}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{edu.field}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 font-medium">{edu.school}</p>
                  <p className="text-slate-600">{edu.location}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-slate-500">{edu.year}</span>
                    {edu.gpa && <Badge variant="secondary">GPA: {edu.gpa}</Badge>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-12 text-blue-100">
            I'm always interested in new opportunities and challenging projects. 
            Let's discuss how I can contribute to your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Mail className="w-4 h-4 mr-2" />
              likithscholar@gmail.com
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              (346) 285-5924
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-center">
        <p className="text-slate-400">
          © 2024 Likith Gowda Manjunath. Built with React and TailwindCSS.
        </p>
      </footer>
    </div>
  );
}
