function Body() {
  const eye = "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div className="flex justify-center  h-screen" style={{ backgroundImage: `url(${eye})`,  backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <p className=" font-bold p-2">Welcome to my api</p>
    </div>
  );
}

export default Body;
