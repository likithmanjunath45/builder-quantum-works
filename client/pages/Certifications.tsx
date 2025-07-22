import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  ExternalLink,
  Award,
  Calendar,
  Database,
  Cloud,
  BarChart3,
  Code,
  Shield,
  CheckCircle,
  Star,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Certifications() {
  const certifications = [
    {
      title: "Oracle Database Fundamentals",
      issuer: "Oracle Corporation",
      date: "2023",
      status: "Certified",
      description: "Comprehensive certification covering database design, SQL optimization, and advanced Oracle database management concepts.",
      skills: ["SQL", "Database Design", "Performance Tuning", "PL/SQL"],
      icon: <Database className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      credentialId: "OCP-2023-DB001"
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2023",
      status: "Certified",
      description: "Foundation-level certification demonstrating knowledge of cloud concepts, Azure services, workloads, security, and pricing.",
      skills: ["Azure Services", "Cloud Computing", "Security", "Compliance"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      credentialId: "AZ900-2023-001"
    },
    {
      title: "Microsoft Power BI Data Analyst (PL-300)",
      issuer: "Microsoft",
      date: "2024",
      status: "Certified",
      description: "Advanced certification for designing and building scalable data models, cleaning and transforming data, and enabling advanced analytics.",
      skills: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      credentialId: "PL300-2024-001"
    },
    {
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "In Progress",
      status: "In Progress",
      description: "Currently preparing for this certification which validates expertise in designing distributed systems on AWS.",
      skills: ["AWS", "Cloud Architecture", "Solutions Design", "DevOps"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      credentialId: "Expected Q2 2024"
    },
    {
      title: "Oracle Certified Professional Java SE",
      issuer: "Oracle Corporation",
      date: "Planned",
      status: "Planned",
      description: "Planning to obtain this certification to demonstrate advanced Java programming skills and object-oriented design principles.",
      skills: ["Java", "OOP", "Spring Framework", "Microservices"],
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      credentialId: "Planned for 2024"
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "Future Goal",
      status: "Future Goal",
      description: "Future certification goal to understand cybersecurity from an offensive perspective and strengthen application security knowledge.",
      skills: ["Cybersecurity", "Penetration Testing", "Network Security", "Risk Assessment"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      credentialId: "Future Planning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Certified":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Planned":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Future Goal":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Certified":
        return <CheckCircle className="w-4 h-4" />;
      case "In Progress":
        return <Target className="w-4 h-4" />;
      case "Planned":
        return <Calendar className="w-4 h-4" />;
      case "Future Goal":
        return <Star className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-slate-800">Likith Gowda</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
              <Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link>
              <Link to="/projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</Link>
              <Link to="/certifications" className="text-slate-900 font-medium">Certifications</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Professional Certifications</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            My commitment to continuous learning and professional development through industry-recognized certifications 
            and training programs that validate my expertise across multiple technology domains.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex">
                  <div className="w-24 flex-shrink-0">
                    <div className={`h-full bg-gradient-to-b ${cert.color} flex items-center justify-center text-white`}>
                      {cert.icon}
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{cert.title}</h3>
                        <p className="text-blue-600 font-medium text-sm">{cert.issuer}</p>
                      </div>
                      <div className="ml-4 flex flex-col items-end">
                        <Badge className={`${getStatusColor(cert.status)} border text-xs mb-2 flex items-center gap-1`}>
                          {getStatusIcon(cert.status)}
                          {cert.status}
                        </Badge>
                        <span className="text-xs text-slate-500">{cert.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-4">{cert.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-slate-900 mb-2 text-sm">Skills Covered</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        ID: {cert.credentialId}
                      </div>
                      {cert.status === "Certified" && (
                        <Button variant="outline" size="sm" disabled>
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Verify
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">My Learning Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 border-4 border-white rounded-full flex items-center justify-center text-green-600 relative z-10">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="font-semibold text-slate-900">Database & Analytics Foundation</h3>
                  <p className="text-slate-600 text-sm">Established strong foundation in database management and data analytics through Oracle and Microsoft certifications.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 border-4 border-white rounded-full flex items-center justify-center text-blue-600 relative z-10">
                  <Target className="w-6 h-6" />
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="font-semibold text-slate-900">Cloud Architecture Expansion</h3>
                  <p className="text-slate-600 text-sm">Currently expanding cloud expertise with AWS Solutions Architect certification to complement Azure knowledge.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 border-4 border-white rounded-full flex items-center justify-center text-purple-600 relative z-10">
                  <Star className="w-6 h-6" />
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="font-semibold text-slate-900">Full Stack Mastery</h3>
                  <p className="text-slate-600 text-sm">Planning advanced Java certification and security certifications to become a well-rounded full-stack developer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-slate-600">Certifications Earned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1</div>
              <div className="text-slate-600">In Progress</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-slate-600">Planned for 2024</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-slate-600">Technology Domains</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Committed to Excellence</h2>
          <p className="text-xl mb-8 text-blue-100">
            I believe in continuous learning and staying ahead of industry trends through professional certifications and hands-on experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/projects">View My Projects</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">Discuss Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
