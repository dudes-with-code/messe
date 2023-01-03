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
    <div className="p-3 w-36 h-28 bg-[#586F7C] items-center justify-center rounded-lg">
      <div className="flex mb-3">
        <div className={change <= 0 ? "w-1 h-7 bg-red-500 mr-2" : "w-1 h-7 bg-green-500 mr-2"}>
        </div>
        <p className="text-xl text-[#F4F4F9]">{title}</p>
      </div>
      <div className="flex h-full">
        <p className="pr-3 text-4xl text-[#F4F4F9]">{totalNum}</p>
        <p className={change <= 0 ? "baseline-center items-center justify-center h-full text-red-500" : "baseline-center items-center justify-center h-full text-green-500"}>{change > 0 ? "+" : ""} {change}</p>
      </div>
    </div>
  )
}
