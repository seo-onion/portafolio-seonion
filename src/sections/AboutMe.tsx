import Window from "../components/Window";
import Button from "../components/Button";
import SoftSkill from "../components/SoftSkill";
import TechnicalSkills from "../components/TechnicalSkills";

export default function AboutMe() {
  return (
    <div className="bg-backgroundColor pt-[100px] about_me">
      <Window width="378px" height="140px" colors={["#048CD6", "#009A5E"]}>
        <div className="w-full h-full flex justify-center aling-center">
          <h1 className="cherry-cream-soda-regular text-[60px]">Sobre mi</h1>
        </div>
      </Window>
      <Window
        width="85%"
        height="440px"
        colors={["#009A5E", "#FC7DA8"]}
        title="Nivel educativo"
      >
        <div className="w-full h-full bubblegum-sans-regular mt-[10px]">
          <div className="p-[10px] flex flex-col gap-2">
            <h3 className="text-2xl">Estudiante graduado del IB</h3>
            <div className="w-full border-[3px] border-black">
              <p>█ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █</p>
            </div>

            <div className="w-full flex justify-end">
              <a
                href="https://drive.google.com/file/d/1JlXVTTu4ZU_XPfxruT-vaKfy4Eg9WohD/view?usp=sharing"
                target="_blank"
              >
                <Button text="Ver constancia" size={34} icon="download" />
              </a>
            </div>
          </div>

          <div className="p-[10px] flex flex-col gap-2">
            <h3 className="text-2xl">
              Estudiante de Ciencias de la computación en la universidad de
              Ingeniería y tecnología
            </h3>
            <div className="w-full border-[3px] border-black">
              <p>█ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █</p>
            </div>

            <div className="w-full flex justify-end">
              <a href="https://drive.google.com/file/d/1Lsj5Q4_NjVzOPkwd7htGkUnpBNPzqa3T/view?usp=sharing" target="_blank">
              <Button text="Ver constancia" size={34} icon="download" />
            
              </a>
              </div>
          </div>
        </div>
      </Window>

      <div className="skills-container w-full h-auto flex items-center justify-center">
        <div className="w-full flex items-center justify-center soft-skills-container">
          <Window
            width="85%"
            height="auto"
            colors={["#009A5E", "#FC7DA8"]}
            title="Habilidades blandas"
            class_tag="container-habilidades-blandas"
          >
            <div className="w-full grid grid-cols-2 gap-2 p-2 soft-skills-container place-items-center">
              <SoftSkill
                img={
                  <ion-icon
                    name="megaphone"
                    style={{ fontSize: `60px` }}
                  ></ion-icon>
                }
                text="Excelente habilidad para comunicar ideas."
              />

              <SoftSkill
                img={
                  <ion-icon
                    name="library"
                    style={{ fontSize: `60px` }}
                  ></ion-icon>
                }
                text="Colaboración en equipos ágiles"
              />

              <SoftSkill
                img={
                  <ion-icon
                    name="git-branch"
                    style={{ fontSize: `60px` }}
                  ></ion-icon>
                }
                text="Resolución de problemas y conflictos"
              />

              <SoftSkill
                img={
                  <ion-icon name="bug" style={{ fontSize: `60px` }}></ion-icon>
                }
                text="Adaptabilidad a diversos equipos y sistemas"
              />

              <SoftSkill
                img={
                  <ion-icon
                    name="school"
                    style={{ fontSize: `60px` }}
                  ></ion-icon>
                }
                text="Habilidad para aprender nuevas tecnologías"
              />
            </div>
          </Window>
        </div>

        <div className="technical-skills-container">
          <TechnicalSkills
            title="Frontend"
            list={[
              "HTML, CSS y JavaScript",
              "React con TypeScript",
              "TailwindCSS y Sass",
              "Vite",
            ]}
            img={<ion-icon name="code" style={{ fontSize: "60px" }}></ion-icon>}
          />

          <TechnicalSkills
            title="Mobile"
            list={["React Native con Typescript", "Expo router"]}
            img={
              <ion-icon
                name="phone-portrait-sharp"
                style={{ fontSize: "60px" }}
              ></ion-icon>
            }
          />

          <TechnicalSkills
            title="Backend"
            list={["Springboot", "FastApi", "Django", "NodeJS"]}
            img={
              <ion-icon
                name="cloud-sharp"
                style={{ fontSize: "60px" }}
              ></ion-icon>
            }
          />

          <TechnicalSkills
            title="Base de datos"
            list={["PostgreSQL"]}
            img={
              <ion-icon
                name="server-sharp"
                style={{ fontSize: "60px" }}
              ></ion-icon>
            }
          />

          <TechnicalSkills
            title="Contenedores y DevOps"
            list={["Docker", "Postman"]}
            img={
              <ion-icon
                name="logo-docker"
                style={{ fontSize: "60px" }}
              ></ion-icon>
            }
          />

          <TechnicalSkills
            title="Control de versiones"
            list={["Git", "Github"]}
            img={
              <ion-icon
                name="git-network-sharp"
                style={{ fontSize: "60px" }}
              ></ion-icon>
            }
          />
        </div>
      </div>
    </div>
  );
}
