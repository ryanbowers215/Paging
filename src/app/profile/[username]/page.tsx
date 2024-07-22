"use client";
import { useParams } from "next/navigation";

const ProfilePage = () => {
  const { username } = useParams();
  return <div>{username}</div>;
};

export default ProfilePage;
