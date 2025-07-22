import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  Award,
  Target,
  Heart,
  Code,
  Database,
  Cloud,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "I believe in writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      description: "I approach challenges with analytical thinking and innovative solutions to deliver meaningful results."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying current with the latest tools and best practices."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data-Driven",
      description: "I leverage data analytics and insights to make informed decisions and optimize performance."
    }
  ];

  const achievements = [
    "Increased operational efficiency by 80% through data visualization at MTA NYC Transit",
    "Reduced client onboarding time by 40% through automated platform development",
    "Built scalable data pipelines processing large volumes of operational data daily",
    "Master's degree in Computer Science with 3.8 GPA from Stevens Institute",
    "Expertise in multiple programming languages and cloud technologies"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-slate-800">Likith Gowda</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
              <Link to="/about" className="text-slate-900 font-medium">About</Link>
              <Link to="/projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</Link>
              <Link to="/certifications" className="text-slate-600 hover:text-slate-900 transition-colors">Certifications</Link>
              <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Me</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            I'm a passionate full-stack developer and data analyst with a strong foundation in software engineering 
            and data science. Currently working as a Staff Analyst at MTA New York City Transit, I specialize in 
            building scalable data pipelines, creating insightful visualizations, and developing robust applications.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-white via-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">My Journey</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 mb-6">
              My journey in technology began during my undergraduate studies at Sir M Visvesvaraya Institute of Technology 
              in Bangalore, where I developed a deep fascination for both software development and data analytics. 
              This passion led me to pursue a Master's degree in Computer Science at Stevens Institute of Technology, 
              where I achieved a 3.8 GPA and further honed my technical skills.
            </p>
            <p className="text-slate-700 mb-6">
              During my internship at Infi-data Technologies, I built my first major client management platform, 
              which reduced onboarding time by 40%. This experience taught me the importance of user-centered design 
              and efficient database management. Later, at the Sparks Foundation, I developed a Credit Management System 
              that significantly improved user engagement and reduced transaction errors.
            </p>
            <p className="text-slate-700">
              Currently at MTA New York City Transit, I work with large-scale operational data, implementing Apache Airflow 
              DAGs and building data pipelines that serve the entire organization. This role has allowed me to combine my 
              software development skills with advanced data analytics, creating solutions that drive operational efficiency 
              and informed decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Drives Me</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Achievements</h2>
          <Card className="p-6">
            <CardContent>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Deep Dive */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 mr-2" />
                  <CardTitle>Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React.js</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">HTML/CSS</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">Spring Boot</Badge>
                      <Badge variant="secondary">.NET Core</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">PHP</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600 mr-2" />
                  <CardTitle>Data & Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Visualization</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Power BI</Badge>
                      <Badge variant="secondary">Tableau</Badge>
                      <Badge variant="secondary">Excel</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Processing</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Apache Airflow</Badge>
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">ETL Pipelines</Badge>
                      <Badge variant="secondary">Data Profiling</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-blue-600 mr-2" />
                  <CardTitle className="text-lg">Database & Cloud Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-slate-900">Azure AI Essentials</h4>
                    <p className="text-sm text-slate-600">Machine learning workloads and AI services on Azure</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-slate-900">AWS Cloud Computing</h4>
                    <p className="text-sm text-slate-600">Cloud fundamentals and AWS service architecture</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600 mr-2" />
                  <CardTitle className="text-lg">Data Analytics Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-slate-900">Data Analytics Foundations</h4>
                    <p className="text-sm text-slate-600">NASBA-accredited statistical analysis and data fundamentals</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-slate-900">SQL & MySQL for Business Intelligence</h4>
                    <p className="text-sm text-slate-600">Advanced database queries and analytics applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-slate-900 mb-2">Continuous Learning</h3>
            <p className="text-slate-700 text-sm">
              I actively pursue professional certifications from leading institutions like McKinsey, LinkedIn Learning, and Udemy.
              My recent certifications span strategic thinking, AI/ML on Azure, data analytics foundations, and cybersecurity practices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl mb-8 text-blue-100">
            I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/projects">View My Projects</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
