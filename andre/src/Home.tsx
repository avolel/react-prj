import Carousel from "./Carousel";
import Card from "./Card";

function Home() {
  return (
    <>
      <main>
        <Carousel />
        <div className="container">
          <Card />
        </div>
      </main>
    </>
  );
}

export default Home;
