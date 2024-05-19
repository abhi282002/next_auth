import BackButton from "../BackButton";
import { Card, CardFooter } from "../ui/card";
import { CardHeader } from "../ui/card";
import { Header } from "./header";

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! Something Went Wrong!" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};
