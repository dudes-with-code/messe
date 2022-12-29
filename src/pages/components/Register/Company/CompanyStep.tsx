import CompanyDetails from "./CompanyDetails";

export default function CompanyStep() {
  return (
    <div>
      <h1 className="align-center mb-18 h-28 justify-center pt-44 text-center text-4xl font-bold text-slate-200">
        Company
      </h1>

      <div className="mt-28 flex flex-wrap items-center justify-center gap-3.5">
        <CompanyDetails />
      </div>
    </div>
  )
}
