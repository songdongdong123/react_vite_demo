import { useEffect } from "react";

const useTitle = function(title: string) {
   useEffect(() => {
    document.title = title;
   }, [])
}
 export default useTitle;
