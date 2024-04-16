import GlobalNav from "./GlobalNav"

const HomeLayout = ({children}) => {
  return (
    <div className="flex">
      <GlobalNav />
      <div className="flex w-full justify-center ml-[72px] mt-4 md:ml-[335px]">
        {children}
      </div>
    </div>
  )
}

export default HomeLayout