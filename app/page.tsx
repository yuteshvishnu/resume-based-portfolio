import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Linkedin, Mail, MapPin, Phone, Download, Award, GraduationCap, Briefcase, Code, Trophy } from "lucide-react"

export default function Portfolio() {
  const skills = [
    { name: "System Design", level: 90 },
    { name: "Data Structures & Algorithms", level: 90 },
    { name: "C++", level: 90 },
    { name: "AWS", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 85 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 85 },
  ]

  const experiences = [
    {
      company: "British Petroleum Pvt Ltd",
      role: "Senior Software Developer & Acting Squad Lead",
      period: "Mar 2024 – Present",
      location: "India",
      achievements: [
        "Leading cross-functional team and designing scalable systems for Bioverse biofuels project",
        "Architecting React frontend and AWS backend infrastructure for 10K+ clients",
        "Won BP AWS Ninja Academy Cloud Hackathon for innovative cloud solutions",
        "Managing team coordination and technical decision-making as acting squad lead",
      ],
    },
    {
      company: "Amazon Pvt Ltd",
      role: "Software Development Engineer",
      period: "Aug 2022 – Mar 2024",
      location: "India",
      achievements: [
        "Developed AWS-based automation infrastructure for UI testing",
        "Recognized as Subject Matter Expert for Amazon Preloads Business",
        "Achieved 12% improvement in Amazon Preload performance metrics",
      ],
    },
    {
      company: "Siemens Healthineers Pvt Ltd",
      role: "Design and Development Engineer",
      period: "Aug 2021 – Aug 2022",
      location: "India",
      achievements: [
        "Developed key UI features for healthcare-related AI systems",
        "Translated design requirements into web features",
        "Worked with backend architects on AI-powered healthcare systems",
      ],
    },
  ]

  const projects = [
    {
      title: "AI Powered Gesture-to-Speech Recognition Bot",
      description:
        "AI-driven assistant leveraging speech recognition and CNNs for gesture detection with 25% processing speed improvement and 30% accuracy increase.",
      technologies: ["Python", "CNN", "Arduino", "OpenCV", "Machine Learning"],
      achievements: "Enhanced communication for individuals with disabilities",
    },
    {
      title: "Multi-Disease Detection Framework for Plant Leaves",
      description:
        "Deep CNN-based model achieving 96.77% accuracy using Federated Learning and Transfer Learning for automated plant disease recognition.",
      technologies: ["Deep Learning", "CNN", "Computer Vision", "Python", "TensorFlow"],
      achievements: "Cost-effective solution for gardeners and agriculturists",
    },
    {
      title: "Automated Image Labeling Framework",
      description:
        "Published research combining Active Learning and Transfer Learning to reduce labeled data requirements through uncertainty sampling.",
      technologies: ["Machine Learning", "Active Learning", "Transfer Learning", "Python"],
      achievements: "Published in IJARESM International Journal",
    },
  ]

  const achievements = [
    "BP Gold Award for exceptional performance in core system design (2024)",
    "AWS Cloud Practitioner Certified (2024)",
    "1st place at Amazon's FuseOn AI ThinkBig Event (2023)",
    "A* Indian Institute of Technology (IIT BHU) Gold Award in Microprocessor Engineering (2021)",
    "All India Rank 946 in JEE Advanced (2017)",
    "Gold Medal in IIT BHU Powerlifting Competition (2018)",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-serif text-xl font-bold text-primary">Yutesh Vishnu Addanki</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-4xl font-bold text-white font-serif">YA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Software Engineer</h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Accomplished software engineer with 4+ years of experience architecting, developing, and optimizing
              scalable systems at Amazon, BP, Siemens, and GE Healthcare. Demonstrates exceptional team collaboration,
              leadership excellence, and innovative problem-solving skills that drive results and accelerate project
              delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                206 South Randall Avenue, Madison, WI 53715
              </Badge>
              <Badge variant="outline" className="text-sm bg-yellow-100 text-yellow-800 border-yellow-300">
                <GraduationCap className="w-4 h-4 mr-1" />
                UW Madison MS CS Student
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <GraduationCap className="w-4 h-4 mr-1" />
                Indian Institute of Technology (IIT BHU) Graduate
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Award className="w-4 h-4 mr-1" />
                AWS Certified
              </Badge>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:yuteshvishnu@gmail.com">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                I'm a dynamic software engineer who excels in team collaboration, strategic problem-solving, and
                innovative system design. With 4+ years of experience spearheading scalable solutions and mentoring
                cross-functional teams, I consistently deliver high-impact results that drive business growth and
                technical excellence.
              </p>
              <p className="text-lg mb-6">
                My journey began at the prestigious Indian Institute of Technology (IIT BHU) where I graduated with a
                8.5+ CGPA in Electronics Engineering. Since then, I've had the privilege of architecting solutions at
                industry leaders like Amazon, BP, Siemens, and GE Healthcare while currently pursuing my MS in Computer
                Science at UW Madison.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Users Impacted</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <ul className="space-y-2">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Trophy className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-accent font-medium">{project.achievements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "JavaScript", "TypeScript"].map((lang) => (
                    <Badge key={lang} variant="secondary">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Node.js", "GraphQL", "TensorFlow", "NumPy"].map((framework) => (
                    <Badge key={framework} variant="secondary">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Cloud & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Docker", "Kubernetes", "Lambda", "DynamoDB"].map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, or potential collaborations.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:yuteshvishnu@gmail.com" className="text-primary hover:underline">
                  yuteshvishnu@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+16084213499" className="text-primary hover:underline">
                  +1-608-421-3499
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <div className="text-sm text-muted-foreground mb-1">4.5K+ connections</div>
                <div className="text-xs text-muted-foreground mb-2">Contributing author to LinkedIn articles</div>
                <a
                  href="https://www.linkedin.com/in/yutesh-vishnu-addanki-3b51a1217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Connect with me
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:yuteshvishnu@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/yutesh-vishnu-addanki-3b51a1217/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Yutesh Vishnu Addanki. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
