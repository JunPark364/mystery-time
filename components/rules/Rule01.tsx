export default async function RulePage01() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-8 bg-zinc-50 dark:bg-black">
      <div className="flex items-center justify-between p-6 gap-20">
        <div
          className="flex w-50 flex-col items-center justify-center gap-2 p-6 border-3"
          style={{ fontSize: "24px" }}
        >
          <div className="font-gmk-light">사건의</div>
          <div className="font-gmk-bold">개요</div>
        </div>
        <div
          className="flex w-50 flex-col items-center justify-center gap-2 p-6 border-3"
          style={{ fontSize: "24px" }}
        >
          <div className="font-gmk-light">사건의</div>
          <div className="font-gmk-bold">그림</div>
        </div>
        <div
          className="flex w-50 flex-col items-center justify-center gap-2 p-6 border-3"
          style={{ fontSize: "24px" }}
        >
          <div className="font-gmk-bold">정답 키워드</div>
          <div className="font-gmk-light">갯수</div>
        </div>
      </div>
    </div>
  );
}
