import { Card, CardContent, CardTitle } from "@/components/ui/card";
import UserTodo from "@/components/user-todo";
import { Album, Photo, Todo, User } from "@/types";
import Image from "next/image";

interface UserPageProps {
  params: {
    userId: string;
  };
}

function getAlbumPhoto(photos: Photo[], albumId: number) {
  return photos.find((photo) => photo.albumId === albumId)?.thumbnailUrl;
}

export default async function UserPage({ params }: UserPageProps) {
  const userId = Number(params.userId);
  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const albumsData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/albums`
  );
  const photosData = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const todosData = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const user = (await userData.json()) as User;
  const albums = (await albumsData.json()) as Album[];
  const photos = (await photosData.json()) as Photo[];
  const todos = (await todosData.json()) as Todo[];
  const userTodos = todos.filter((todo) => todo.userId === userId);
  return (
    <div>
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
      <section className="flex flex-col  w-full gap-2 p-10">
        <h3 className="text-3xl font-bold p-4">Albums</h3>
        {albums.map((album) => (
          <div
            key={album.id}
            className="flex items-center justify-start space-x-2"
          >
            {getAlbumPhoto(photos, album.id) ? (
              <Image
                src={getAlbumPhoto(photos, album.id)}
                alt="Image"
                width={50}
                height={50}
                className="rounded-md object-cover"
              />
            ) : (
              <div className="w-[50px] h-[50px] bg-gray-200"></div>
            )}
            <p>{album.title}</p>
          </div>
        ))}
      </section>
      <section className="flex flex-col  w-full gap-2 p-10">
        <h3 className="text-3xl font-bold p-4">Todos</h3>
        {userTodos.map((todo) => (
          <UserTodo key={todo.id} todo={todo} />
        ))}
      </section>
    </div>
  );
}
