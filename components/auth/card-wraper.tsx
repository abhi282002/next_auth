"use client";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Header } from "./header";
import { Social } from "@/components/auth/social";
import BackButton from "@/components/BackButton";
interface CardWraperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonlabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
const CardWraper: FC<CardWraperProps> = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonlabel,
  showSocial,
}) => {
  return (
    <Card className="w-[400x] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonlabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWraper;
