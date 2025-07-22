import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Send,
  MessageSquare,
  Clock,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Send me an email anytime",
      value: "likithscholar@gmail.com",
      action: "mailto:likithscholar@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "Call or text me directly",
      value: "(346) 285-5924",
      action: "tel:+13462855924",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Connect with me professionally",
      value: "LinkedIn Profile",
      action: "#",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      description: "Based in the NYC area",
      value: "Jersey City, NJ 07306",
      action: "#",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const availability = [
    {
      title: "Response Time",
      description: "I typically respond to emails within 24 hours",
      icon: <Clock className="w-5 h-5" />
    },
    {
      title: "Time Zone",
      description: "Eastern Time (ET) - UTC-5/UTC-4",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Availability",
      description: "Open to full-time opportunities and freelance projects",
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-slate-800">Likith Gowda</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
              <Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link>
              <Link to="/projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</Link>
              <Link to="/certifications" className="text-slate-600 hover:text-slate-900 transition-colors">Certifications</Link>
              <Link to="/contact" className="text-slate-900 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            or simply connecting with fellow developers and data enthusiasts.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${method.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(method.action, '_blank')}
                  >
                    {method.value}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Availability Info */}
          <div className="grid md:grid-cols-3 gap-6">
            {availability.map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contact Card */}
      <section className="py-16 px-6 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                LG
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Something Great?</h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Whether you're looking for a full-stack developer, data analyst, or someone who can bridge 
                the gap between technical implementation and business requirements, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('mailto:likithscholar@gmail.com', '_blank')}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('tel:+13462855924', '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-16 px-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What I'm Looking For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Full-Time Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Software Engineer / Full Stack Developer roles
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Data Analyst / Data Engineer positions
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Technical roles in fintech, transportation, or healthcare
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Positions involving cloud technologies and DevOps
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Collaboration & Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Freelance web development projects
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Data analytics and visualization consulting
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Open source contributions
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Technical mentoring and knowledge sharing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Be a Stranger</h2>
          <p className="text-xl mb-8 text-blue-100">
            Even if you don't have a specific opportunity in mind, I'd love to connect and learn about what you're working on.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => window.open('mailto:likithscholar@gmail.com?subject=Hello Likith!', '_blank')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Say Hello
          </Button>
        </div>
      </section>
    </div>
  );
}
