import Case01 from "@/components/cases/Case01";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pages = {
    "1": <Case01 />,
  };

  return <>{pages[id as keyof typeof pages]}</>;
}
