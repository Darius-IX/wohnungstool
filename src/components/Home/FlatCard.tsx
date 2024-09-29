import { exampleFlatData } from "../../ExampleFlatData";
import { flatDataKeyConstants } from "../../FlatDataKeyConstants";

interface FlatCardProps {
  flatKey: string;
}

// symbols for everything, edit, delete, different size for different importance
// mit aufklappen option
const FlatCard = ({ flatKey }: FlatCardProps) => {
  const keyConst = flatDataKeyConstants;
  const flatData = exampleFlatData[flatKey];
  return (
    <div className="border-2 border-sky-800 rounded-xl p-2">
      <div className="flex justify-between gap-2">
        <div className="flex-auto">{flatData[keyConst.title]}</div>
        <div className="flex-none w-fit">
          <div className="flex gap-1">
            <i className="bx bx-euro w-fit content-center"></i>
            <div className="w-fit content-center">
              {flatData[keyConst.rent]}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex gap-1">
        <i className="bx bx-map-pin w-fit content-center"></i>
        <div className="w-fit content-center">{flatData[keyConst.adress]}</div>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-1">
          <i className="bx bx-phone w-fit content-center"></i>
          <div className="w-fit content-center">
            {flatData[keyConst.telephone]}
          </div>
        </div>
        <div className="flex gap-1">
          <i className="bx bx-envelope-open w-fit content-center"></i>
          <div className="w-fit content-center">{flatData[keyConst.email]}</div>
        </div>
      </div>
      <div className="flex gap-1">
        <i className="bx bx-home-heart w-fit content-center"></i>
        <div className="w-fit content-center">
          {flatData[keyConst.distanceUKE]}
        </div>
        <i className="bx bx-time w-fit content-center"></i>
        <div>{flatData[keyConst.timeUKE]}</div>
        <i className="bx bx-train w-fit content-center"></i>
        <div>{flatData[keyConst.distanceTrain]}</div>
      </div>
      <div className="flex gap-1">
        <i className="bx bx-globe w-fit content-center"></i>
        <a
          className="w-fit content-center"
          target="_blank"
          rel="noreferrer"
          href={flatData[keyConst.link]}
        >
          {flatData[keyConst.key]}
        </a>
      </div>
      <div className="flex gap-1">
        <i className="bx bx-pencil w-fit content-center"></i>
        <div className="w-fit content-center">{flatData[keyConst.notes]}</div>
      </div>
      {/* edit und pencil, send and envelope-open, train */}
    </div>
  );
};

export default FlatCard;
