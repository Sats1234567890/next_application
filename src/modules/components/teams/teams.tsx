// TeamCards.jsx
import { teams } from "@/teams";
import React from "react";
import Link from "next/link";

export default function TeamCards() {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        Our dedicated team works with passion to bring Chino Organica treasures to the world.
      </p>

      <div className="flex justify-center gap-3 ">
        {teams.map((member) => (
          <Link key={member.id} href={`/teams/${member.id}`} passHref>
            <div className="bg-white rounded-lg shadow cursor-pointer p-3 w-55 flex flex-col items-center hover:border border-green-500">
              <div className="w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
