import React from "react";

interface Props {
  params: { id: string };
}

function ProfilePage({ params }: Props) {
  return <div>{params.id}</div>;
}

export default ProfilePage;
