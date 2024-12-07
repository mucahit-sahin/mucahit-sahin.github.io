import { GrSchedule } from "react-icons/gr";
import ThemeToggle from "./components/theme/ThemeToggle";

function Home() {
  return (
    <section className="flex-[1_1_50%] flex flex-col bg-white dark:bg-black">
      <div className="sticky z-10 top-0 flex flex-row items-center border-b border-gray-400 border-solid">
        <ThemeToggle />
        <div className="flex flex-col ml-2">
          <span className="text-black  dark:text-white text-lg font-extrabold">
            Mücahit Şahin
          </span>
          <span className="text-[#8899a6] text-sm">12 Tweets</span>
        </div>
      </div>
      <div className="profile">
        <div className="h-[200px] w-full bg-[#3d5466]"></div>
        <div className="flex flex-row items-center px-4">
          <div className="w-[134ox] h-[134px] -mt-[67px] rounded-full bg-white dark:bg-black p-[5px] flex items-center justify-center">
            <img
              src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="h-auto ml-auto -mt-2 px-4 py-2 border border-gray-500 border-solid rounded-full text-blue-500 text-base font-bold hover:bg-blue-500 hover:text-white">
            Edit Profile
          </div>
        </div>
        <div className="flex flex-col px-4">
          <span className="text-black dark:text-white text-lg font-extrabold">
            Mücahit Şahin
          </span>
          <span className="text-gray-500 text-sm">@mucahit-sahin</span>
          <div className="my-1 text-black dark:text-white text-sm">
            <p>Junior Software Developer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, fugiat numquam eius inventore sed commodi explicabo
              illo velit maiores blanditiis aut quidem rem deserunt libero iure
              natus suscipit vero asperiores?
            </p>
          </div>
          <span className="flex items-center text-sm">
            <GrSchedule className="text-black dark:text-white text-sm mr-1" />
            <span className="text-gray-500">Joined December 2011</span>
          </span>
        </div>
        <div className="px-4 mt-1">
          <span className="mr-4">
            <span className="text-black dark:text-white font-bold text-sm mr-1">
              167
            </span>
            <span className="text-gray-500 text-sm">Following</span>
          </span>
          <span className="mr-4">
            <span className="text-black dark:text-white font-bold text-sm mr-1">
              167
            </span>
            <span className="text-gray-500 text-sm">Followers</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;
