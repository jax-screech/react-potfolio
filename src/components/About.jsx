import jerome from "../assets/21.jpeg";

function Info() {
  return (
    <div className="info">
      <img
        src={jerome}
        alt="Jerome"
        className="profile-image"
        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
      />
      <h1>About</h1>
      <p>
        Jerome Patrick is an 18 y/o software developer with a passion for creating apps.
      </p>
      <p>
        He is currently learning React and is excited to build more complex applications.
      </p>
      <p>
        In his free time, he enjoys playing video games,listening to music, and exploring new technologies.
      </p>
      <p>
        He is also an avid reader and loves to learn about new topics.
      </p>
      <p>
        Jerome is always looking for new challenges and opportunities to grow as a developer.
      </p>
      <p>
        He is currently working on a few personal projects and is open to collaborating with others.
      </p>
      <p>
        If you would like to connect with him, feel free to reach out through the contact page.
      </p>
      <img
        src={jerome}
        alt="Jerome"
        className="profile-image"
        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
      />
    </div>
  );
}
export default Info;