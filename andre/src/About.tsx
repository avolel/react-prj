import ARV_Logo from "./assets/arv.jpg";

function About() {
  return (
    <>
      <main>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={ARV_Logo}
                className="d-block mx-lg-auto img-fluid"
                alt="ARV"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Andre Volel – Software Developer | AI & Web Solutions Architect
              </h1>
              <p className="lead">
                With over a decade of experience as a software developer, I
                specialize in crafting modern, scalable applications that make a
                real impact—whether it's simplifying communication through AI
                chatbots or streamlining operations with robust backend systems.
                I'm fluent in C#, .NET, and modern JavaScript frameworks like
                React, VueJS, and NextJS, and I’ve had the privilege of building
                everything from clinical tracking tools for hospitals to
                real-time messaging platforms used by thousands.
              </p>
              <p className="lead">
                Most recently at FreedomCare, I led the development of a
                conversational chatbot that now supports hundreds of caregivers
                daily. I also rebuilt it using Flowise for enhanced scalability
                and maintainability—just one example of how I bring innovation
                to life with AI technologies. Whether it's deploying services in
                Azure or building notification systems with Twilio, I’m all
                about combining smart architecture with practical solutions.
              </p>
              <p className="lead">
                Collaboration, secure coding, and a sharp eye for user
                experience have been key themes throughout my career—from my
                early days at Capital IQ to building critical tools during the
                COVID-19 pandemic at Weill Cornell Medicine. I thrive at the
                intersection of technology and human impact, and I'm always
                exploring new ways to make software more intuitive, scalable,
                and effective.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default About;
