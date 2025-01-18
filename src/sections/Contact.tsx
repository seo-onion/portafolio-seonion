import Window from "../components/Window"
import Form from "../components/Form"
import Channel from "../components/Channel"
export default function Contact() {
  return (
    <div className="bg-backgroundColor pt-[100px] contact pb-[40px]">
      <Window width="380px" height="140px" colors={["#048CD6", "#009A5E"]}>
        <div className="w-full h-full flex justify-center aling-center">
          <h1 className="cherry-cream-soda-regular text-[48px]">Contactame!</h1>
        </div>
      </Window>

      <Form/>
      <div className="w-full h-auto container-chanel">
        <Channel link="https://www.instagram.com/sebas_c_hernandez/" icon={<ion-icon name="logo-instagram" style={{ fontSize: "80px" }}></ion-icon>}/>
        <Channel link="https://github.com/seo-onion" icon={<ion-icon name="logo-github" style={{ fontSize: "80px" }}></ion-icon>}/>
        <Channel link="https://github.com/Ce-o-dos" icon={<ion-icon name="logo-github" style={{ fontSize: "80px" }}></ion-icon>}/>
      </div>
    </div>
  )
}
