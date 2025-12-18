"use client";

export default function AboutPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8f9fa"
    }}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(15deg, #667eea 0%, #764ba2 100%)",
        padding: "20px 20px 60px",
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: "700",
          marginBottom: "20px"
        }}>
          About Me
        </h1>
        <p style={{
          fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
          maxWidth: "700px",
          margin: "0 auto",
          opacity: 0.95,
          lineHeight: "1.6"
        }}>
          Passionate about creating innovative software solutions and bringing ideas to life through code
        </p>
      </section>

      {/* Main Content */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px"
      }}>
        {/* Introduction */}
        <section style={{
          background: "white",
          borderRadius: "15px",
          padding: "40px",
          marginBottom: "40px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#333",
            marginBottom: "20px"
          }}>
            Who I Am
          </h2>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "15px"
          }}>
            I'm a Full-Stack Software Developer with a comprehensive diploma in Software Development. 
            My passion lies in building secure, user-centric applications that solve real-world problems 
            and deliver exceptional user experiences.
          </p>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#555"
          }}>
            I thrive on challenges and continuously seek to expand my knowledge in emerging technologies. 
            Whether it's front-end, back-end, or mobile development, I approach each project with 
            enthusiasm and a commitment to quality.
          </p>
        </section>

        {/* Education */}
        <section style={{
          background: "white",
          borderRadius: "15px",
          padding: "40px",
          marginBottom: "40px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#333",
            marginBottom: "30px"
          }}>
            Education
          </h2>
          
          <div style={{
            borderLeft: "3px solid #667eea",
            paddingLeft: "25px"
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#667eea",
              marginBottom: "10px"
            }}>
              Diploma in Software Development
            </h3>
            <p style={{
              fontSize: "1rem",
              color: "#888",
              marginBottom: "15px"
            }}>
              2024 - 2025
            </p>
            <p style={{
              fontSize: "1.05rem",
              lineHeight: "1.7",
              color: "#555",
              marginBottom: "20px"
            }}>
              Comprehensive program covering full-stack development, from front-end and back-end 
              to mobile and desktop applications. Gained expertise in the complete software development 
              lifecycle, including design, testing, deployment, and maintenance.
            </p>
            
            <h4 style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#333",
              marginBottom: "15px",
              marginTop: "25px"
            }}>
              Key Areas of Study:
            </h4>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px"
            }}>
              {[
                "Object-Oriented Programming",
                "Web Development (Front-end & Back-end)",
                "Mobile Application Development",
                "Database Design & Programming",
                "Software Analysis & Design",
                "User Experience & Design",
                "Cloud Computing",
                "Software Testing & Deployment",
                "Software Security",
                "Network Systems",
                "Software Project Management",
                "Emerging Technologies"
              ].map((course, i) => (
                <div key={i} style={{
                  padding: "12px 18px",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  borderLeft: "3px solid #667eea",
                  fontSize: "0.95rem",
                  color: "#555"
                }}>
                  {course}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section style={{
          background: "white",
          borderRadius: "15px",
          padding: "40px",
          marginBottom: "40px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#333",
            marginBottom: "30px"
          }}>
            Technical Skills
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}>
            {[
              {
                category: "Front-End Development",
                skills: ["HTML5 & CSS3", "JavaScript", "React", "Responsive Design", "UI/UX Principles"]
              },
              {
                category: "Back-End Development",
                skills: ["Server-side Programming", "RESTful APIs", "Database Integration", "Authentication & Security"]
              },
              {
                category: "Database",
                skills: ["SQL", "Database Design", "Query Optimization", "Data Modeling"]
              },
              {
                category: "Mobile Development",
                skills: ["Mobile App Development", "Cross-platform Solutions", "Mobile UI/UX"]
              },
              {
                category: "DevOps & Tools",
                skills: ["Cloud Computing", "Version Control (Git)", "Testing & Debugging", "Deployment Strategies"]
              },
              {
                category: "Software Engineering",
                skills: ["OOP Principles", "Design Patterns", "Software Architecture", "Agile Methodologies"]
              }
            ].map((skillSet, i) => (
              <div key={i} style={{
                padding: "25px",
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                borderRadius: "12px",
                border: "1px solid #e0e0e0"
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#667eea",
                  marginBottom: "15px"
                }}>
                  {skillSet.category}
                </h3>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {skillSet.skills.map((skill, j) => (
                    <li key={j} style={{
                      padding: "8px 0",
                      color: "#555",
                      fontSize: "0.95rem",
                      borderBottom: j < skillSet.skills.length - 1 ? "1px solid #e0e0e0" : "none"
                    }}>
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* What I Bring */}
        <section style={{
          background: "white",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#333",
            marginBottom: "30px"
          }}>
            What I Bring to the Table
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px"
          }}>
            {[
              {
                icon: "🎯",
                title: "Problem Solver",
                description: "Critical thinker who diagnoses issues and implements effective solutions"
              },
              {
                icon: "🤝",
                title: "Team Player",
                description: "Collaborative professional who works well with stakeholders and team members"
              },
              {
                icon: "🔒",
                title: "Security Focused",
                description: "Committed to building secure applications that protect user data"
              },
              {
                icon: "📱",
                title: "Versatile",
                description: "Experience across web, mobile, and desktop application development"
              },
              {
                icon: "📚",
                title: "Continuous Learner",
                description: "Always staying current with industry trends and emerging technologies"
              },
              {
                icon: "⚡",
                title: "Quality Driven",
                description: "Focus on scalable, maintainable, and well-tested code"
              }
            ].map((strength, i) => (
              <div key={i} style={{
                padding: "25px",
                borderRadius: "12px",
                background: "#f8f9fa",
                textAlign: "center",
                transition: "transform 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                  {strength.icon}
                </div>
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "10px"
                }}>
                  {strength.title}
                </h3>
                <p style={{
                  fontSize: "0.95rem",
                  color: "#666",
                  lineHeight: "1.6"
                }}>
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}