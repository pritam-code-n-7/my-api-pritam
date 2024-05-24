import { useNavigate } from "react-router-dom";
import BlackButton from "../Button/BlackButton.js";
function Body() {
  const route = useNavigate();
  function handleRoute() {
    route("/post");
  }

  const eye =
    "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div className="h-screen flex flex-col">
      <div
        className="flex justify-center  h-screen"
        style={{
          backgroundImage: `url(${eye})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Welcome to my api
        </p>
      </div>
      <div className="flex justify-center p-4">
        <BlackButton name="post" type="button" onClick={handleRoute} />
      </div>
    </div>
  );
}

export default Body;
