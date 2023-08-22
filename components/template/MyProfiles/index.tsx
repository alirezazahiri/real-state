"use client";

import LoadingTD from "@/components/module/LoadingTD";
import ProfileCard from "@/components/module/ProfileCard";
import { IProfileSchema, IUserSchema } from "@models";
import React, { useEffect, useState } from "react";

function MyProfiles() {
  const [user, setUser] = useState<IUserSchema&{profiles: IProfileSchema[]} | null>(null);
  const [loading, setLoading] = useState(true);
  console.log(user?.profiles);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch("/api/profile/list");
      const data = await res.json();
      setUser(data.user);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <LoadingTD />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {user?.profiles?.map(({ _id, address, category, title }) => (
            <ProfileCard
              key={_id}
              address={address}
              category={category}
              title={title}
              username={user.email}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyProfiles;
