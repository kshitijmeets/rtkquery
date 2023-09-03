import * as React from "react";
import {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {load, selectPosts} from '../state/tasksSlice';
import { useGetAllQuery } from "../state/postsLoader";

export const Tasks = ()=>{
    const {isSuccess, data, isFetching} = useGetAllQuery('');
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(load());
    },[]);

    return (<div>
            {isFetching && <span>...loading</span>}
            {isSuccess && <ul>
                {Object.keys(data).map(x=>(<li key={x}>
                    {data[parseInt(x)].title}
                </li>))}
            </ul>}
        </div>)
};