import React, {useEffect, useState} from "react";
import {useParams} from "@@/exports";
import {apiGetBlogDetail} from "@/api/post";
import {Post} from "@/data/result.data";
import {marked} from "marked";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';

///博客详情
const PostDetailPage: React.FC = () => {
    const params = useParams()
    let id = params['id'];


    const [blog, setBlog] = useState<Post | undefined>(undefined)


    marked.setOptions({
        highlight(code: string, _: string): string | void {
            return hljs.highlightAuto(code).value
        },
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
        langPrefix: 'hljs '
    })

    useEffect(() => {
        if (id) {
            getBlog(Number(id)).then()
        }

    }, [])
    const getBlog = async (id: number) => {
        let r = await apiGetBlogDetail(id)
        setBlog(r.data)
    }

    return <div className={'relative'}>
        <div className={'max-w-screen overflow-x-hidden'}>
            <div className={'w-full lg:h-[46rem] h-[36rem] overflow-hidden relative flex justify-center'}>
                <img src={'https://img.itbug.shop/public%2F2022-09-0301%3A14%3A59%2Fl3kvrq.jpg'}
                     className={'absolute top-0 w-full h-full object-cover'}/>
                <div className="w-full h-full absolute top-0 right-0 bg-black bg-opacity-60"></div>
                <div className="w-full absolute lg:bottom-24 bottom-12 container lg:px-64 px-8"><p
                    className="text-white text-4xl font-extrabold">{blog?.title}</p>
                    <div className="flex flex-row mt-8 align-bottom"><img
                        src="https://img.itbug.shop/public%2F2022-07-3110%3A11%3A31%2Favatar.jpeg"
                        className="rounded-full h-8 w-8 mr-4" alt=""/>
                        <p className="text-white text-xl font-extrabold opacity-80">梁典典</p><p
                            className="text-white text-xl ml-8 opacity-60">{blog?.dateString}</p></div>
                </div>
            </div>
            <div className={'w-full flex justify-center my-24 bg-white shadow-xl relative px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28'}>
                <div className={'prose max-w-prose mx-auto'}>
                    {
                        blog && <div dangerouslySetInnerHTML={{
                            __html: marked.parse(blog.content)
                        }}></div>
                    }
                </div>
            </div>
        </div>

    </div>
}
export default PostDetailPage