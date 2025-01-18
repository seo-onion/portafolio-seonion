import Window from "./Window";
import Button from "./Button";
interface TechnicalSkillsProps {
  title: string;
  list: string[];
  img: React.ReactNode;
}

export default function TechnicalSkills(props: TechnicalSkillsProps) {
  const { title, list, img } = props;

  return (
    <div className="w-full h-auto flex justify-center mt-[40px] mb-[40px]">
      <Window
      width="85%"
      height="auto"
      colors={["#009A5E", "#FC7DA8"]}
      title="Habilidades técnicas"
    >
      <div className="w-full h-full flex flex-row items-center pt-4 pb-8">
        <div className="ml-4 mr-8">
          <div className="bg-backgroundColor p-4 border-[3px] border-black ">{img}</div>
        </div>

        <div className="flex-col mr-4">
          <div className="">
            <h3 className="text-2xl font-bold mb-2 bubblegum-sans-regular">{title}</h3>
            <ul className="list-disc bubblegum-sans-regular pl-4">
              {list.map((item, index) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Window>
    </div>
  );
}
