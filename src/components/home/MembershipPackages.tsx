
interface MembershipPackage {
    title: string;
    description: string;
    price: string;
    image: string;
  }
  
const MembershipPackages = () => {
    const packages: MembershipPackage[] = [
      {
        title: "Health Member",
        description: "This is our health membership level and includes 25 times Sauna/Steam",
        price: "Rs. 10000/-",
        image: "/path-to-health-member.jpg",
      },
      {
        title: "VIP Membership",
        description: "This is our most popular membership level and includes additional benefit like 40 Body Massage and 25 times Sauna/Steam",
        price: "Rs. 40000/-",
        image: "/path-to-vip-member.jpg",
      },
      {
        title: "Luxury Member",
        description: "This membership includes additional benefits like 25 Body Massage and 12 Sauna/Steam",
        price: "Rs. 25000/-",
        image: "/path-to-luxury-member.jpg",
      },
    ];
  
    return (
      <div className="p-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Annual Membership Package</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img src={pkg.image} alt={pkg.title} className="rounded-md w-full h-56 object-cover" />
              <h3 className="text-2xl font-semibold mt-4 text-center">{pkg.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{pkg.description}</p>
              <p className="text-xl font-bold text-center mt-4 bg-brown text-white py-2 rounded-lg">{pkg.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default MembershipPackages;
