import {Pageable} from "@/data/result.data";
import React, {ReactNode} from "react";

type PageableProps = {
    pageable: Pageable | undefined
    buildWidget?: (paged: boolean) => ReactNode
}

const PageableState: React.FC<PageableProps> = ({pageable,buildWidget}) => {

    if (!pageable) {
        return <></>
    }
    return <div className={'text-center p-12'}>
        {
            buildWidget && buildWidget(pageable.paged)
        }
        {
            pageable.paged && <div className={'text-center'}>没有了~</div>
        }
    </div>
}
export default PageableState