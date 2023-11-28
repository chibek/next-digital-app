interface UserPageProps {
    params: {
      userId: string
    }
  }

export default async function UserPage({
    params,
  }: UserPageProps) {
    return (<div>user</div>)
  }