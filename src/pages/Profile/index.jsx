import { MdAddAPhoto } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";
import ProfileArticle from "../../layout/ProfileArticle";
import dummyData from "../../assets/dummy/data.json";
import { useState, useEffect } from "react";

const ProfilePage = () => {
  const { userName } = useParams();
  const [userData, setUser] = useState(false);
  const [postData, setPostData] = useState(false);
  // console.log(userData.followers.length());

  const getUserPosts = () => {
    const user = dummyData.users.find((user) => user.username === userName);
    if (user) {
      setUser(user);
      const userPost = dummyData.posts.filter(
        (post) => post.userId === user.id
      );
      if (userPost.length !== 0) {
        setPostData(userPost);
      }
    } else {
      history.push("./not-found");
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <div>
      <section className="flex flex-col min-h-screen items-center">
        <main className="max-w-[935px] w-full">
          <div className=" px-5 pt-8">
            <header className="flex items-center mb-11">
              <div className="w-72">
                <div className="w-36 h-36 border rounded-full overflow-hidden mx-16 ">
                  <img src="/images/sample.jpg" alt="logo" />
                </div>
              </div>
              <div className="">
                <div className="flex text-xl font-semibold mb-4">
                  <p className="mr-4">{userData.username}</p>
                  <div className="flex items-center border rounded-md bg-neutral-300 px-3 mr-4">
                    <p className="text-base">팔로잉</p>
                  </div>
                  <div className="flex items-center border rounded-md bg-neutral-300 px-3 mr-4">
                    <p className="text-base">메시지 보내기</p>
                  </div>
                </div>
                <div className="flex font-semibold mb-6">
                  <p className="mr-4">게시물</p>
                  <p className="mr-4">
                    팔로워 {userData.followers ? userData.followers.length : 0}
                  </p>
                  <p>
                    팔로우 {userData.followers ? userData.following.length : 0}
                  </p>
                </div>
                <div className="">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus a cupiditate exercitationem! Cum inventore ipsum
                    voluptas nesciunt expedita, laboriosam minus necessitatibus
                    enim! Iste, autem inventore! Consectetur iure autem vel quo?
                  </p>
                </div>
              </div>
            </header>

            {/* 하이라이트 */}

            <div className="mb-11">
              <div className="flex">
                <div className="flex flex-col justify-center mx-6">
                  <div className="w-20 h-20 border rounded-full overflow-hidden">
                    <img src="/images/sample.jpg" alt="sample" />
                  </div>
                  <p className="text-center">name</p>
                </div>
                <div className="flex flex-col justify-center mx-6">
                  <div className="w-20 h-20 border rounded-full overflow-hidden">
                    <img src="/images/sample.jpg" alt="sample" />
                  </div>
                  <p className="text-center">name</p>
                </div>
              </div>
            </div>

            <nav className="text-neutral-500 h-[53px]">
              <div className="flex h-full justify-center items-center border-t-2">
                <NavLink to="/profile" className="h-full">
                  {({ isActive }) => (
                    <div className="h-full mr-8 ">
                      <span
                        className={`h-full flex items-center border-t-2 ${
                          isActive ? "border-black text-black" : "border-white"
                        } `}
                      >
                        게시물
                      </span>
                    </div>
                  )}
                </NavLink>
                <NavLink to="/" className="h-full">
                  {({ isActive }) => (
                    <div className="h-full">
                      <span
                        className={`h-full flex items-center border-t-2 ${
                          isActive ? " border-black text-black" : "border-white"
                        } `}
                      >
                        태그됨
                      </span>
                    </div>
                  )}
                </NavLink>
              </div>
            </nav>

            {/* 상태 추가예정(게시물 유무) */}
            <div className="my-10">
              {postData ? (
                <ProfileArticle postData={postData} />
              ) : (
                <div className="flex flex-col items-center">
                  <MdAddAPhoto className="text-6xl mb-5" />
                  <p className="font-semibold text-3xl mb-3">사진 공유</p>
                  <p className="text-base mb-10">
                    사진을 공유하면 회원님의 프로필에 표시됩니다.
                  </p>
                  <p className="text-base text-blue-500 font-semibold">
                    첫 사진 공유하기
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* 푸터 */}
        <div className="pb-11">
          <footer className="flex flex-col text-neutral-400">
            <div className="flex flex-col">
              <div className="flex justify-center flex-wrap">
                <span className="mx-2 text-xs">Meta</span>
                <span className="mx-2 text-xs">소개</span>
                <span className="mx-2 text-xs">블로그</span>
                <span className="mx-2 text-xs">채용 정보</span>
                <span className="mx-2 text-xs">도움말</span>
                <span className="mx-2 text-xs">API</span>
                <span className="mx-2 text-xs">개인정보처리방침</span>
                <span className="mx-2 text-xs">약관</span>
                <span className="mx-2 text-xs">위치</span>
                <span className="mx-2 text-xs">Instagram Lite</span>
                <span className="mx-2 text-xs">Threads</span>
                <span className="mx-2 text-xs">연락처 업로드 & 비사용자</span>
                <span className="mx-2 text-xs">Meta Verified</span>
              </div>
              <div className="flex justify-center py-2">
                <span className="mx-2 text-xs">한국어</span>
                <span className="mx-2 text-xs">
                  &copy; 2024 Instagram from Meta
                </span>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
