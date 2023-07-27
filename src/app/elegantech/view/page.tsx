import background from "@/../public/background.png";
import whiteboard from "@/../public/whiteboard.png";
import flags from "@/../public/flags.svg"
import envelope from "@/../public/envelope.png"
import logo from "@/../public/logo.png"


import DynamicMoldure from "@/app/components/DynamicMoldure";


export default function ViewMessage() {
    return (
        <div className='moldure-container'>
        <DynamicMoldure
          backgroundPath={background.src}
          whiteboardPath={whiteboard.src}
          flagsPath={flags.src}
          envelopPath={envelope.src}
          logoPath={logo.src}
          message={"Mió que isso, só dois disso!"}
          sender="Ass: Paulo"
          destination="Para: INDT"
        />
      </div>
    )
}