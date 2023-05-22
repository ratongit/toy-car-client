import '../home/Home.css'
const Carousel = () => {
    return (
<>
<div className="carousel w-full my-10  rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="    https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8268.jpg?w=740
" className="w-full lg:w-10/12 mx-auto md:h-3/4 rounded-xl"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/superheroes-children-playing-home_411285-1169.jpg?w=740" className="w-full lg:w-10/12 mx-auto md:h-3/4 rounded-xl"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/children-s-toys-table_199743-2840.jpg?size=626&ext=jpg&ga=GA1.1.1378343160.1684426870&semt=ais"  className="w-full lg:w-10/12 mx-auto md:h-3/4 rounded-xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://as2.ftcdn.net/v2/jpg/01/77/54/87/1000_F_177548745_RoP77sEX2EHAnb7gjiaApzutefx39P6R.jpg" className="w-full lg:w-10/12 mx-auto md:h-3/4 rounded-xl"  />
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