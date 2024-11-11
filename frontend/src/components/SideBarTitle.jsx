export function SideBarTitle({ label }){
    
    return(
        <div className="">
            <button className="flex justify-center justify-self-center bg-red-500 px-24 py-2 w-52 rounded-xl">
                <div className=''>
                    {label}
                </div>
            </button>
        </div>
    )
}