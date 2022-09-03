import React, {useEffect, useState} from "react";
import {apiGetPosts} from "@/api/post";
import {BaseResult, Pageable, Post, PostsAndPageable} from "@/data/result.data";
import PageableState from "@/components/pageable_state";
import {Navigate} from '@umijs/max'
import {Link} from "@@/exports";
//首页的博客列表
const IndexPost: React.FC = () => {


    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState<number>(0)
    const [pageable, setPageable] = useState<Pageable | undefined>(undefined)


    useEffect(() => {
        nextPage().then()
    }, [])


    const nextPage = async () => {
        let nextPage = page + 1;
        const r = await apiGetPosts(nextPage, 10)
        handleData(r)
    }

    const handleData = (r: BaseResult<PostsAndPageable>) => {
        setPosts([...posts, ...r.data.list])
        setPageable(r.data.page)
        setPage(page + 1)
    }


    return <div>
        <div className={' grid grid-cols-2 gap-8'}>
            {
                posts.map(value => {
                    return <div key={value.id} className={'w-full relative'}>
                        <img className={'aspect-auto rounded-3xl'}
                             src={'https://img.itbug.shop/public%2F2022-09-0301%3A14%3A59%2Fl3kvrq.jpg'}/>
                        <Link to={'/post/'+value.id}>
                            <div className={'absolute bottom-4 left-4 text-white text-lg font-bold '}>{value.title}</div>
                        </Link>
                    </div>
                })
            }
        </div>

        <PageableState pageable={pageable} buildWidget={paged => {
            if (!paged) {
                return <button onClick={nextPage}
                               className={'bg-blue-500 transition ease-in-out rounded text-white p-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'}>加载更多...
                </button>
            }
            return <></>
        }}/>
    </div>
}
export default IndexPost