interface ButtonProps {
  text: string;
  size: number;
  icon?: string;
  id_tag?: string
}

export default function Button(props: ButtonProps) {
  const { text, size, icon, id_tag } = props;

  return (
    <> 
      <button className={`border-[3px] border-black w-auto h-[40px] flex flex-row items-center justify-around bubblegum-sans-regular mt-[5px] hover:bg-red hover:text-white p-1 ${id_tag}`}>
        <p className={`${id_tag}`}>{text}</p>
        {icon === "download" && (
          <ion-icon
            name="download-outline"
            style={{ fontSize: `${size}px` }}
          ></ion-icon>
        )}
        {icon === "visit" && (
          <ion-icon
            name="compass-outline"
            style={{ fontSize: `${size}px` }}
          ></ion-icon>
        )}
        {icon === "send" && (
          <ion-icon
            name="send"
            style={{ fontSize: `${size}px` }}
          ></ion-icon>
        )}
      </button>
    </>
  );
}
