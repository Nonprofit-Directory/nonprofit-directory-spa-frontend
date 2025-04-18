
export function ProelImpactReportContainer() {
    return (
      <div className="bg-[var(--propel-rich-green)] text-white rounded-xl overflow-hidden w-full flex flex-col justify-between max-h-[600px]">
        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="cont relative w-full">
              <img src="https://cdn.prod.website-files.com/6149758b856b3d63d914d5a8/6177d4b4c4773970200f540b_Propel_Logo.svg" alt="Propel" className="w-50 h-20" />
              <h1 className="text-4xl absolute top-5 left-18">
            Propel 
          </h1>
            </div>
            <button className="bg-[var(--propel-ignite-orange)] text-white font-semibold rounded-full px-4 py-1">
              Download
            </button>
          </div>
          <div className="flex">
          <div className="text-4xl font-bold">Reporte de Impacto <span className="text-[var(--propel-ignite-orange)]">2023</span></div>
            <div className="w-full"></div>
          </div>
        </div>
        <div className="w-full h-full">
          <img src="https://cdn.prod.website-files.com/62f4a214915f956aa0896a80/674e5a0364276821e2c327b7_674e5922138ff27bf1fceea6_%255BThumbnail%255D%2520Aplica%2520a%2520grants%2520con%2520confianza.png" className="object-contain w-full h-full" />
        </div>
      </div>
    );
  }
  