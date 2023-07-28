interface TagsProps {
    tagArr: string[];
  }

//const SPECIAL_TAGS: string[] = ["unity", "unreal"]
const TAG_CLASS:string = "px-2 py-0.5 rounded-xl text-sm mr-1 ";
/*
 className = {({ isActive }) =>
              isActive ? "font-bold bg-orange-500" + nav_class : "bg-purple-400 hover:bg-orange-500 transition-colors ease-in" + nav_class
              */
export default function Tags( {tagArr} : TagsProps){

   return(
   <div className = "inline-flex">
        {
        tagArr.map((tag: string) => 
            <div className =  {TAG_CLASS + "bg-gray-300"}>
            <p>{tag}</p>
            </div>)
    }   
    </div>
   );
    
}