import React from 'react';
import './Resume.scss';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/2 px-4">
            {/* Left Column */}
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Shruti Gupta</h4>
              <p><em>Innovative and deadline-driven pro with 3+ years of experience in professional skilled in web
                application development, UI/UX design, graphic design, data analytics, brand identity, photography,
                and business development. I excel in creating robust applications, intuitive interfaces, compelling
                graphics, insightful data reports, and cohesive brand identities. My comprehensive approach and
                attention to detail consistently deliver top-notch results, driving business growth and enhancing
                project success.</em></p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Technology (Computer Science & Engineering), MIT World Peace University</h4>
              <h5>Jul'17 - Jul'21</h5>
              <p>GPA: 9.56 | Recipient of Merit Scholarship in College</p>
              <p>Research paper on <a href="https://www.ijera.com/papers/vol11no6/Series-5/F1106053134.pdf">
                Hybrid Food Recommender System based on cancer beating score of ingredients</a></p>
            </div>

            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Business Technology Solutions Associate Consultant, ZS Associates</h4>
              <h5>Aug'21 - Present</h5>
              <ul>
                <li>Lead in the design, development, and implementation of end-to-end customized digital solutions for
                  clients using technologies like Angular, React, Python, Flask, Django etc.</li>
                <li>Optimized solutions for performance and efficiency and created functionalities that decreased data
                  creation time by over 70%</li>
                <li>Analyze data and define requirements for digital clinical solutions and content tagging
                  domains creating user stories, and user experience flows</li>
                <li>Managed up to 3 projects at a given time and delegate tasks to 5 members of the design team</li>
                <li>Consult with clients and analyze data to define requirements for digital solutions</li>
                <li>Mentor new resources and conduct technical training sessions for 200+ new hires</li>
                <li>Collaborate with global clients, navigating cultural differences and time zone challenges</li>
              </ul>
              <p>Achievements: 1 promotion, 1 Award & multiple other recognitions</p>
            </div>

            <div className="resume-item">
              <h4>Web Application Developer Intern, Cromatus Consulting</h4>
              <h5>Jul'20 - Nov'20</h5>
              <ul>
                <li>Led a 4-person team to create a marketing web application, optimizing retrieval rates and 
                  establishing tagging to boost conversion rates and facilitate analytics.</li>
                <li>Developed UI, databases, endpoints, and safeguards, increasing performance and reducing 
                  creation/maintenance time by 40%.</li>
              </ul>
              <p>Achievements: Best Performer Award</p>
            </div>
          </div>

          <div className="lg:w-1/2 px-4">
            {/* Right Column */}
            <h3 className="resume-title">Extra-Curriculars</h3>
            <div className="resume-item">
              <h4>Organization Committee, ZS Cares</h4>
              <h5>Sep'21 - Present</h5>
              <ul>
                <li>Organize various CSR events by partnering with NGOs around Pune</li>
                <li>Handle articles, promotions and logistics for these activities</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Onboarding, Engagement and Teaching Sessions at ZS</h4>
              <h5>Mar'24 - Present</h5>
              <ul>
                <li>Take python, coding, best practices sessions for over 200 new resources</li>
                <li>Review and provide feedback on onboarding projects and exercises</li>
                <li>Lead a team of 12+ members to plan and conduct activities</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Chairperson, Texephyr Technical Event</h4>
              <h5>Nov'18 - Jul'21</h5>
              <ul>
                <li>Led a team of 300+ people to organize a national-level technical fest</li>
                <li>Conducted various workshops for 500+ students</li>
                <li>Generated revenue worth more than INR 10,00,000</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Event Lead, Writer's Web Club</h4>
              <h5>Aug'17 - Oct'18</h5>
              <ul>
                <li>Co-led a 10-person team to organize book readings and events</li>
                <li>Organized more than 20+ competitions for club members</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Other Volunteer Activities</h4>
              <ul>
                <li>Teaching under the Teach for India Initiative</li>
                <li>Tree Plantation, Cleanliness Drives</li>
                <li>Coordinator for a rural immersion program</li>
                <li>Coordinator in National Study Program</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;