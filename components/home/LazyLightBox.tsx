import image1 from "@/assets/futomomo_01.jpg"
import image2 from "@/assets/futomomo_02.jpg"
import image3 from "@/assets/futomomo_03.jpg"
import image4 from "@/assets/futomomo_04.jpg"
import image5 from "@/assets/futomomo_05.jpg"
import image6 from "@/assets/futomomo_06.jpg"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "../NextJsImage";

export default function LazyLightBox({ index, handleCloseLightBox }: { index: number, handleCloseLightBox: any }) {
  return (
    <Lightbox
      index={index}
      slides={[image1, image2, image3, image4, image5, image6]}
      open={index >= 0}
      close={handleCloseLightBox}
      controller={{ closeOnBackdropClick: true }}
      plugins={[Fullscreen, Zoom]}
      render={{ slide: NextJsImage }}
    />
  )
}