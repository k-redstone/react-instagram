
const RecommendUser = () => {
  return(
    <div>
      <div className="flex flex-col mt-10 box-border px-2 text-sm ">
        <div className="w-[287px]">
          {/* 나 */}
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 mr-2 border rounded-2xl overflow-hidden">
              <img src="/images/sample.jpg" alt="sample" />
            </div>
            <div className="flex flex-col flex-grow">
              <p>nickname</p>
              <p>RealName</p>
            </div>
            <div>
              <p>전환</p>
            </div>
          </div>

          {/* 추천 */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-between py-6">
              <p>회원님을 위한 추천</p>
              <p>모두보기</p>
            </div>
            <div className="py-2">
              <div className="flex justify-center items-center">
                <div className="w-10 h-10 mr-2 border rounded-2xl overflow-hidden">
                  <img src="/images/sample.jpg" alt="sample" />
                </div>
                <div className="flex flex-col flex-grow">
                  <p>nickname</p>
                  <p>회원님을 위한 추천</p>
                </div>
                <div>
                  <p>팔로우</p>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex justify-center items-center">
                <div className="w-10 h-10 mr-2 border rounded-2xl overflow-hidden">
                  <img src="/images/sample.jpg" alt="sample" />
                </div>
                <div className="flex flex-col flex-grow">
                  <p>nickname</p>
                  <p>회원님을 위한 추천</p>
                </div>
                <div>
                  <p>팔로우</p>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex justify-center items-center">
                <div className="w-10 h-10 mr-2 border rounded-2xl overflow-hidden">
                  <img src="/images/sample.jpg" alt="sample" />
                </div>
                <div className="flex flex-col flex-grow">
                  <p>nickname</p>
                  <p>회원님을 위한 추천</p>
                </div>
                <div>
                  <p>팔로우</p>
                </div>
              </div>
            </div>

          </div>

          {/* 방침 */}
          <div className="mt-10 text-neutral-500 text-xs">
            <nav className="mb-5">
              <ul className="flex flex-wrap">
                <li className="mr-1">소개.</li>
                <li className="mr-1">도움말.</li>
                <li className="mr-1">홍보 센터.</li>
                <li className="mr-1">API.</li>
                <li className="mr-1">채용 정보.</li>
                <li className="mr-1">개인정보처리방침.</li>
                <li className="mr-1">약관.</li>
                <li className="mr-1">위치.</li>
                <li className="mr-1">언어.</li>
              </ul>
            </nav>
            <p>© 2024 INSTAGRAM FROM META</p>
          </div>




        </div>


      </div>
    </div>
  )
}


export default RecommendUser


// 소개
// 도움말
// 홍보 센터
// API
// 채용 정보


// 개인정보처리방침
// 약관
// 위치
// 언어
// Meta Verified
// © 2024 INSTAGRAM FROM META