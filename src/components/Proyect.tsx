import Window from "./Window"
import Button from "./Button"
type Props = {
    img: any,
    title: string,
    description: string,
    link: string
}

export default function Proyect({img, title, description, link}: Props) {
  return (
    <Window width="85%" height="auto" colors={["#552CB8", "#FD5A47"]} class_tag="proyecto_window">
    <div className="w-full h-full">
      <img src="" alt="" />
      <div >
        <div
          className="w-full h-[160px] bg-cover border-b-[3px] border-black"
          style={{ backgroundImage: `url(${img})` }}
        />

        <div className="p-[10px]">
          <h2 className="text-3xl cherry-cream-soda-regular">{title}</h2>

          <p className="text-2xl bubblegum-sans-regular">
            {description}
          </p>
          <a href={link} target="_blank">
          <Button text="Visitar proyecto" size={34} icon="visit" />
          </a>
        </div>
      </div>
    </div>
  </Window>
  )
}