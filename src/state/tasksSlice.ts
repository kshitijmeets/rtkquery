import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';


type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

type PostState = {
    [key:number]: Post
}


let initialState: PostState = {};

export const tasksSlice = createSlice({
    name:"posts",
    initialState: initialState,
    reducers:{
        load:(state)=>{
            return state && Object.keys(state).length ? state : {
                1:{
                    title: 'First title',
                    done : false,
                    id: 1,
                    body: 'Test body',
                    userId: 1
                }
            }
        }
    }
});

export const { load } = tasksSlice.actions;

export const selectPosts = (state: RootState) => Object.values(state.posts);

export default tasksSlice.reducer;