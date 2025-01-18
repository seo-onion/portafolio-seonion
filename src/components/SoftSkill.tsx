interface SoftSkillProps {
  img: React.ReactNode;
  text: string;
}

export default function SoftSkill(props: SoftSkillProps) {
  const { img, text } = props;

  return (
    <div className="w-[160px] h-[160px] flex flex-col justify-center items-center mb-[16px] mt-[16px]">
      <div className="border-[3px] border-black w-[100px] h-[100px] flex justify-center items-center mb-[10px]">
        <div className="border-[3px] border-black w-[80px] h-[80px] bg-backgroundColor flex justify-center items-center">{img}</div>
        
      </div>
      <div className="border-[3px] border-black text-md bubblegum-sans-regular w-[160px] text-center">{text}</div>
    </div>
  );
}
