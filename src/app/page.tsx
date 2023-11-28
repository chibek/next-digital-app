export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await data.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(users)}
    </main>
  );
}
