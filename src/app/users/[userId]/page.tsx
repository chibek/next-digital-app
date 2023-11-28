import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/types";

interface UserPageProps {
  params: {
    userId: string;
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const userId = Number(params.userId);
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = (await data.json()) as User;

  return (
    <Card className="p-10">
      <CardTitle>{user.name}</CardTitle>
      <CardContent>
          <ul className="list-disc">
            <li>username: {user.username}</li>
            <li>email: {user.email}</li>
            <li>address: {user.address.city}</li>
            <li>website: {user.website}</li>
            <li>company: {user.company.name}</li>
          </ul>
      </CardContent>
    </Card>
  );
}
