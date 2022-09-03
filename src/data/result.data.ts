export interface BaseResult<T> {
    data:    T;
    message: string;
    state:   number;
}

export interface PostsAndPageable {
    list: Post[];
    page: Pageable;
}

export interface Post {
    aliasString: string;
    author:      string;
    category:    Category;
    content:     string;
    createTime:  number;
    dateString:  string;
    id:          number;
    tags:        Tag[];
    thumbnail:   string;
    title:       string;
}


export interface Category {
    createTime: number | undefined;
    id:         number;
    intro:      string;
    logo:       string;
    name:       string;
}

export interface Tag {
    id:   number;
    name: string;
}

export interface Pageable {
    currentPage: number;
    hasPrevious: boolean;
    maxPage:     number;
    pageSize:    number;
    paged:       boolean;
    total:       number;
}
