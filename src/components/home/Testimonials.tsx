import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  text: string;
  author: string;
}

const Testimonials = () => {
  const data: Testimonial[] = [
    {
      text: "Had a wonderful experience at Planet Spa! The atmosphere was calming, and the staff was friendly and professional. We got deep tissue massage and it was so good! My masseuse was so nice , she asked me if I was comfortable enough. The facilities were clean and well-kept. I highly recommend it for anyone looking to unwind and relax !",
      author: "Joshua Terringer",
    },
    {
      text: "Visited this place for a foot massage and it was really a nice experience.The whole team is very professional and dedicated. Most importantly the cleanliness of the place is commendable. Most of the places here in pokhara is unhygienic and not maintained well. Hope to visit again. Highly recommend for their professional service and reasonable pricing.",
      author: "Brian K.N",
    },
    {
      text: `I got the foot massage, hot stone massage and steam/sauna package. <br/> The massages were great! The steam/sauna was good.<br/> I liked that I could put the amount of water that I wanted on the stones in the sauna. I didn't like that the steam had constant steam pumping it out. It was intense!`,
      author: "Alex Dale",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-yellow-100 rounded-lg p-6 shadow-lg"
            >
              <CardContent>
                <div className="flex justify-center items-center mb-4">
                  <svg
                    className="transform rotate-180 w-10 h-24"
                    preserveAspectRatio="xMidYMid meet"
                    data-bbox="19.973 62.6 160.04 74.308"
                    viewBox="19.973 62.6 160.04 74.308"
                    height="400"
                    width="400"
                    xmlns="http://www.w3.org/2000/svg"
                    data-type="color"
                    role="presentation"
                    aria-hidden="true"
                    aria-label=""
                  >
                    <g>
                      <path
                        fill="#000002"
                        d="M107.443 113.262c0 19.604 16.131 35.483 35.639 34.711 17.787-.701 32.199-15.307 32.891-33.333.762-19.77-14.906-36.117-34.251-36.117h-.121c-6.24.025-10.8-6.023-8.928-12.058a71.563 71.563 0 0 1 4.764-11.628c.39-.592.39-1.381.195-1.974-.195-.394-.584-.789-.974-.789-.584-.197-1.168 0-1.947.592-8.181 7.106-15.192 16.383-19.867 26.647-4.284 9.474-6.816 19.54-7.206 30.199-.191 1.184-.191 2.566-.191 3.75h-.004Z"
                        data-color="1"
                      ></path>
                      <path
                        fill="#000002"
                        d="M25.175 113.262c0 19.604 16.131 35.483 35.64 34.711 17.785-.701 32.198-15.307 32.89-33.333.762-19.77-14.906-36.117-34.25-36.117h-.122c-6.24.025-10.8-6.023-8.928-12.058a71.576 71.576 0 0 1 4.764-11.628c.39-.592.39-1.381.195-1.974-.195-.394-.584-.789-.974-.789-.584-.197-1.168 0-1.947.592-8.18 7.106-15.192 16.383-19.866 26.647-4.285 9.474-6.817 19.54-7.207 30.199-.191 1.184-.191 2.566-.191 3.75h-.004Z"
                        data-color="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p
                  className="text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{ __html: testimonial.text }}
                ></p>
                <div className="flex justify-end">
                  <p className="text-[#8B4513] font-semibold">
                    - {testimonial.author}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
