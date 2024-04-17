import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();

  const onSubmit = (formValues) => {
    resetField("login");
    resetField("password");
    alert(JSON.stringify(formValues));
  };

  const LoginRegister = register("login", {
    required: {
      value: true,
      message: "사용자 이름을 입력하세요.",
    },
  });

  const passwordRegister = register("password", {
    required: {
      value: true,
      message: "비밀번호를 입력하세요. ",
    },
  });

  return (
    <div>
      <div className="min-h-screen">
        <section className="flex flex-col h-screen">
          <main className="w-full h-full mt-16">
            <div className="flex justify-center items-center h-full w-full">
              <div className="hidden md:block bg-phone-image bg-no-repeat w-[465px] h-[635px] bg-[top_-46px] mr-13">
                <img
                  className="mt-[27px] ml-[157px]"
                  src="/images/screenshot.png"
                  alt="screen"
                />
              </div>
              <div className="w-[350px] ">
                <div className="w-full border border-stone-400 flex flex-col items-center">
                  <img
                    className="w-[175px] h-[51px] my-12"
                    src="/images/logo_instagram.png"
                    alt="logo"
                  />
                  
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col items-start"
                  >
                    <input
                      {...LoginRegister}
                      className="w-[268px] h-[38px] text-xs bg-secondary border border-stone-400 rounded-md mb-1 focus:outline-none"
                      type="text"
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                    />
                    <ErrorMessage
                      errors={errors}
                      name="login"
                      render={({ message }) => (
                        <span className="text-red-500 text-sm pb-1">
                          {message}
                        </span>
                      )}
                    />
                    <input
                      {...passwordRegister}
                      className="w-[268px] h-[38px] bg-secondary text-xs border border-stone-400 rounded-md mb-1 focus:outline-none"
                      type="text"
                      placeholder="비밀번호"
                    />
                    <ErrorMessage
                      errors={errors}
                      name="password"
                      render={({ message }) => (
                        <span className="text-red-500 text-sm pb-4 mb-1">
                          {message}
                        </span>
                      )}
                    />
                    <button className="w-[268px] h-[32px] text-lg text-white bg-blue-400 border rounded-lg">
                      로그인
                    </button>
                  </form>
                  <div className="flex justify-center items-center mt-4">
                    <div className="border-t-2 w-24"></div>
                    <span className="px-4">또는</span>
                    <div className="border-t-2 w-24"></div>
                  </div>
                  <div className="py-8 flex flex-col justify-center items-center">
                    <span className="py-2 text-sm">Facebook으로 로그인</span>
                    <span className="py-2 text-sm">비밀번호을 잊으셨나요?</span>
                  </div>
                </div>
                <div className="border w-full text-center border-stone-400 my-4">
                  <p className="text-sm py-6">계정이 없으신가요? 가입하기</p>
                </div>
              </div>
            </div>
          </main>

          {/* 푸터 */}
          <footer className="pb-10">
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
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
