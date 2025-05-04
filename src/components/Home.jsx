import image from "../assets/bruce.jpg";

function Home({name = "Jerome", work = "Software Developer", age = 18}) {
    return (
      <div className="home">
      <img 
        src={image} 
        alt="Jerome" 
        className="profile-image" 
        style={{ borderRadius: "50%", width: "150px", height: "150px" }} 
      />
      <h1>Welcome to my website!</h1>
      <p>
        My name is {name}, I am a {age} y/o {work}.
      </p>
      <p>
        This is my first React application. I hope you enjoy it!
      </p>
      <p>
        Feel free to explore and learn more about me.
      </p>
      <p>
        You can find my projects and contact information in the navigation bar.
      </p>
      <p>
        Thank you for visiting my website!
      </p>
      <p>
        I hope you have a great day!
      </p>
      <p>
        If you have any questions or feedback, please feel free to reach out to me.
      </p>
      <p>
        I would love to hear from you!
      </p>
      <p>
        Have a great day!
      </p>
      <p>
        Best regards,
      </p>
      <p>
        Jerome
      </p>
      <p>
        Software Developer
      </p>
      <img 
        src={image} 
        alt="Jerome" 
        className="profile-image" 
        style={{ borderRadius: "50%", width: "150px", height: "150px" }} 
      />
      </div>
    );
  }
  export default Home;    