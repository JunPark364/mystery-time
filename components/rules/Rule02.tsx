import Image from "next/image";

export default async function RulePage02() {
  return (
    <div className="flex flex-col flex-1 items-center gap-4 bg-zinc-50 font-gmk-medium dark:bg-black">
      <div
        className="flex flex-col py-2 px-8 gap-1 rounded-md md:w-[710px]"
        style={{ backgroundColor: "#202020", fontSize: "18px" }}
      >
        <p>
          한 남자가 레스토랑에서 바다거북 스프를 주문한다. 스프를 한 숟갈 떠먹은
          남자는 주방장에게 이 스프가 정말 바다거북 수프인지 물어봤다. 주방장은
          맞다고 대답했고, 그 후 남자는 집에 돌아가 자살했다. 사건의 전말은?
          (정답 키워드 2개)
        </p>
      </div>
      <Image
        src="/rule/sea_turtle_soup.png"
        alt="sea-turtle-soup"
        width={800}
        height={150}
        className="h-auto"
        priority
      />
    </div>
  );
}
