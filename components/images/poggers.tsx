import Image from 'next/image'

const PoggersComponent = () => (
  <Image
    src="https://qph.fs.quoracdn.net/main-qimg-415f72e718f2f55bc5696640155119ef" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={200} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

export default PoggersComponent