import { useState } from "react";

const NextPrev = (props)=>{
   const [currentPage,changeCurrentPage] = useState(1);
   props.page(currentPage);
    return(
        <>
            <button onClick={()=>{
             changeCurrentPage((prev)=>{
                if(prev > 1){
                    const ans = prev-1;
                    return ans;
                }
                else{
                    return 1;
                }
             });
            }}>PREV</button>
            <button onClick={()=>{changeCurrentPage(currentPage+1)}}>NEXT</button>
            <div>{currentPage}</div>
        </>
    )
}

export default NextPrev;