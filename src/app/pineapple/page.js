import Image from "next/image"

export default function Pineapple() {
    return (
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Young_Pineapple.jpg"
        alt="Pineapple should show up here, if not then something broke"
        width={588}
        height={892}
      />
    )
  }