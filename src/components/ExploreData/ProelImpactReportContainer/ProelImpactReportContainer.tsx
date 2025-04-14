
export function ProelImpactReportContainer() {
    return (
      <div className="bg-[var(--propel-rich-green)] text-white rounded-xl overflow-hidden max-w-[500px] w-full flex flex-col justify-between">
        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <img src="/logo-propel.svg" alt="Propel" className="h-6" />
            <button className="bg-[var(--propel-ignite-orange)] text-white font-semibold rounded-full px-4 py-1">
              Download
            </button>
          </div>
          <div className="text-3xl font-bold">Reporte de Impacto <span className="text-[var(--propel-ignite-orange)]">2023</span></div>
        </div>
        <div className="">
          {/* <img src="/img-impact-1.jpg" className="object-cover w-full h-full" />
          <img src="/img-impact-2.jpg" className="object-cover w-full h-full" />
          <img src="/img-impact-3.jpg" className="object-cover w-full h-full" />
          <img src="/img-impact-4.jpg" className="object-cover w-full h-full" />
          <img src="/img-impact-5.jpg" className="object-cover w-full h-full" />
          <img src="/img-impact-6.jpg" className="object-cover w-full h-full" /> */}
        </div>
      </div>
    );
  }
  