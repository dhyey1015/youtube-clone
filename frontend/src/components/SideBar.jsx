import { SideBarTitle } from "./SideBarTitle"

export function SideBar(){
    
    return(
        <div className="flex flex-col border border-black max-w-60 p-3">
            <div>
                <SideBarTitle label={"Home"}/>
            </div>
            <div>
                <SideBarTitle label={"Home"}/>
            </div>
            <div>
                <SideBarTitle label={"Home"}/>
            </div>
        </div>
    )
}