import ImageUpload from "./ImageUpload";
import UseDeviceCamera from "./UseDeviceCamera";


export default function PictureStep() {
  return (
    <div className="flex-col py-5 w-full h-full justify-center items-center align-center text-center">
      <div className="pt-44">
        <ImageUpload />
      </div>
      <p className="text-xl text-[#F4F4F9] my-3">- or - </p>
      <div className="max-w-[150] max-h-48">
        <UseDeviceCamera />
      </div>
    </div >
  );
}
