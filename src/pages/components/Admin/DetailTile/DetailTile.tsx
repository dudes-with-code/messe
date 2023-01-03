interface DetailTileProps {
  totalNum: number | undefined,
  dailyChange: number | undefined,
  title: string
}



export default function DetailTile({ totalNum, dailyChange, title }: DetailTileProps) {
  let change = 0
  if (dailyChange != undefined) {
    change = dailyChange
  }
  return (
    <div className=" w-auto h-32 p-2 bg-[#586F7C] items-center justify-center rounded-lg grid grid-cols-4 grid-rows-2">
      <div className="col-start-1 col-end-4 row-start-1 flex gap-3.5">
        <div className={change <= 0 ? "w-1 h-10 bg-red-500" : "w-1 h-10 bg-green-500"}>

        </div>
        <p className=" text-[#F4F4F9]">{title}</p>
      </div>
      <div className="flex row-start-2 col-start-2 col-end-4">
        <p className="pr-3 text-4xl text-[#F4F4F9]">{totalNum}</p>
        <p className={change <= 0 ? " text-red-500" : "text-green-500"}>{change > 0 ? "+" : ""} {change}</p>
      </div>
    </div>
  )
}
