export default function Bar() {
    return (
      <div className="w-full h-full bg-purple-500 flex items-center justify-around">
        {/* Primera sección de flechas */}
        <ion-icon name="play-back" style={{ fontSize: "40px"}} ></ion-icon>
  
        {/* Círculo central */}
        <ion-icon name="play" style={{ fontSize: "40px" }}></ion-icon>
  
        {/* Segunda sección de flechas */}
        <ion-icon name="play-forward" style={{ fontSize: "40px" }}></ion-icon>
      </div>
    );
  }
  