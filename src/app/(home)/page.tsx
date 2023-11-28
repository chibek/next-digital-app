import UserCard from "@/components/user-card";
import { User } from "@/types";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await data.json() as User[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col w-full gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </main>
  );
}
