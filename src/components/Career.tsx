import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>MERN Stack | AI/ML Integration</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered scalable MERN applications including Moodify, reducing
              manual song selection time by 70%. Integrated MediaPipe AI for
              real-time emotion recognition.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>Amrapali University, Haldwani</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Currently pursuing BCA with a focus on DSA, DBMS, and Web
              Technologies. Maintaining a strong academic record with a CGPA of
              7.0.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
