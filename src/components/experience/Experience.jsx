import "./experience.css";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Tech Stack</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_context">
            <article className="experience">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/240/html-5--v1.png"
                alt="html-5--v1"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/144/css3.png"
                alt="css3"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/144/javascript--v1.png"
                alt="javascript--v1"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/144/react-native.png"
                alt="react-native"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/144/typescript.png"
                alt="typescript"
              />
               <small>*learning</small>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/144/nextjs.png"
                alt="nextjs"
              />
              <small>*learning</small>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/48/python--v1.png"
            alt="python--v1"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/144/nodejs.png"
            alt="nodejs"
          />
          <small>*learning</small>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/144/000000/express-js.png"
            alt="express-js"
          />
          <small>*learning</small>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/144/mongodb.png"
            alt="mongodb"
          />
          <small>*learning</small>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/48/mysql-logo.png"
            alt="mysql-logo"
          />
          <small>*learning</small>
        </div>
      </div>
    </section>
  );
}
export default Experience;
