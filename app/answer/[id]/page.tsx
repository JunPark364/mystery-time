import Answer01 from "@/components/answers/Answer01";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pages = {
    "1": <Answer01 />,
  };

  return <>{pages[id as keyof typeof pages]}</>;
}
