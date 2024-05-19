"use client";
import { UserInfo } from "@/components/user-info";
import { useSession } from "next-auth/react";
const ClientPage = () => {
  const session = useSession();
  return (
    <div>
      <UserInfo label="Client Component" user={session?.data?.user} />
    </div>
  );
};

export default ClientPage;
