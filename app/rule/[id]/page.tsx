import Rule01 from "@/components/rules/Rule01";
import Rule02 from "@/components/rules/Rule02";
import Rule03 from "@/components/rules/Rule03";
import Rule04 from "@/components/rules/Rule04";
import Rule05 from "@/components/rules/Rule05";
import Rule06 from "@/components/rules/Rule06";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pages = {
    "1": <Rule01 />,
    "2": <Rule02 />,
    "3": <Rule03 />,
    "4": <Rule04 />,
    "5": <Rule05 />,
    "6": <Rule06 />,
  };

  return <>{pages[id as keyof typeof pages]}</>;
}
