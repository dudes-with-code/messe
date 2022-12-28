import ImageUpload from "./ImageUpload";
import UseDeviceCamera from "./UseDeviceCamera";


export default function PictureStep() {
  return (
    <div className="flex-col py-5 w-full h-full justify-center items-center align-center text-center">
      <div className="pt-44">
        <ImageUpload />
      </div>
      <p>- or - </p>
      <div>
        <UseDeviceCamera />
      </div>
    </div>
  );
}
