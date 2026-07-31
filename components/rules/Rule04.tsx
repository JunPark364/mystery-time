export default async function RulePage04() {
  return (
    <div className="flex flex-col flex-1 justify-center gap-4 bg-zinc-50 dark:bg-black font-gmk-medium">
      <div
        className="w-full text-center font-gmk-medium mb-6"
        style={{ fontSize: "30px" }}
      >
        질문하기
      </div>
      <ul className="list-disc" style={{ fontSize: "20px" }}>
        <li>한 턴당 최대 5번 질문 가능</li>
        <li>질문에 대한 답변은 4가지 하나로 응답</li>
      </ul>
      <div
        className="p-4 rounded-md"
        style={{ backgroundColor: "#202020", fontSize: "16px" }}
      >
        <div className="grid grid-cols-[3fr_50px_2fr] gap-2 [&>*]:px-2">
          <div>질문 내용이 모두 사실일 경우</div>
          <div>→</div>
          <div className="font-gmk-bold">네, 그렇습니다</div>
          <div>질문 내용이 모두 거짓인 경우</div>
          <div>→</div>{" "}
          <div className="font-gmk-bold">아니오, 그렇지 않습니다</div>
          <div>사실과 거짓이 섞여있거나 불분명한 경우</div>
          <div>→</div>
          <div className="font-gmk-bold">그럴 수도 있습니다</div>
          <div>문제 해결에 중요하지 않을 경우</div>
          <div>→</div>
          <div className="font-gmk-bold">중요하지 않습니다</div>
        </div>
      </div>
      <div className="flex flex-col gap-2" style={{ fontSize: "20px" }}>
        <div className="flex items-center justify-between gap-10">
          <div className="font-gmk-light">
            남자는 예전에 바다거북 스프를 먹어본 적이 있나요?
          </div>
          <div className="font-gmk-medium">아니오, 그렇지 않습니다</div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div className="font-gmk-light">주방장은 여자였나요?</div>
          <div className="font-gmk-medium">중요하지 않습니다</div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div className="font-gmk-light">
            남자는 과거 조난당한 경험이 있나요?
          </div>
          <div className="font-gmk-medium">네, 그렇습니다</div>
        </div>
      </div>
    </div>
  );
}
