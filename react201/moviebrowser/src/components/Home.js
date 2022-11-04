import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              dignissimos magnam sunt possimus nihil id, esse ut delectus sint
              explicabo soluta placeat tempore voluptas nam amet dolorem aperiam
              voluptates. Perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
