interface WindowProps {
  children: React.ReactNode;
  width?: string;
  height: string;
  colors: string[];
  title?: string;
  class_tag?: string
}

export default function Window(props: WindowProps) {
  const { children, width, height, colors, title, class_tag } = props;

  return (
    <div
    
      style={{
        width: `${width}`,
        height: `${height}`
      }}
      className={`bg-screenColor border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0)] window ${class_tag || ""} `}
    >
      <div className="w-full h-10 border-b-[3px] border-black flex items-center">
        <div
          className="mx-1.5 w-6 h-6 rounded-full border-[3px] border-black"
          style={{ backgroundColor: `${colors[0]}` }}
        ></div>
        <div
          className="mx-1.5 w-6 h-6 rounded-full border-[3px] border-black"
          style={{ backgroundColor: `${colors[1]}` }}
        ></div>
        <p className="text-lg bubblegum-sans-regular">{title}</p>
      </div>
      {children}
    </div>
  );
}
