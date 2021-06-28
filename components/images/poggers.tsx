import Image from 'next/image'

const PoggersComponent = () => (
  <Image
    src="/../public/images/pog.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={200} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

export default PoggersComponent