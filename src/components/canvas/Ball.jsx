import meImg from "../me.jpg";

const BallCanvas = () => {
  return (
    <div className="flex justify-center lg:items-center xs:items-start  h-screen bg-transparent">
      <div className="relative w-60 h-60 flex items-center justify-center">
        {/* Spinning circular border */}
        <div className="absolute w-64 h-64 rounded-full border-4 border-purple-600 animate-spin z-0" />

        {/* Profile image on top */}
        <img
          src={meImg}
          alt="me"
          className="w-59 h-59 rounded-full object-cover border-4 border-black z-10 bg-white"
        />
        
      </div>
    
    </div>
  );
};

export default BallCanvas;
