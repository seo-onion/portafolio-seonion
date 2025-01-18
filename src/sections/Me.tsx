import Window from "../components/Window";
import profile from "../../public/foto.jpg";
import Bar from "../components/Bar";
import Button from "../components/Button";
export default function Me() {
  return (
    <div className="bg-backgroundColor pt-[40px] me">
      <Window
        height="160px"
        colors={["#048CD6", "#009A5E"]}
        width="320px"
        class_tag="hola"
      >
        <div className="w-full h-full flex justify-center aling-center">
          <h1 className="cherry-cream-soda-regular text-[78px]">HOLA!</h1>
        </div>
      </Window>

      <Window height="520px" colors={["#048CD6", "#009A5E"]}>
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* Contenedor de la imagen */}
          <div className="w-[90%] h-[60%] bg-purple border-[3px] border-black flex justify-center items-center">
            <img
              src={profile}
              alt="profile image"
              className="w-[70%] h-[90%] border-[3px] border-black object-cover"
            />
          </div>

          {/* Contenedor del componente Bar */}
          <div className="w-[90%] h-[20%] flex justify-center items-center">
            <Bar />
          </div>
        </div>
      </Window>

      <Window
        height="auto"
        colors={["#048CD6", "#009A5E"]}
        class_tag="presentacion_container"
      >
        <div className="w-full flex flex-col justify-center items-center presentacion_container">
          <p className="w-[90%] bubblegum-sans-regular text-2xl text-justify	presentacion ">
            Soy estudiante de la carrera de &nbsp;
            <strong>Ciencias de la Computación</strong> en &nbsp;
            <strong>UTEC</strong> y un apasionado por el &nbsp;{" "}
            <strong>desarrollo web</strong>. A lo largo de mi formación, he
            adquirido conocimientos en tecnologías de &nbsp;
            <strong>front-end</strong>, <strong>back-end</strong> y &nbsp;{" "}
            <strong>bases de datos</strong>, lo que me permite abordar proyectos
            con una perspectiva integral. Siempre estoy buscando aprender,
            mejorar mis habilidades y enfrentar nuevos desafíos tecnológicos.
          </p>

          <div className="w-full flex justify-end pb-[10px] pr-[10px]">
            <a href="https://drive.google.com/file/d/17VDCY4F8d760H358X7NEbzhA4KYk2BJQ/view?usp=sharing" target="_blank">
              <Button text="Ver CV" size={34} icon="download" id_tag="cv" />
            </a>
          </div>
        </div>
      </Window>
    </div>
  );
}
