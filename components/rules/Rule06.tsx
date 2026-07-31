export default async function RulePage06() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-8 bg-zinc-50 dark:bg-black">
      <div className="flex items-center justify-between p-6 gap-20">
        <div
          className="flex w-60 h-60 items-center justify-center gap-2 border-3 rounded-full bg-white"
          style={{ fontSize: "26px" }}
        >
          <div className="font-gmk-medium text-black">추가</div>
          <div className="font-gmk-bold text-black">문장 힌트</div>
        </div>
        <div
          className="flex w-60 h-60 items-center justify-center gap-2 border-3 rounded-full bg-white"
          style={{ fontSize: "26px" }}
        >
          <div className="font-gmk-medium text-black">추가</div>
          <div className="font-gmk-bold text-black">그림 힌트</div>
        </div>
      </div>
    </div>
  );
}
