import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo sed molestias harum itaque tempore ipsa sint tenetur,
              laborum, doloribus, ullam tempora porro dolores libero molestiae
              qui. Dolor deserunt in vero accusamus ipsam velit quam iste dolore
              voluptates eligendi odit exercitationem provident veniam odio,
              fuga necessitatibus ut non debitis aut sequi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
