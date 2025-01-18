import Window from "./Window";
import Button from "./Button";
interface ChannelProps {
  icon: React.ReactNode;
  link: string
}

export default function Channel(props: ChannelProps) {
  const { icon, link } = props;
  return (
    <Window width="85%" height="auto" colors={["black", "black"]}>
      <div className="flex w-full pl-[20px] h-full items-center pt-[10px]">
        <div className="w-[30%] h-full flex items-center ">
        {icon}
        </div>

        <div className="w-[70%] h-full items-center pl-[40px]">
        <a href={link} target="_blank">
        <Button text="Visitar" icon="visit" size={36} />
        </a>
        </div>
      </div>
    </Window>
  );
}
