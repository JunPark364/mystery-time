export default async function RulePage05() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4 bg-zinc-50 dark:bg-black font-gmk-medium">
      <div
        className="w-full text-center font-gmk-medium"
        style={{ fontSize: "30px" }}
      >
        정답 발의
      </div>
      <div className="p-4 rounded-md border-1" style={{ fontSize: "20px" }}>
        <div className="grid grid-cols-[1fr_200px] gap-4 [&>*]:px-2">
          <div>사건의 인과관계가 틀리지 않고 모든 키워드가 포함된 경우</div>
          <div className="font-gmk-bold">정답</div>
          <div>틀린 내용이 포함된 경우</div>
          <div className="font-gmk-bold">오답</div>
          <div>인과관계가 틀리진 않지만 일부 정답 키워드가 누락된 경우</div>
          <div className="font-gmk-bold">키워드 부족</div>
        </div>
      </div>
      <div
        className="flex flex-col p-4 md:w-[880px] rounded-md font-gmk-light"
        style={{ backgroundColor: "#202020", fontSize: "15px" }}
      >
        <div className="font-gmk-medium mb-4">정답 키워드 : 조난, 시체</div>
        <p>
          남자는 과거 타고있던 배가 조난되어 다른 생존자들과 작은 섬에 표류하게
          되었다. 식재료가 떨어진 일행은 체력이 떨어지는 사람부터 죽어가기
          시작했고 살아남은 사람들은 살기 위하여 시체의 살을 먹기 시작했지만,
          남자는 이 식인 행위를 강력하게 거부했다.
        </p>
        <p>
          굶어 죽어가는 그를 그냥 두고 볼 수 없었던 다른 사람들은 시체의
          인육으로 수프를 끓인 뒤, 남자에게 바다 거북을 사냥해 그 고기로 수프를
          끓였다고 말했다. 남자는 수프를 먹고 기력을 차렸고 결국 구조될 때까지
          살아남을 수 있었다.
        </p>
        <p>
          그 뒤 레스토랑에서 명백하게 맛이 전혀 다른 진짜 바다거북 수프를
          직면하게 된 남자는 자신이 인육을 먹었다는 진실을 알게 된 뒤 죄책감에
          목숨을 끊었다.
        </p>
      </div>
    </div>
  );
}
