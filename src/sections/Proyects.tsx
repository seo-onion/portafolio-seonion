import Proyect from "../components/Proyect";
import proyect1 from "../../public/paintjs.gif";
import proyecto2 from "../../public/clock.gif";
import proyecto3 from "../../public/backendatuservicio.png"
import proyecto4 from "../../public/auth.gif"
import Window from "../components/Window";

export default function Proyects() {
  return (
    <div className="bg-backgroundColor pt-[100px] proyects">
      <Window width="360px" height="140px" colors={["#048CD6", "#009A5E"]}>
        <div className="w-full h-full flex justify-center aling-center">
          <h1 className="cherry-cream-soda-regular text-[58px]">Proyectos</h1>
        </div>
      </Window>

      <div className="proyect-container w-full h-auto">
        <Proyect
          img={proyect1}
          title="Paint Js"
          link="https://ce-o-dos.github.io/paint-js/"
          description="Este proyecto es una aplicación web interactiva desarrollada con JavaScript y Canvas de HTML5. Permite a los usuarios dibujar en un lienzo digital utilizando diferentes herramientas como lápiz, colores personalizados y grosor ajustable. Además, incluye funcionalidades básicas como guardar las creaciones en formato de imagen. "
        />

        <Proyect
          img={proyecto2}
          title="Clock C++"
          link="https://github.com/Ce-o-dos/Clock"
          description="Este proyecto implementa un reloj funcional en C++ que se visualiza en consola. Permite mostrar el tiempo en formato de horas, minutos y segundos, actualizándose en tiempo real."
        />

        <Proyect
          img={proyecto3}
          title="AtuServicio Backend"
          link="https://github.com/CS2031-DBP/proyecto-backend-proyectodbp-atuservicio"
          description="ATuServicio es una innovadora plataforma web y móvil desarrollada con Java y Spring Boot, diseñada para conectar a usuarios con servicios profesionales y técnicos de manera rápida y eficiente. Inspirada en plataformas como Uber, permite la negociación de precios, la visualización de proveedores en tiempo real mediante Google Maps, y la gestión segura de pagos y acuerdos. El proyecto incluye un robusto backend, autenticación basada en JWT, pruebas automatizadas y comunicación en tiempo real mediante WebSockets. Desplegado en AWS, ATuServicio busca ser una solución integral para necesidades cotidianas."
        ></Proyect>

        <Proyect
        img={proyecto4}
        title="Autenticación con AWS Cognito y Amplify"
        link="https://master.d239ou9bkmwl9w.amplifyapp.com/"
        description="Aplicación móvil en React Native que utiliza AWS Amplify para autenticación de usuarios con AWS Cognito. Incluye registro, inicio de sesión, recuperación de contraseñas y manejo seguro de sesiones con tokens JWT. Desplegado con Amplify CLI,">

        </Proyect>
      </div>
    </div>
  );
}
