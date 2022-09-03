import {request} from "@@/plugin-request";
import {BaseResult, Post, PostsAndPageable} from "@/data/result.data";

/**
 * 加载博客列表
 * @param page 页码
 * @param pageSize 页大小
 */
export function apiGetPosts(page: number,pageSize: number) : Promise<BaseResult<PostsAndPageable>>{
    return request<BaseResult<PostsAndPageable>>('/api/blog/list',{
        params:{
            page,
            pageSize
        }
    })
}


/**
 * 博客详情
 * @param id
 */
export function apiGetBlogDetail(id: number) : Promise<BaseResult<Post>> {
    return request<BaseResult<Post>>('/api/blog/get/'+id)
}