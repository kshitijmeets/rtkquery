import * as React from "react";
import { useGetAllQuery } from "../state/postsLoader";


export const Tasks = ()=>{
    const {isSuccess, data, isFetching} = useGetAllQuery('');


    return (<div>
            {isFetching && <span>...loading</span>}
            {isSuccess && <ul>
                {Object.keys(data).map(x=>(<li key={x}>
                    {data[parseInt(x)].title}
                </li>))}
            </ul>}
        </div>)
};