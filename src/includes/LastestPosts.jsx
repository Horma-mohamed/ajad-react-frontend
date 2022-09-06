import { useTranslation } from "react-i18next";
import posts from "../api/posts";
import Post from "../components/Post";

export default function LastestPosts(){
    const {t} = useTranslation()
    return(
        <div className="w-full h- bg--400 mt-40  px-4 lg:px-4 ">
        <span className="text-2xl z-[-1] mb-2 font-bold font-karla text-gray-700 relative  before:absolute before:-bottom-1 before:w-8 before:h-0.5 before:rounded-full before:bg-orange-300  ">
           {t("LATEST_POSTS")}
          </span>

          <ul className="p- pt- space-y- lg:flex lg:flex-wrap lg:gap-8  ">
          {
              
              posts().map((post,i)=>(
                  <Post post={post} />
              ))
            }
          </ul>
        </div>
    )
}