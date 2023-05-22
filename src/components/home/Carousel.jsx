import '../home/Home.css'
const Carousel = () => {
    return (
<>
<div className="carousel w-full mt-10  rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://image.slidesdocs.com/responsive-images/background/futuristic-cool-sports-car-illustration-powerpoint-background_83916ec9b2__960_540.jpg" className="w-full lg:w-8/12 mx-auto md:h-3/4 rounded-xl"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://image.slidesdocs.com/responsive-images/background/season-light-technology-cool-indoor-map-racing-model-speed-powerpoint-background_e011e526ae__960_540.jpg" className="w-full lg:w-10/12 mx-auto md:h-3/4 rounded-xl"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.cnn.com/api/v1/images/stellar/prod/190319170117-lamborghini-terzo-millenio.jpg?q=w_3077,h_1994,x_0,y_0,c_fill"  className="w-full lg:w-10/12 mx-auto md:h-3/4 rounded-xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://image.slidesdocs.com/responsive-images/background/sports-car-cool-illustration-powerpoint-background_76c1072199__960_540.jpg" className="w-full lg:w-11/12 mx-auto md:h-3/4 rounded-xl"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</>    

);
};

export default Carousel;