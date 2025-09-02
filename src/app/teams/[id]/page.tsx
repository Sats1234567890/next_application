import Image from "next/image";
import { teams } from "@/teams";

interface Params {
  params: {
    id: string;
  };
}

export default function TeamMemberPage({ params }: Params) {
  const member = teams.find((m) => m.id === Number(params.id));

  if (!member) return <p>Member not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row gap-6">
      {/* Left Column: Image + Contact */}
      <div className="md:w-1/3 flex flex-col items-center gap-4">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
        {member.contact && (
          <p className="mt-2 text-sm font-medium text-gray-700">
            (Contact: {member.contact})
          </p>
        )}
      </div>

      {/* Right Column: Details + Bio */}
      <div className="md:w-2/3 relative flex flex-col p-4 rounded-lg overflow-hidden">
        {/* Container for Details and Background Leaf */}
        <div className="relative flex-grow"> {/* Use flex-grow to make it take available space */}
          {/* Background Leaf Image */}
          <div className="absolute top-0 right-0 h-full w-1/2 -z-0">
            <Image
              src="/assets/about/leaf.png"
              alt="Background Leaf"
              fill
              className="object-cover object-right opacity-60"
            />
          </div>

          {/* Details Section */}
          <div className="relative z-10 space-y-3 text-gray-700 pb-4"> {/* Added padding-bottom */}
            <h2 className="text-2xl font-bold pb-2 text-gray-800 relative">
              Detail of {member.name.split(" ")[0]}
              <span className="absolute left-0 bottom-0 w-1/3 h-1 bg-green-500"></span>
            </h2>
            <p>
              <span className="font-semibold">Name :</span> {member.name}
            </p>
            <p>
              <span className="font-semibold">Position :</span> {member.position}
            </p>
            <p>
              <span className="font-semibold">Education :</span> {member.education}
            </p>
            {member.certification && <p>{member.certification}</p>}
            <p>
              <span className="font-semibold">Skills :</span> {member.skills.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Vision :</span> {member.vision}
            </p>
          </div>
        </div>

        {/* Full-width border above bio */}
        <div className="border-t my-4 relative z-10"></div> 

        {member.bio && (
          <div className="w-full relative z-10 text-gray-800">
            <h3 className="font-semibold text-lg mb-2">Bio :</h3>
            <p className="leading-relaxed">{member.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}