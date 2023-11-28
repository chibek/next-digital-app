import { cn } from "@/lib/utils";
import { User } from "@/types/index";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface UserCard extends React.HTMLAttributes<HTMLDivElement> {
  user: User;
}

export default function UserCard({ user,className, ...props }: UserCard) {
  return (
    <Card
      className={cn(className, "h-full overflow-hidden rounded-sm")}
      {...props}
    >
      <CardHeader className="border-b p-0"></CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <CardTitle className="line-clamp-1">{user.name}</CardTitle>
        <CardDescription className="line-clamp-2">
            {user.email}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
