import BestMassage from "../../assets/Images/Blog/BestMassage.png";
import faceMassage1 from "../../assets/Images/Blog/Face.png";
import manMassage2 from "../../assets/Images/young-calm-man-relaxing-in-sauna-in-spa.png";
import girlMassage3 from "../../assets/Images/girl_relaxing.png";
import spineMassage4 from "../../assets/Images/Blog/SpineDocsMassagetherapyrelievesbackpain.png";

export default function BestSpaSection() {
  return (
    <div className="bg-gray-100">
      {/* First Row */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-[400px]">
          <img
            src={BestMassage || "/placeholder.svg"}
            alt="Planet Spa Reception"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Best Massage In Pokhara
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to Planet Spa – the best spa in Pokhara! Experience ultimate
            relaxation and rejuvenation in a serene setting. From soothing
            massages to luxurious wellness treatments, we offer a perfect escape
            for your mind and body.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* First Column */}
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-[#D3D3D3]">
              <h2 className="text-center text-4xl font-semibold text-gray-800">
                Best Spa In
                <br />
                Pokhara
              </h2>
            </div>

            {/* Second Column */}
            <div className="h-[250px] overflow-hidden rounded-2xl">
              <img
                src={faceMassage1 || "/placeholder.svg"}
                alt="Face Massage"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Third Column */}
            <div className="h-[250px] overflow-hidden rounded-2xl">
              <img
                src={manMassage2 || "/placeholder.svg"}
                alt="Man in Sauna"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Fourth Column */}
            <div className="flex h-[250px] flex-col justify-center rounded-2xl bg-[#D3D3D3] p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Best Massage/ Pedicure/ Facial
              </h3>
              <p className="text-gray-600">
                "Planet Spa is the best spa in Pokhara, offering top-notch
                relaxation, sauna, steam baths, manicure/pedicure and luxurious
                treatments for your ultimate wellness experience."
              </p>
            </div>

            {/* Fifth Column */}
            <div className="h-[250px] overflow-hidden rounded-2xl">
              <img
                src={girlMassage3 || "/placeholder.svg"}
                alt="Relaxation Service"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Sixth Column */}
            <div className="h-[250px] overflow-hidden rounded-2xl">
              <img
                src={spineMassage4 || "/placeholder.svg"}
                alt="Spine Massage"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
